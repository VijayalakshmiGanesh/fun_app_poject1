var btn = document.querySelector("#btn-submit")
var inputText = document.querySelector("#input-box")
// var nameText = document.querySelector("#input-name");
var outputText = document.querySelector("#output")
// attribute selector: "input[name='translator']" 

function clickHandler() {

    outputText.innerText = "Translated " + inputText.value;


};
btn.addEventListener("click", clickHandler)