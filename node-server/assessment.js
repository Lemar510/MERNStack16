// Assessment 30th August

//1. create a basic setup with npm cli, write the steps to do so, using express
// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//     res.send('If you can see this message, your code is successful!')
// })

// app.listen(9000, function() {
//     console.log("The App is listening to port 9000")
// })

//2. Create an API named getInfo with server.js as main file and configure using nodemon
    //Note: I have this program in my server.js.

//3. Explain the purpose of express elements - Application, Request, Response and Router
    // Application: The Express application that is created by calling the express() function. It includes methods
    // for starting a server and listening to certain requests.
    // Request: Represents a way of making http calls by the client to the server.
    // Response: Represents an http response that is sent to the client by the server, such as res.send() and/or res.json().
    // Router: A function that is used to create a new router object in a program to handle http requests


//4. What will happen if we don't have package.lock.json in our application
    //The absense of package.lock.json in our application can lead to certain inconsistencies between dependancy installations
    // and as a result, the application may not work properly.

//5. Create an api name getVaccine with get method, pass info like - vaccineName, price, doses
//   pass these information using query string and save it into a json file on server also send back the same as response    

// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.get('/getVaccine', function (req, res) {
//     let vaccineName = req.query.vaccineName;
//     let price = req.query.price;
//     let doses = req.query.doses;

//     if (!vaccineName || !price || !doses) {
//         return res.status(400).send('The following fields are required: vaccineName, price, doses.')
//     }

//     let data = {vaccineName: vaccineName, price: price, doses: doses};

//     let writerStream = fs.createWriteStream("vaccineData.json", "utf8");
//     writerStream.write(JSON.stringify(data));
//     writerStream.end();

//     writerStream.on('finish', () => {
//         console.log("Writing into the file is complete");

//         let readStream = fs.createReadStream('vaccineData.json')
//         let data = "";

//         readStream.on("data", (chunk) => {
//             data = data + chunk;
//         });

//         readStream.on("end", () => {
//             console.log("Read data: \n", data)
//         });
//     });

//     res.json(data);
// });

// app.listen(9000, function() {
//     console.log('App is listening on port 9000')
// });


//6. What is the purpose of RESTFul API and what specifications are must to make a service RESTFul
    //RESTful API is a way for systems to securely communicate with each other and to exchange delicate information.
    //Specifications such as statelessness, layered system, cacheable, etc.

//7. Create an example of Application mounting using vaccination API's

//8. Create an API to demonstrate route param usage like - getVaccineByID 

// const express = require('express');
// const app = express();

// app.get('/getVaccineByID/:id', function (req, res) {
//     let id = req.params.id;
//     let vaccineInfo = getVaccineInfo(id);
//     res.json(vaccineInfo);
// });

// function getVaccineInfo(id) {
//     return {id: 1, name: 'Moderna', price: 50.0, doses: 2};
//   }

// app.listen(9000, function () {
//   console.log('App is listening to port 9000');
// });



//6. What is the purpose of RESTFul API and what specifications are must to make a service RESTFul

// - The purpose of a RESTful API is to provide a standardized way for different software components, systems, or applications to communicate over the internet using the principles of Representational State Transfer (REST).

//Specifications to Make a Service RESTful:
//To make a service RESTful, we must use these specifications:

// Client-Server Architecture: Separate the client (user interface) and server (data storage and processing) components, allowing them to evolve independently.

// Statelessness: Each client request must contain all the information needed for the server to understand and fulfill the request.

//Cacheability: Responses can be cached to improve performance and reduce server load. Clients and intermediaries can cache responses and use them for subsequent requests.


//Uniform Interface:
//Resource Identification: Resources (data) are identified using URIs (Uniform Resource Identifiers).
//Resource Manipulation: Use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources.
//Self-Descriptive Messages: Responses should include enough metadata (headers) for clients to understand how to process the data.
//Hypermedia as the Engine of Application State (HATEOAS): Responses include hyperlinks that guide clients to available actions or related resources.
//Layered System: Components (servers, proxies, gateways, etc.) can be added between clients and servers to provide security, load balancing, caching, etc., without impacting the overall system behavior.