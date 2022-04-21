var btn = document.querySelector("#btn-submit")
var inputText = document.querySelector("#input-box")
var nameText = document.querySelector("#input-name");

console.log(inputText)
function clickHandler() {
    console.log("Click..");
    console.log("input", inputText.value);
    console.log("Name:", nameText.value)
};
btn.addEventListener("click", clickHandler)