import axios from "axios";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

class RescueStories extends Component {
  state = {
    name: "",
    age: "",
    breed: "",
    story: "",
    imageUrl: "",
    listOfStories: [],
    loggedInUser: null,
    hidden: true,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
    console.log(this.state.loggedInUser);
  }

  componentDidMount(nextProps) {
    axios.get("http://localhost:5000/api/rescue-story").then((response) => {
      this.setState({
        listOfStories: response.data,
      });
    });
  }

  deleteStory = (id) => {
    axios
      .delete(`http://localhost:5000/api/rescue-story/delete/${id}`)
      .then(() => {
        console.log("deleted frontend");
      })
      .catch((err) => console.log(err));
    this.props.history.push("/");
  };

  showAllStories = () => {
    return this.state.listOfStories.map((eachStory) => {
      return (
        <ul key={eachStory._id}>
          <li>Name: {eachStory.name}</li>
          <li>Age: {eachStory.age}</li>
          <li>Breed: {eachStory.breed}</li>
          <li>Story: {eachStory.story}</li>
          <li>Made by: {eachStory.userId.username}</li>
          {/* onChange={(e) => this.handleChange(e)} */}
          <button onClick={() => this.deleteStory(eachStory._id)}>
            Delete
          </button>
        </ul>
      );
    });
  };

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

  handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Image file", file);
  };

  showForm = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    return (
      <div>
        {this.state.loggedInUser && (
          <button onClick={this.showForm}>Add story</button>
        )}
        <form onSubmit={this.handleSubmit} hidden={this.state.hidden}>
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
        {this.showAllStories()}
      </div>
    );
  }
}

export default RescueStories;
