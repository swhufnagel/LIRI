require("dotenv").config();
var fs = require('file-system');
var keys = require("./key.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var arguments = process.argv;

function searchSong() {
  if (process.argv.length === 3) {
    query = "Ace The Sign"
  }
  spotify.search({ type: 'track', query: query }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
    console.log("Track: " + data.tracks.items[0].name);
    console.log("Link: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
    fs.appendFile("log.txt", 
    "Artist: " + data.tracks.items[0].album.artists[0].name + "\n"
    + "Track: " + data.tracks.items[0].name + "\n"
    +  "Link: " + data.tracks.items[0].preview_url + "\n" 
    + "Album: " + data.tracks.items[0].album.name + "\n", function(err){});
  });
}
function searchMovie(){
    if (process.argv.length === 3) {
      movie = "Mr.Nobody"
    }
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
      function (response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Cast: " + response.data.Actors);

        fs.appendFile("log.txt", 
        "Title: " + response.data.Title + "\n"
        + "Year: " + response.data.Year + "\n"
        + "IMDB Rating: " + response.data.Ratings[0].Value + "\n"
        + "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n"
        + "Country: " + response.data.Country + "\n"
        + "Language: " + response.data.Language + "\n"
        + "Plot: " + response.data.Plot + "\n"
        + "Cast: " + response.data.Actors + "\n"
    , function(err){});
      }
    );
  }
function searchConcert(){
  if (process.argv.length > 4) {
    artist = artist.join("+");
  }
  if (process.argv.length === 3) {
    artist = "Twiddle"
  }
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function (response, err) {
      for (i = 0; i < response.data.length; i++) {
        console.log(response.data[i].datetime)
        console.log(response.data[i].venue.name)
        console.log(response.data[i].venue.city + ", " + response.data[i].venue.region + "\n")

        fs.appendFile("log.txt", 
    "Date: " + response.data[i].datetime + "\n"
    + "Venue: " + response.data[i].venue.name + "\n"
    +  "Location: " + response.data[i].venue.city + "\n" 
    , function(err){});
      }
      if (err) {
        console.log("error: " + err);
      }
    });
}
if (arguments[2] === "movie-this") {
  var movie = arguments.slice(3);
  searchMovie();
}

if (arguments[2] === "concert-this") {
    var artist = arguments.slice(3)
    searchConcert();
  }
if (arguments[2] === "spotify-this-song") {
  var query = arguments.slice(3);
  searchSong()
}
if (arguments[2] === "do-what-it-says") {
  fs.readFile("random.txt", "utf-8", function (err, data) {
    var whatItIs = data.split(",");
    if(whatItIs[0] === "concert-this"){
      process.argv.push("whatitis");
      artist = whatItIs[1];
      artist = artist.substring(1, artist.length-1);
      if (artist.indexOf(" ") !== -1) {
        artist = artist.split(" ");
      }
      artist = artist.join("+");
      searchConcert();
    }
    if(whatItIs[0] === "movie-this"){
      process.argv.push("whatitis");
      movie = whatItIs[1];
      movie = movie.substring(1, movie.length-1);
      movie = movie.split(" ");
      searchMovie();
    }
    if(whatItIs[0] === "spotify-this-song"){
      process.argv.push("whatitis");
      query = whatItIs[1];
      searchSong();
    }
  });
}