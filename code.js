var btn = document.querySelector("#btn-submit")
var inputText = document.querySelector("#input-box")

console.log(inputText)
function clickHandler() {
    console.log("Click..");
    console.log("input", inputText.value);
};
btn.addEventListener("click", clickHandler)