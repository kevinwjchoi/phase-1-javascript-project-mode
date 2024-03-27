//GET Fetch
function fetchDB () {
    fetch ("http://localhost:3000/dogs")
    .then (res => res.json())
    .then(dogData => {
        dogData.forEach(dog => renderDogCard(dog))
    })
    
};

//Render Dog card
function renderDogCard(dog){
    //created main and span inside body tag 
    const main = document.querySelector('main');
    const div = document.createElement("div");
    const divCard = document.createElement("div");
    divCard.classList = (".dog_card");
    div.id = (`container_${dog.name}`);
    const foundBtn = document.createElement("button");
    foundBtn.classList = ("found_button");
    

    //creating dog info 
    const h2 = document.createElement("h2");
    h2.textContent = dog.name;

    const p = document.createElement("p");
    p.textContent = dog.description;

    const p1 = document.createElement("p1");
    p1.id = ("dog_location");
    p1.textContent = dog.location;

    foundBtn.textContent = ("Found");
    p1.appendChild(foundBtn);
    
    //appending elements to DOM
    main.appendChild(divCard);
    divCard.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p1);

    //Adding "Click" eventListener 
    foundBtn.addEventListener("click", () => {
        const deletingNode = document.getElementById(`container_${dog.name}`);
        deletingNode.remove();
        deleteDB(dog.id);

    })
    
    
}
//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    //when DOM is loaded, invoke GET Request
    fetchDB();

    //Creating a Submit Button
    const form = document.querySelector("form");
    const btn = document.createElement("button");
    btn.textContent = "Add doggo";
    form.append(btn);


    //Adding eventListener to Submit button 
    form.addEventListener("submit", (e) => {
        e.preventDefault();

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
    
    //passes newDogObj as an argument into the create dog function
    createDog(newDogObj);

    //this resets the submit input values after submitting.
    form.reset();


    })
    
})

//POST REQUEST 
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
function deleteDB(id){
    fetch (`http://localhost:3000/dogs/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then((dog) => console.log(dog))
}

//Mouseover EventListener 

