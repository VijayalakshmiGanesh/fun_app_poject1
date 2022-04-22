var artist = document.querySelector("#artistName")
var song = document.querySelector("#songName")
var button = document.querySelector("#show")
var output = document.querySelector("#songLyrics")

button.addEventListener("click", showLyrics)
var musicURL = "https://api.lyrics.ovh/v1/"

function showLyrics() {
    var artistName = artist.value;
    console.log(artistName)
};