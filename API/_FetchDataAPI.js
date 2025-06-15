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
console.log("----------------- Fetch Data API With Promises: -----------------");
fetch(`${baseUrl}pikachu`)
.then(res => {
    return res.ok ? res.json() : Promise.reject(new Error("------ Failed to fetch data !! --------"));
}
) // returns a promise that resolves to the JSON data
.then(data => console.log("Data:", data))
.catch(err => console.error("Error:", err));


//Fetching data from a URL using the Fetch API with async/await
console.log("----------------- Fetch Data API With Async/Await: -----------------");

const  fetchData = async (baseUrl) =>{
try {

  
} catch (error) {
    console.error("An error occurred:", error);
  }
  
}









// Fetching data from a URL using Axios library
console.log("----------------- Fetch Data API With Axios: -----------------");
