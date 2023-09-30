// Webpack serves various purposes in a React application, as outlined below.

//webpack as webserver - 
// 1. Hosts the application at http://localhost:9000.
// 2. Exposes an endpoint at port 9090.

//webpack as faster loading of react application on browser

// 1. Removes extra spaces.
// 2. Eliminates commented-out code.
// 3. Optimizes redundant logic.

let getValueFromGoogleMap = true;


if (getValueFromGoogleMap) {
    console.log("Load google api's")
} else {
    console.log("Check local servers")
}

// after web pack minification or optimization
let mp_vl1 = true; mp_vl1? console.log("Load google api's"):console.log("Check local servers")

// c. Handles issues with file references, like dependencies among various JavaScript files (e.g., 
// 1.Home.js, About.js, Cart.js => header.js, footer.js, Cart.js => User.js)

// d. bundling and hot reloading (nodemon)
// Bundles all kinds of files (.js, .png, .jpeg, etc.) into a single optimized and minified file called 

// e. hot reloading (nodemon)
// While in development, Webpack caches previous values but reloads the updated values in the browser when files change.

// f. uses babel configuration to do transpilation
// async/await => ES8 : firefox doesn't

// babel will read ES6/ES8 code and concert it in ES5 equivalent or add wrappers for browsers

// JSX - javascript like xml code => html+javascript

// Notes:

//Transpilation is the process of converting source code written in one programming language into equivalent code in another language, 
//often with the aim of making it compatible with different environments or platforms. 
//Unlike compilation, which converts high-level code into machine code that can be executed by a computer, transpilation targets another high-level language. 
//For example, Babel is a popular transpiler that converts modern JavaScript (ES6+) into an older version (ES5) that's more widely supported by browsers. 
//Transpilation is commonly used in web development to ensure that code runs consistently across different browsers or systems.
