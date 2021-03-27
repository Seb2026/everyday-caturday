import React, { Component } from "react";
import axios from "axios";
import * as service from "../api/service";

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

  componentDidMount() {
    this.setState({
      loggedInUser: this.props.userInSession ? this.props.userInSession : null,
    });

    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/rescue-story", this.state, {
        withCredentials: true,
      })
      // service
      //   .saveNewThing(this.state)
      //   .then((res) => {
      //     console.log("added: ", res);
      //     if (res.errors) {
      //       this.setState({
      //         message: `All fields are required. `,
      //       });
      //       return;
      //     }
      .then(() => {
        this.props.history.push("/");
      })
      //   })
      .catch((err) => {
        console.log("Error while adding the thing: ", err.response.data);
      });
  };

  handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    service
      .handleUpload(uploadData)
      .then((response) => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
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
          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
