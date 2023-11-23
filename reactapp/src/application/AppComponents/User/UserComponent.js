import React, { Component } from "react";

//import { connect } from "react-redux";//require react UI and mapstateToProps and mapDispatchToProps
//import { AddUserToStore } from "../../../state/User/UserAction";

export default class User extends Component {
    //class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: props.User.userName,
            email: props.User.email,
            password: props.User.password,
        }
    }

    onTextChange = (evt) => {
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;

        if (classList.contains("username")) {
            this.setState({
                userName: value
            })
        } else if (classList.contains("email")) {
            this.setState({
                email: value
            })
        } else (classList.contains("pass"))
        this.setState({
            password: value
        })
    }

    loginUser = (evt) => {

        //this.props.AddUser(this.state)
        this.props.SignIn(this.state)
        evt.preventDefault()
    }

    render() {
        return (
            <>
                <h1>User Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>User Name</b>
                            <input type="text" className="form-control col-md-6 username"
                                value={this.state.userName}
                                placeholder="User Name" onChange={this.onTextChange} maxLength={40} />

                        </div>

                        <div className="col-md-12">
                            <b>Email</b>
                            <input type="email" className="form-control col-md-6 email"
                                value={this.state.email}
                                placeholder="Email" onChange={this.onTextChange} maxLength={20} />
                        </div>

                        <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" value={this.state.password}
                                placeholder="Password" onChange={this.onTextChange} maxLength={40} />
                        </div>
                        <input type="button" className={"btn btn-primary col-md-2 saveUser"}
                            value={"Sign In- Register"}
                            onClick={this.loginUser} />

                    </div>
                </section>
            </>
        )
    }
}

User.defaultProps = {
    User: {
        userName: "Default",
        email: "default@email.com",
        password: "defaultPassword",
    }
}