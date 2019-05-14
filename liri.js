var dotenv = require("dotenv").config();
var keys = require("./key.js");
var spotify = new Spotify(keys.spotify);
var arguments = process.argv;
console.log(keys);
if(arguments[2] === "concert-this"){
    
}
if(arguments[2] === "spotify-this-song"){

}
if(arguments[2] === "movie-this"){

}
if(arguments[2] === "do-what-it-says"){

}