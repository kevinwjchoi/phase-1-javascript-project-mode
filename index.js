document.addEventListener("DOMContentLoaded", () => {
    console.log("works");
    fetchDogs();
})
//GET Fetch

function fetchDogs(){
    fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(data => console.log(data));
};



//DELETE Fetch

//Callback Functions 

//Mouseover EventListener 

