document.addEventListener("DOMContentLoaded", () => {
    fetchDogs();
})
//GET Fetch

function fetchDogs(dogData){
    fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(dogData => {
        dogData.forEach((dog) => renderDogs(dog));
    });
};

//Render Dog Function 
function renderDogs(){
    const dogCard = document.querySelector(".dog_card");
    console.log(dogCard)
}



//DELETE Fetch

//Callback Functions 

//Mouseover EventListener 

