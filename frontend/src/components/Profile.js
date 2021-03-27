import React, { Component } from "react";
import actions from "../api";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    loggedInUser: null,
    listOfUserStories: [],
    editedName: "",
    editedBreed: "",
    editedAge: "",
    editedStory: "",
    username: "",
    firstName: "",
    lastName: "",
    location: "",
    hidden: true,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  componentDidMount() {
    // ----------------------------------
    axios.get("http://localhost:5000/api/rescue-story").then((response) => {
      console.log(response.data);
      console.log(`-----`, this.props);
      this.setState({
        listOfUserStories: response.data,
        loggedInUser: this.props.userInSession
          ? this.props.userInSession
          : null,
      });
    });
    console.log(this.state.loggedInUser);

    axios
      .get(`http://localhost:5000/api/profile/${this.props.match.params.id}`)
      .then((userRes) => {
        console.log(userRes.data);
        this.setState({
          username: userRes.data.username,
          firstName: userRes.data.firstName,
          lastName: userRes.data.lastName,
          location: userRes.data.location,
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
            <button onClick={() => this.deleteStory(eachStory._id)}>
              Delete
            </button>
            <br />
            <Link to={`/edit/${eachStory._id}`}>
              <button>Edit</button>
            </Link>
          </div>
        );
    });
  };

  deleteStory = (id) => {
    axios
      .delete(`http://localhost:5000/api/rescue-story/delete/${id}`)
      .then(() => {
        console.log("deleted frontend");
      })
      .catch((err) => console.log(err));
    this.props.history.push("/rescueStories");
  };

  editStory = (id) => {
    const name = this.state.editedName;
    const breed = this.state.editedBreed;
    const age = this.state.editedAge;
    const story = this.state.editedStory;

    axios
      .put(`http://localhost:5000/api/rescue-story/edit/${id}`, {
        name,
        breed,
        age,
        story,
      })
      .then(() => {
        this.props.history.push("/rescueStories");
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      `http://localhost:5000/api/edit-user/${this.props.match.params.id}`,
      this.state,
      {
        withCredentials: true,
      }
    );
    this.props.history.push("/");
  };

  showForm = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };

  editProfileForm = () => {
    return (
      <>
        <button onClick={this.showForm}>Update personal info</button>
        <form onSubmit={this.handleSubmit} hidden={this.state.hidden}>
          <label>
            Username:
            <input
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
              type="text"
            />
          </label>

          <label>
            First name:
            <input
              onChange={this.handleChange}
              value={this.state.firstName}
              name="firstName"
              type="text"
            />
          </label>

          <label>
            Last name:
            <input
              onChange={this.handleChange}
              value={this.state.lastName}
              name="lastName"
              type="text"
            />
          </label>

          <label>
            Location:
            <input
              onChange={this.handleChange}
              value={this.state.location}
              name="location"
              type="text"
            />
          </label>

          <button>Update</button>
        </form>
      </>
    );
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
      return (
        <div>
          {this.showAllStories()}
          <br />
          {this.editProfileForm()}
        </div>
      );
    } else {
      return <div>Please sign up</div>;
    }
  }
}

export default Profile;
