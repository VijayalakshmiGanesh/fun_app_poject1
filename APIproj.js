var foodName = document.querySelector("#foodName")
var output = document.querySelector("#songLyrics")
var food = document.querySelector("#food")
var recipe = document.querySelector("#recipe")

food.addEventListener("click", showFood)

function showFood() {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + foodName.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.meals.forEach(meal => {
                var ins = meal.strInstructions
                console.log(ins);
                recipe.innerHTML = "<b>Instructions to cook: </b>" + ins;
            })
        })


};


function showLyrics() {
    var input = artist.value + "/" + song.value;



    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.lyrics.ovh/v1/' + input);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            output.innerText = this.responseText;
        }
    };

    request.send();



};