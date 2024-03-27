document.addEventListener("DOMContentLoaded", () => {
    fetchDogs();


    
//created an event listener "Submit"    
const form = document.querySelector("form");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log(e)

 // create dog object 
 const newName = e.target[0].value;
 const newDesc = e.target[1].value;
 const newLocation = e.target[2].value;
 const newPrize = e.target[3].value;
 const newImage = e.target[4].value;

 const newDogObj = {
    name: `${newName}`,
    description: `${newDesc}`,
    location: `${newLocation}`,
    prize: `${newPrize}`,
    image: `${newImage}`
    }

    })
//create submit button 
const submitBtn = document.createElement('button');
submitBtn.textContent = "Add a doggo";
form.appendChild(submitBtn);


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

//POST Fetch
function createDog(object){
    fetch("http://localhost:3000/dogs", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(object)
        })
        .then(res => res.json())
        .then(newData => renderDogCard(newData));
        
    }

//DELETE Fetch

//Callback Functions 

//Mouseover EventListener 

