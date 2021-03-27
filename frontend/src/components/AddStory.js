import React, { Component } from "react";
import axios from "axios";

export default class AddStory extends Component {
  state = {
    loggedInUser: null,
    name: "",
    age: "",
    breed: "",
    story: "",
    imageUrl: "",
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
    console.log(this.state.loggedInUser);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/rescue-story", this.state, {
      withCredentials: true,
    });
    this.props.history.push("/");
  };

  handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Cat's Name"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="number"
            name="age"
            placeholder="Age"
          />{" "}
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="breed"
            placeholder="Breed"
          />{" "}
          <br />
          <label>Tell your cat's story:</label>
          <br />
          <textarea
            onChange={this.handleChange}
            name="story"
            cols="80"
            rows="10"
          ></textarea>
          <br />
          <label>Show off your beautiful Furbaby!</label>
          <br />
          <input type="file" name="imageUrl" onChange={this.handleFileChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
