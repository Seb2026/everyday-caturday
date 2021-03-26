import React, { Component } from "react";
import axios from "axios";
import actions from "../api";
import PetFinderSearch from "./PetFinderSearch";
import CarouselComponent from "./CarouselComponent";

class Home extends Component {
  state = {
    comments: [],
  };

  async componentDidMount() {
    // let res = await axios.get(`http://localhost:5000/api/getPosts`)
    // console.log(res)
    // let res = await actions.getComments();
    // this.setState({ comments: res.data });
    let cats = await axios.get(
      `https://api.thecatapi.com/v1/breeds?key=${process.env.xapikey}`
    );
    // console.log(cats);
  }

  showComment = () => {
    return this.state.comments.map((eachComment) => {
      return <li key={eachComment._id}> {eachComment.comment} </li>;
    });
  };

  render() {
    return (
      <div>
        <CarouselComponent />
        <p>
          Studies have shown that cats have a calming effect on their owners,
          from the soothing action of petting to purring being an aid in falling
          asleep. Cat owners can reduce tensions by just stroking their furry
          friend’s head. Petting a cat releases endorphins into the brain, which
          makes you happier. Also, cats have the softest fur! Cats can even play
          a part in lowering your blood pressure and risk of a heart attack. One
          10-year study has even shown that cat owners were 30% less likely to
          die of a heart attack or stroke than non-cat owners.
        </p>
        <p>Adopt a cat today!</p>
        <PetFinderSearch />
      </div>
    );
  }
}

export default Home;
