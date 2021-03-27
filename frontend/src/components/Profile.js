import React, { Component } from "react";
import actions from "../api";
import axios from "axios";

class Profile extends Component {
  state = {
    loggedInUser: null,
    listOfUserStories: [],
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/rescue-story").then((response) => {
      console.log(response.data);
      this.setState({
        listOfUserStories: response.data,
      });
    });
  }

  showAllStories = () => {
    return this.state.listOfUserStories.map((eachStory) => {
      if (eachStory.userId._id === this.state.loggedInUser._id)
        return (
          <div className="cat" key={eachStory._id}>
            <span className="attributes">Name:</span> {eachStory.name}
            <br /> <br />
            <span className="attributes">Age:</span> {eachStory.age}
            <br /> <br />
            <span className="attributes">Breed:</span> {eachStory.breed}
            <br /> <br />
            <span className="attributes">Story:</span> {eachStory.story}
            <br /> <br />
            <span className="attributes">Made by:</span>{" "}
            {eachStory.userId.username}
            <br /> <br />
            {/* onChange={(e) => this.handleChange(e)} */}
            {/* <button onClick={() => this.deleteStory(eachStory._id)}>
            Delete
          </button> */}
          </div>
        );
    });
  };

  // async componentDidMount() {
  //   let res = await actions.getMyComments();
  //   console.log(res);
  //   this.setState({ comments: res.data });
  // }

  // logOut = () => {
  //   localStorage.removeItem("token");
  //   this.props.setUser({});
  // };

  // showMyComments = () => {
  //   return this.state.comments.map((eachComment) => {
  //     return <li key={eachComment._id}> {eachComment.comments} </li>;
  //   });
  // };

  render() {
    if (this.state.loggedInUser) {
      return this.showAllStories();
    } else {
      return <div>Please sign up</div>;
    }
  }
}

export default Profile;
