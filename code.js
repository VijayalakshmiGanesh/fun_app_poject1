var btn = document.querySelector("#btn-submit") //button
var inputText = document.querySelector("#input-box") //input
var outputText = document.querySelector("#output") //output

// attribute selector: "input[name='translator']" 
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getResponseText(input) {
    return serverURL + "?" + "text=" + input
};
function clickHandler() {

    var input = inputText.value; //input
    fetch(getResponseText(input)) //processing
        .then(response => response.json())
        .then(json => {
            var transText = json.contents.translated;
            outputText.innerText = transText; //output
        })
        .catch(errorHandler) //Calling server
};
function errorHandler(error) {
    console.log("Error Occured ... " + error)
    alert("Something is wrong! Try again later")
};
btn.addEventListener("click", clickHandler)