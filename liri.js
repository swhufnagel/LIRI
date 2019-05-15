require("dotenv").config();
var keys = require("./key.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var arguments = process.argv;
if(arguments[2] === "concert-this"){
  var artist = arguments.slice(3)
  if(process.argv.length > 3){
    artist = artist.join("+");
  }
  if(process.argv.length === 3){
    artists = "Twiddle"
  }
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function(response, err){
      for(i=0;i<response.data.length;i++){
      console.log(response.data[i].datetime)
      console.log(response.data[i].venue.name)
      console.log(response.data[i].venue.city + ", " + response.data[i].venue.region + "\n")
      }
      if(err){
        console.log("error: " + err);
      }
  });

}
if(arguments[2] === "spotify-this-song"){
    var query = arguments.slice(3);
  if(process.argv.length === 3){
    query = "The Sign"
  }
    spotify.search({ type: 'track', query: query }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log("Artist: " + data.tracks.items[0].album.artists[0].name); 
      console.log("Track: " + data.tracks.items[0].name); 
      console.log("Link: " + data.tracks.items[0].preview_url); 
      console.log("Album: " + data.tracks.items[0].album.name); 
      });
}
if(arguments[2] === "movie-this"){
  var movie = arguments.slice(3);
  if(process.argv.length === 3){
    movie = "Mr.Nobody"
  }
  axios.get("http://www.omdbapi.com/?t="+ movie + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.Ratings[0].Value);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Cast: " + response.data.Actors);
    }
  );
}
if(arguments[2] === "do-what-it-says"){

}