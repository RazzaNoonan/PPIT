import React, { Component } from 'react'
import { message } from "antd";
import "../App.css"
import "../index.css"

export class Login extends Component {
  //variables for input to be saved into
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
  };
  //initialize handlesubmit method
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    //saving variables entered into local variables
    const { email, password } = this.state;
    console.log( email, password);

    fetch("http://localhost:5007/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");

        if(data.status === "ok"){
          message.success('Log In Successfull!');
          //store locally so can be used in other files
          window.localStorage.setItem("token", data.data);
          window.location.href="./";
        }
        else{
          message.error('Invalid User. Please try again.');
        }
      });
  }

  render() {
    return (
      <div >
        <form onSubmit = {this.handleSubmit}>
          <h3>Sign In</h3>

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

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    )
  }
}