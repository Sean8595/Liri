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
function heyLiri(){
switch(command){
case "concert-this":
    console.log("concert-this");
    var queryUrl ="https://rest.bandsintown.com/artists/" + searchResult + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function(response) {
            for (let i = 0; i < 5; i++)  
                
            
            if ((response.data.length > 0) && (Array.isArray(response.data))) {
            console.log(response.data[i].venue.name)
            console.log(response.data[i].venue.city)
            console.log(response.data[i].datetime)
            console.log("######################################")
            
            //response.data is an array, loop over the array and show the user the upcoming shows)
            //tell the user there are no shows for that band)
            }
            else {
                console.log("No bands on tour by that name")
            }
            }
        );
    break;
case "spotify-this-song":
        console.log("Spotify this song");
        spotify.search({ type: 'track', query: searchResult }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            for (var i=0; i < 1; i++) {
                console.log("############################")
                console.log("Artist is " + data.tracks.items[i].artists[i].name);
                console.log("Song Name " + data.tracks.items[i].name)
                console.log("Album is " + data.tracks.items[i].album.name); 
                console.log("Get a sample of that song at " + data.tracks.items[i].href)
                
            }
          });
    break;

case "movie-this":
    console.log("movie-this")
        console.log(searchResult)
        var queryUrl = "http://www.omdbapi.com/?t=" + searchResult + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
          function(response) { 
            console.log("############################")
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
    var newData = data.split(" ,");
    console.log(newData[0]);
    command = newData[0];
    searchResult = newData[1];
    heyLiri();
    
}
    )
    
    break;
    
default:
    console.log("I dont understand this command");
    break;
}
}

heyLiri();
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

