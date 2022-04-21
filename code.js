var btn = document.querySelector("#btn-submit")
var inputText = document.querySelector("#input-box")
var nameText = document.querySelector("#input-name");
var output = document.querySelector("#output")
// attribute selector: "input[name='translator']" 
console.log(inputText)
console.log(output)
function clickHandler() {
    console.log("Click..");
    console.log("input", inputText.value);
    console.log("Name:", nameText.value)

};
btn.addEventListener("click", clickHandler)