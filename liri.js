require("dotenv").config();
var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify)

//capture comands user puts in

var command = process.argv[2]

for (let i = 0; i < process.argv.length; i++) 
    

//var request is process.argv of anything 3 or greater

//switch statement to see what the command is 
//"concert-this"
//"spotify-this-song"
//"movie-this" -activity with this in it
//"do-what-it-is"
//otherwise display try again
console.log(command)

//run usercommand of conert this
//in the homework instructions, the link will be there
//venue, location, date
//format date of event of MM/DD/YYYY

//same thing but with spotifiy package info

