import React, { Component } from "react";

export default class PetFinder extends Component {
  state = {
    location: "",
  };

  componentDidMount() {
    let key = "Ww2Mo8xNzXhbFxBtwEN3er2rnOqCUAmamXIQ1AhdCA0Yd4ueb1";
    let secret = "EkIYCERn1x0yevjN5f1VPwEXgaP7pNQ07s3bBBG7";

    // Call details
    let type = "cat";
    let status = "adoptable";
    let location = "33131";

    // Call the API
    // This is a POST request, because we need the API to generate a new token for us
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        // Return the response as JSON
        return resp.json();
      })
      .then(function (data) {
        // Log the API data
        console.log("token", data);

        // Return a second API call
        // This one uses the token we received for authentication
        return fetch(
          "https://api.petfinder.com/v2/animals?type=" +
            type +
            "&status=" +
            status +
            "&location=" +
            location,
          {
            headers: {
              Authorization: data.token_type + " " + data.access_token,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
      })
      .then(function (resp) {
        // Return the API response as JSON
        return resp.json();
      })
      .then(function (data) {
        // Log the pet data
        console.log("pets", data);
      })
      .catch(function (err) {
        // Log any errors
        console.log("something went wrong", err);
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="location" placeholder="City or Zip Code" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
