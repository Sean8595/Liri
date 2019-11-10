require("dotenv").config();
var fs = require("fs")
var keys = require("./keys.js")
var axios = require("axios")
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify)
//capture comands user puts in
var command = process.argv[2];
var input = process.argv;
var searchResult = '';
for (var i = 3; i < input.length; i++) {
    if (i > 3 && i < input.length) {
      searchResult = searchResult + "+" + input[i];
    } else {
        searchResult += input[i];
    }
  }
switch(command){
case "concert-this":
    console.log("concert-this");
    var searchResult = process.argv[3]
    var queryUrl ="https://rest.bandsintown.com/artists/" + searchResult + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function(response) {
            console.log(response.ArtistData[0].venue)
        });
    break;
case "spotify-this-song":
        console.log("Spotify this song");
        var queryUrl = "https://api.spotify.com/v1/" + searchResult;
        axios.get(queryUrl).then(
            function(response) {
                console.log(response)
            });
    break;

case "movie-this":
    console.log("movie-this")
        console.log(searchResult)
        var queryUrl = "http://www.omdbapi.com/?t=" + searchResult + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
          function(response) { 
            console.log("Title is " + response.data.Title);
            console.log("Release year is " + response.data.Year);
            console.log("IMDB Rating is " + response.data.Ratings[0].Value);
            console.log("Rotten Tomato Rating is " + response.data.Ratings[1].Value);
            console.log("Made in " + response.data.Country)
            console.log("Language is " + response.data.Language)
          })
    break;

case "do-what-it-says":
    console.log("Did what it said");
    fs.readFile("random.txt", "utf8", function(err, data) {
    })
    break;
    
default:
    console.log("I dont understand this command");
    break;
}


//var request is process.argv of anything 3 or greater

//switch statement to see what the command is 
//"concert-this"
//"spotify-this-song"
//"movie-this" -activity with this in it
//"do-what-it-is"
//otherwise display try again


//run usercommand of conert this
//in the homework instructions, the link will be there
//venue, location, date
//format date of event of MM/DD/YYYY

//same thing but with spotifiy package info

