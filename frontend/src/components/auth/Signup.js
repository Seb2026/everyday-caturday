import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    errorStatus: false,
    errorMsg: "",
  };

  service = new AuthService();

  // handleChange() and handleSubmit() will be added here

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const location = this.state.location;
    const email = this.state.email;

    this.service
      .signup(username, password, firstName, lastName, location, email)
      .then((response) => {
        this.setState({
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          location: "",
          email: "",
        });
        this.props.getUser(response);
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            errorStatus: true,
            errorMsg: error.response.data.message,
          });
        }
      });

    // this.props.history.push("/");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const errorStatus = this.state.errorStatus;
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label> First Name: </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            required
            onChange={(e) => this.handleChange(e)}
          />
          <label> Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
          <label> Location: </label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={(e) => this.handleChange(e)}
          />
          <label> Email: </label>
          <input
            type="email"
            name="email"
            required
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
          <p>
            <label>Create your Login</label>
          </p>
          <label> Username: </label>
          <input
            type="text"
            name="username"
            required
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />

          <label> Password: </label>
          <input
            name="password"
            type="password"
            required
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
          <p>
            <button>Sign Up</button>
          </p>
        </form>
        {errorStatus ? (
          <p className="error">{this.state.errorMsg}</p>
        ) : (
          <p>&nbsp;</p>
        )}

        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
