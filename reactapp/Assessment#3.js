//Assessment #3 react and its fundamentals - 15/09/2023

/*
1. what is react and its role for single page application

React is a Javascript library that was developed and maintained by Facebook for building user
interfaces, especially for single page applications. With the help of a Virtual DOM, single page applications
efficiently update parts of a webpage in response to user interactions.

2. how react is faster compared to other javascript frameworks

React is faster than other js frameworks as it keeps developers/programmers from directly interacting with the real DOM,
offering a Virtual DOM instead. Whenever a change occurs, React first applies these to the Virtual DOM. 
Then, using an efficient diffing algorithm, it detects which parts of the real DOM needs updating, 
ensuring only the changed parts of the DOM tree are rendered. 

3. what is virtual dom

A Virtual DOM is a pure js object, an in-memory representation of the actual DOM, 
ensuring that developers work within this abstraction rather than the direct DOM.

4. how react renders dom in conservative manner

React renders the DOM in a conservative manner by utilizing its Virtual DOM mechanism. 
Instead of making direct and frequent updates to the real DOM, React first reflects changes on the Virtual DOM. 
Using a diffing algorithm, it then identifies the minimal set of changes required. 

*/

//5. create a class component named - Success and show some quotes on success in it

import React, {Component} from "react";

export default class Success extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quotes: "Verily, with every hardship comes ease.",
            name: "Lemar Saffi",
            address: "USA",
            random: null
        }
    }

    setRandomValue = (value) => {
        this.setState({ random: value})
    }

    render() {
        return (
            <div>
                <h1>Quotes on Success</h1>
                <p>{this.state.quotes}</p>
                <SuccessChild name={this.state.name} address={this.state.address} setRandomValue = {this.setRandomValue} />
            </div>
        )
    }
}

//6. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
let SuccessChild = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Address: {props.address}</h2>
            <SuccessStory setRandom = {props.setRandomValue} />
        </div>
    )
}

//7. create SuccessStory as another component, pass this as props in SuccessChild from Success component
let SuccessStory = (props) => {
    let createRandomValue = () => {
        let random = Math.floor(Math.random() * 10);
        props.setRandom(random);
    }
    return (
        <div>
            <h3>SuccessStory</h3>
            <p> In the near future, I will successfully transition over to software engineering.</p>
            <button onClick = {createRandomValue}> Create a Random Value</button>
        </div>
    )
}

//8. create UserSignIn component using uncontrolled way, should be class component

// import React, {Component} from "react";

// export default class UserSignIn extends Component {
//     constructor(props) {
//         super(props);

//         this.userNameRef = React.createRef();
//         this.passwordRef = React.createRef();
//     }

//     formSubmit = (evt) => {
//         let userName = this.userNameRef.current.value;
//         let password = this.passwordRef.current.value;

//         alert("Username: " + userName + "Password: " + password);

//          this.setState({
//              uName: userName,
//              uPassword: password
//          });

//         evt.preventDefault(); 
//     }

//     render() {
//         return(
//             <>
//                 <h1>User Sign In</h1>

//                 <form onSubmit={this.formSubmit}>
//                     <b>User Name:</b>
//                     <input type="text" ref={this.userNameRef} />
//                     <br/>

//                     <b>Password:</b>
//                     <input type="password" ref={this.passwordRef} />
//                     <br/>

//                     <button type="submit">Sign In</button>
//                 </form>
//             </>
//         )
//     }
// }

//9. create Product component to accept ProductName and ProductPrice

let Product = (props) => {
    return (
        <div>
            <h4>{props.ProductName}</h4>
            <p>The product price is: {props.ProductPrice}</p>
        </div>
    )
}

//10. pass a random value from SuccessStory component back to Success
    //Note: Implemented in questions 5 and 7.