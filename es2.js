class Pet {
  constructor(_owenerName, _petName, _species, _breed) {
    this.owenerName = _owenerName;
    this.petName = _petName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(pet) {
    return this.owenerName.toLowerCase === pet.owenerName.toLowerCase;
  }
}

const listOfPet = [];

const form = document.querySelector("form");
const petsList = document.getElementById("petsList");
const list = document.createElement("ul");
list.classList.add("row");
list.classList.add("row-cols-6");
list.classList.add("gap-3");

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const owener = formData.get("owener");
  const petName = formData.get("petName");
  const petSpecies = formData.get("petSpecies");
  const breed = formData.get("breed");
  const pet = new Pet(owener, petName, petSpecies, breed);
  listOfPet.push(pet);
  petsList.innerHTML = "";
  list.innerHTML = "";
  console.log(listOfPet);

  listOfPet.forEach((pet) => {
    const liItem = document.createElement("li");
    liItem.classList.add("border");
    liItem.classList.add("p-3");
    liItem.classList.add("list-unstyled");
    const listowener = document.createElement("h6");
    listowener.classList.add("fs-3");
    listowener.innerText = pet.owenerName;
    const listPetName = document.createElement("p");
    listPetName.classList.add("mb-0");
    listPetName.innerText = pet.petName;
    const listPetSpecies = document.createElement("p");
    listPetSpecies.classList.add("mb-0");
    listPetSpecies.innerText = pet.species;
    const listBreed = document.createElement("p");
    listBreed.classList.add("mb-0");
    listBreed.innerText = pet.breed;

    liItem.appendChild(listowener);
    liItem.appendChild(listPetName);
    liItem.appendChild(listPetSpecies);
    liItem.appendChild(listBreed);
    list.appendChild(liItem);
    petsList.appendChild(list);
  });
  form.reset();
};
