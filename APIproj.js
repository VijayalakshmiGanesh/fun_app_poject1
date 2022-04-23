var foodName = document.querySelector("#foodName")
var output = document.querySelector("#songLyrics")
var food = document.querySelector("#food")
var recipe = document.querySelector("#recipe")

food.addEventListener("click", showFood)
console.log("Inside js file")
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
        }).catch(errorHandler)
};

function errorHandler(error) {
    console.log("Error Occured ... " + error)
    recipe.innerHTML = "This meal is not available, Try with proper meal name"
};