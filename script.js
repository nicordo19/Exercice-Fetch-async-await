async function fetchOffers() {
  const url = await fetch("https://dummyjson.com/recipes");
  const recette = await url.json();

  console.log(recette);

  const maDiv = document.querySelector("#container");

  maDiv.innerHTML += "<h1>Voici la recette</h1>";

  if (recette.recipes && recette.recipes.length > 0) {
    maDiv.innerHTML += `<h4>voici la ${recette.recipes[0].name}</h4>`;
  } else {
    maDiv.innerHTML += `<h4>La recette n'est pas diponible</h4>`;
  }

  if (recette.recipes[0].image) {
    const urlImage = recette.recipes[0].image;
    const placeImage = document.createElement("img");
    placeImage.className = "imageMarga";
    placeImage.src = urlImage;
    placeImage.style.width = "200px";
    placeImage.style.height = "auto";
    maDiv.appendChild(placeImage);
  }
}
fetchOffers();

const body = document.querySelector("body");
const maDiv2 = document.createElement("div");

maDiv2.className = "imageContainaire";

body.appendChild(maDiv2);

async function pizzaDeux() {
  const url = await fetch("https://dummyjson.com/recipes");

  const recette = await url.json();

  if (recette.recipes && recette.recipes.length > 1) {
    maDiv2.innerHTML += `<h2>Voici la ${recette.recipes[1].name}</h2>`;
  } else {
    maDiv2.innerHTML += `<h2> Le Nom de la Pizza n'est pas disponible</h2>`;
  }
  console.log(`${recette.recipes[1].name}`);
  if (recette.recipes[0].image) {
    const urlImage2 = recette.recipes[1].image;
    const Image2 = document.createElement("img");
    maDiv2.appendChild(Image2);
    Image2.src = urlImage2;
    Image2.style.width = "200px";
    Image2.style.height = "auto";
  } else {
    Image2.innerHTML += "désoler vous n'avais pas l'image ";
  }
}

pizzaDeux();
