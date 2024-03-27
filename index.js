document.addEventListener("DOMContentLoaded", () => {
    fetchDogs();
})
//GET Fetch

function fetchDogs(){
    fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(dogData => {
        dogData.forEach((dog) => renderDogs(dog));
    });
};

//Render Dog Function 
function renderDogs(dog){
    //created container for each dog 
    const dogCard = document.querySelector(".dog_card");
    const dogContainer = document.createElement("div");
    dogContainer.id = (`container${dog.name}`);
    dogCard.appendChild(dogContainer);


}



//DELETE Fetch

//Callback Functions 

//Mouseover EventListener 

