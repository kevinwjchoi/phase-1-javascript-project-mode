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

    //creating html elements for each dog 
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    //appended to DOM 
    dogContainer.appendChild(h2);
    dogContainer.appendChild(p1);
    dogContainer.appendChild(p2);
    dogContainer.appendChild(p3);
    h2.textContent = dog.name;
    p1.textContent = dog.description;
    p2.textContent = dog.location;
    p3.textContent = dog.image;

}



//DELETE Fetch

//Callback Functions 

//Mouseover EventListener 

