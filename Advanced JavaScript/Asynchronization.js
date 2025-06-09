// Javascript Synchronization
// Asynchronous JavaScript is a programming paradigm that allows code to run without blocking the main thread.

// Using Callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched";
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log(data); // Output: Data fetched

});

fetchData()

// Callbacks limitations
// - Callback Hell: Nested callbacks can lead to complex and hard-to-read code.
// - Error Handling: Managing errors in callbacks can be cumbersome.
// - Inversion of Control: The function that receives the callback controls when it is called, which can lead to unexpected behavior.

//callback hell example
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = "Data fetched";
        callback(data);
    }, 1000);
}
function processData(data, callback) {
    setTimeout(() => {
        const processedData = data.toUpperCase();
        callback(processedData);
    }, 1000);
}
function displayData(data) {
    console.log(data); // Output: DATA FETCHED
}
fetchDataWithCallback((data) => {
    processData(data, (processedData) => {
        displayData(processedData);
    });
} );

// Using Promises



//Promises chaining




//Async/Await


