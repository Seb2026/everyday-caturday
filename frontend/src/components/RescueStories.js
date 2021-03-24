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
  };

  componentDidMount() {
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
        <div className="cat" key={eachStory._id}>
          <span className="attributes">Name:</span> {eachStory.name}<br /> <br />
          <span className="attributes">Age:</span> {eachStory.age}<br /> <br />
          <span className="attributes">Breed:</span> {eachStory.breed}<br /> <br />
          <span className="attributes">Story:</span> {eachStory.story}<br /> <br />
          <span className="attributes">Made by:</span> {eachStory.userId.username}<br /> <br />
          {/* onChange={(e) => this.handleChange(e)} */}
          <button onClick={() => this.deleteStory(eachStory._id)}>
            Delete
          </button>
        </div>
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
        <p className="cat-grid">
        {this.showAllStories()}
        </p>
      </div>
    );
  }
}

export default RescueStories;
