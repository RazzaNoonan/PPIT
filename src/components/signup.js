import React, { Component } from 'react'
import { message } from "antd";
import "../App.css"
import "../index.css"

export class SignUp extends Component {
    //variables for input to be saved into
    constructor(props) {
      super(props);
      this.state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
    };
    //initialize handlesubmit method
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    //saving variables entered into local variables
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);

    fetch("http://localhost:5007/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        if(data.status === "ok"){
          message.success('Sign up Successfull!');
        }
        else{
          message.warning("There is already a user with these details. Try logging in.");
        }
      });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
    )
  }
}
