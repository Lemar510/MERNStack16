//Assessment #4
//1. Create a class component and show all the life cycle hooks

import React, { component, useEffect } from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.User.userName,
            password: props.User.password,

        }
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.userName === nextState.userName && this.state.password === nextState.password) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    render() {
        const { userName, password } = this.state;
        return (
            <div>
                <p>User Name : {userName}</p>
                <p>Password : {password}</p>
            </div>
        );
    }
}

//2. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.

shouldComponentUpdate(nextProps, nextState) {
    if (this.state.data === nextState.data) {
        console.log('Not re-rendering');
        return false;
    }
    console.log('re-render')
    return true;
}

//3. Create a product component using functional component and hooks (try using use state to read default values from reducer)
//3.1 	 Create a form to allow user to submit Product Details - name, price, desc, rating
//3.2 	 Create an action method to add the detail to database using a server api
//3.3	 Server Side - Create product router and api to save the product using productdatamodel
//4. Create a route and navigation to show product component

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToStore, saveProductToDb } from '../../../state/Product/ProductAction'

function ProductComponent() {
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [desc, setDesc] = useState('');
    let [rating, setRating] = useState('');

    let dispatchToDB = useDispatch();

    let handleSubmit = (e) => {
        e.preventDefault();
        let product = {
            name,
            price,
            desc,
            rating
        };
        dispatchToDB(addProductToStore(product))
        dispatchToDB(saveProductToDb(product))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
            </label>
            <label>
                Rating:
                <input type="number" value={rating} onChange={e => setRating(e.target.value)} />
            </label>
            <input type = "submit" value="Submit" />
        </form>
    );
}
export default ProductComponent;

// ________________________________________________________________________________

import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ProductComponent from './ProductComponent';

function App() {
    return (
      <Router>
        <nav>
          <ul>
            <li><NavLink to="/product">Product</NavLink></li>
          </ul>
        </nav>
        <Route path = "/product" component ={ProductComponent} />
      </Router>
    );
  }

export default App;

//5. Explain various hooks in functional component (at least 5)
//useState: This is is a React Hook enabling the addition of state to functional components, returning the current state value and a function to update it.
//useReducer: This hook lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
//useContext: This hook lets you subscribe to React context without introducing nesting. 
//useRef: This hook allows syout to persist values between renders and it can be used to store a mutable value that doens't cause a re-render when updated.
//useEffect: This hook allows a user to perform side effects in function components.
