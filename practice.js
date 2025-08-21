// Simple Promise that works (resolves)
const goodPromise = new Promise((resolve, reject) => {
    console.log("Making a good promise...");
    resolve("Everything is good!");
});

goodPromise.then((message) => {
        console.log("Success: " + message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });

console.log("-------------------");

// Simple Promise that fails (rejects)
const badPromise = new Promise((resolve, reject) => {
    console.log("Making a bad promise...");
    reject("Something went wrong!");
});

badPromise.then((message) => {
        console.log("Success: " + message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });