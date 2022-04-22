var artist = document.querySelector("#artistName")
var song = document.querySelector("#songName")
var button = document.querySelector("#show")
var output = document.querySelector("#songLyrics")

button.addEventListener("click", showLyrics)
var musicURL = "https://api.lyrics.ovh/v1/"

function showLyrics() {
    var input = artist.value + "/" + song.value;

    // //processing
    // fetch(getResponseText(input))
    // .then(response => response.json())
    // .then(json => {
    //     var lyrics = json.contents
    // })

    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.lyrics.ovh/v1/' + input);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            output.innerText = this.responseText;
        }
    };

    request.send();



};