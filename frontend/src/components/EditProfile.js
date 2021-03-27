import axios from "axios";
import React, { Component } from "react";

export default class EditProfile extends Component {
  state = {
    loggedInUser: null,
    editedName: "",
    editedBreed: "",
    editedAge: "",
    editedStory: "",
    story: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    axios
      .get(`http://localhost:5000/api/editstory/${params.id}`)
      .then((response) => {
        this.setState({
          editedName: response.data.name,
          editedBreed: response.data.breed,
          editedAge: response.data.age,
          editedStory: response.data.story,
        });
      })
      .catch((error) => console.log(error.response.data));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const { params } = this.props.match;
    const name = this.state.editedName;
    const breed = this.state.editedBreed;
    const age = this.state.editedAge;
    const story = this.state.editedStory;

    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/edit/${params.id}`, {
        name,
        breed,
        age,
        story,
      })
      .then(() => {
        this.props.history.push(`/`);
      })
      .catch((err) => console.log(err));
  };

  showForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={this.handleChange}
            name="editedName"
            value={this.state.editedName}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            onChange={this.handleChange}
            name="editedBreed"
            value={this.state.editedBreed}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            onChange={this.handleChange}
            name="editedAge"
            value={this.state.editedAge}
          />
        </label>
        <br />
        <label>Tell your cat's story:</label>
        <br />
        <textarea
          type="text"
          onChange={this.handleChange}
          name="editedStory"
          value={this.state.editedStory}
          cols="80"
          rows="10"
        ></textarea>
        <br />
        <button>Save</button>
      </form>
    );
  };

  render() {
    return <div>{this.showForm()}</div>;
  }
}
