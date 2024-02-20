   function loadMeals (khabar) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${khabar}`)
    .then(response => response.json())
    .then(foods => displayMeals(foods.meals))
   }
   
    function displayMeals(foods) {
       var parentDiv = document.getElementById('eiBeta');
       parentDiv.innerHTML = ``;
       for (var food of foods) {
  
    var mealDiv = document.createElement('div')

    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
    <div onclick="showDetails(${food.idMeal})"  class="card h-100">
    <img src=" ${food.strMealThumb}" class="card-img-top rounded-circle" alt=" ">
    <div class="card-body">
    <h5 class="card-title"> ${food.strMeal}</h5>
    <h6>Category: ${food.strCategory}</h6>
    <p class="card-text"> ${food.strInstructions.slice(0,100)}</p></div>
    </div>
    `
    parentDiv.appendChild(mealDiv)
    
}
}
// search meal
function searchMeal() {
  var searchField = document.getElementById('meal');
  console.log(searchField.value);
  loadMeals(searchField.value);
  searchField.value = ``;
}


// function of show details

function showDetails (foodID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`)
  .then(response => response.json())
  .then(foodDetails => details(foodDetails.meals[0]))
}

 function details(foodDetails) {
   var detailsCard = document.getElementById('details-card');
   var newCard = document.createElement('div');
   newCard.innerHTML = `
   <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4 bg-info-subtle"> 
      <img src="${foodDetails.strMealThumb}" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body bg-danger-subtle">
        <h5 class="card-title">${foodDetails.strMeal}</h5>
        <p class="card-text">${foodDetails.strInstructions}</p>
      
      </div>
    </div>
  </div>
</div>

   `
   detailsCard.appendChild(newCard)
 }


