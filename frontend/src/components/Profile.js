import React, { Component } from "react";
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
    email: "",
    hidden: true,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/rescue-story").then((response) => {
      this.setState({
        listOfUserStories: response.data,
        loggedInUser: this.props.userInSession
          ? this.props.userInSession
          : null,
      });
    });

    axios
      .get(`http://localhost:5000/api/profile/${this.props.match.params.id}`)
      .then((userRes) => {
        this.setState({
          username: userRes.data.username,
          firstName: userRes.data.firstName,
          lastName: userRes.data.lastName,
          location: userRes.data.location,
          email: userRes.data.email,
        });
      });
  }

  showAllStories = () => {
    return this.state.listOfUserStories.map((eachStory) => {
      if (eachStory.userId._id === this.state.loggedInUser._id)
        return (
          <div className="cat" key={eachStory._id}>
            <img className="rescueImg" src={eachStory.imageUrl} alt="Cat Pic" />{" "}
            <br />
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
    window.location.reload(false);
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
  };

  showForm = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };

  hideForm = () => {
    this.setState({ hidden: true });
  };

  editProfileForm = () => {
    return (
      <>
        <button onClick={this.showForm}>Update personal info</button>
        <form onSubmit={this.handleSubmit} hidden={this.state.hidden}>
          <label>
            Username:
            <input
              className="username"
              value={this.state.username}
              name="username"
              type="text"
              readOnly={true}
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

          <label>
            Email:
            <input
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="email"
            />
          </label>

          {/* <button onClick={() => window.location.reload(false)}>Update</button> */}
          <button onClick={this.hideForm}>Update</button>
        </form>
      </>
    );
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <h1>Profile</h1>

          <div>
            Welcome, {this.state.firstName} {this.state.lastName}
            <br />
            {this.state.location}
            <br />
            {this.state.email}
          </div>
          {this.editProfileForm()}
          <br />
          <div className="cat-grid">{this.showAllStories()}</div>
        </div>
      );
    } else {
      return <div>&nbsp;</div>;
    }
  }
}

export default Profile;
