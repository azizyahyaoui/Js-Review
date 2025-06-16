/**
 *  fetch = Function used for making HTTP requests to fetch resources.
 *         (JSON style data, images, files)
 *         Simplifies asynchronous data fetching in JavaScript and
 *         used for interacting with APIs to retrieve and send
 *         data asynchronously over the web.
 *         fetch(url, {options})*
 */

let baseUrl = "https://pokeapi.co/api/v2/pokemon/";

// Fetching data from a URL using the Fetch API with promises

fetchDataWithPromises(baseUrl);
function fetchDataWithPromises(url = baseUrl) {
  return fetch(`${url}pikachu`)
    .then((res) => {
      return res.ok
        ? res.json()
        : Promise.reject(new Error("------ Failed to fetch data !! --------"));
    }) // returns a promise that resolves to the JSON data
    .then((data) => {
      console.log(
        "----------------- Fetch Data API With Promises: -----------------"
      );
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

//Fetching data from a URL using the Fetch API with async/await

const fetchData = async (url) => {
  try {
  const resp = await fetch(`${url}typhlosion`);

    if (!resp.ok) {
      throw new Error("------ Failed to fetch data !! --------");
    }

    const data = await resp.json();
    console.log(
      "----------------- Fetch Data API With Async/Await: -----------------"
    );
    console.log("Data:", data);

  } catch (error) {
    console.error("An error occurred:", error);
  }
};

fetchData(baseUrl)

// Example
//Fetching data from a URL using the Fetch API with async/await

const fetchDataToDom = async (url) => {
  try {
  
  const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
  const imgElement = document.getElementById("pokemonSprite");
    const resp = await fetch(`${url}${pokemonName}`);
    if (!resp.ok) {
      throw new Error("------ Failed to fetch data !! --------");
    }

    const data = await resp.json();
    const pokemonSprite = data.sprites.front_default;
    imgElement.src = pokemonSprite;
    imgElement.style.display ="block"
    
    

  } catch (error) {
    console.error("An error occurred:", error);
  }
};


// Fetching data from a URL using Axios library
console.log("----------------- Fetch Data API With Axios: -----------------");
