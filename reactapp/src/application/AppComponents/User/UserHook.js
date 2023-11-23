//Hook - an extract of feature that we could get from library
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddUserToStore, saveUserToDb } from "../../../state/User/UserAction";
import { toast } from "react-toastify";

let UserHook = (props) => {

    let [userName2, setUserName] = useState("")
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    //let [userAge, setUserAge] = useState(18)

    let onTextChange = (evt) => {
        let target = evt.target;
        setUserName(target.value)
    }

    //makes our component capable of being subscriber to store like mapStatToProps
    let user = useSelector((store) => store.userReducer.User)

    //useDispatch - replacement of mapDispatchToProps makes component able to dispatch the action
    let dispatchToDB = useDispatch()

    //initialization of default values using ref
    let userNameRef = useRef(null)
    let emailRef = useRef(null)
    let passwordRef = useRef(null)

    //shouldcomponentUpdate, componentDidMount
    //default it is shouldcomponentUpdate
    //when first rendering is done and UI can be accessed - componentDidMount
    //useeffect is the hook that we use to make it work as shouldComponentUpdate, componentDidMount, componentWillUnmount
    useEffect(() => {
        console.log("Re-render happened")

        //assign the values we got from reducer
        userNameRef.current.value = user.userName;
        emailRef.current.value = user.email;
        passwordRef.current.value = user.password;

        //clearInterval(interval)

        //if we return a function in useEffect - this acts as componentWillUnmount
        return () => {
            //clearInterval(interval)
            console.log("Hook instance gets cleared! componentWillUnmount")
        }
    }, [user]);

    //[userAge, userName2]) //if we pass value in second parameter it initializes and behaves as - componentDidMount


    // let interval = setInterval(() => {
    //     console.log(userAge)
    //     setUserAge(userAge++)
    // }, 2000);

    let readFormData = (evt) => {
        evt.preventDefault();

        let user = {
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        //alert(JSON.stringify(user)); // This is the pop up that appears after "sign in".
        dispatchToDB(saveUserToDb(user));
        toast.success("Signed in successfully!", {
            position: "top-center",
        });
   
        
    }

    return (
        <>
            <h1>Please Login to your Account below.</h1>
            <form className={"form col-md-10 userHook"} onSubmit={readFormData}>
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={userNameRef}
                        placeholder="Please enter user name" maxLength={20} required />
                </label>
                <br />
                <label>
                    <b>Email :</b>
                    <input type="email" className={"form-control col-md-12"} ref={emailRef}
                        placeholder="Please enter email" maxLength={40} required />
                </label>
                <br />
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={passwordRef}
                        placeholder="Please enter password" maxLength={40} required />
                </label>
                <br />
                <input type="submit" className={"btn btn-primary"} value="Sign in" />
                <br />
            </form>
        </>
    );
}

export default UserHook;