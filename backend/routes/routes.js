/**Our connection to the front-end */
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const mongoose = require("mongoose");

const Comment = require("../models/Comment");
const User = require("../models/User");
const RescueStory = require("../models/RescueStory");

router.get(`/`, (req, res) => {
  res.json({
    backend: "🔥",
  });
});

router.post(`/addComment`, authorize, (req, res) => {
  Comment.create({ comment: req.body.comment, userId: res.locals.user._id })
    .then((comment) => {
      res.json({ comment });
    })
    .catch(console.error);
});

router.get("/getComments", (req, res) => {
  Comment.find({}).then((allCommentsFromDb) => {
    res.json(allCommentsFromDb);
  });
});

router.get("/getMyComments", authorize, (req, res) => {
  Comment.find({ userId: res.locals.user._id }).then((allCommentsFromDb) => {
    res.json(allCommentsFromDb);
  });
});

router.get("/user", authorize, (req, res) => {
  User.findById(res.locals.user._id)
    .then((user) => {
      res.json(user);
    })
    .catch(console.error);
});

router.post("/logmein", async (req, res) => {
  //Check if user already exists
  let user = await User.findOne({ email: req.body.email });

  const { email, password } = req.body;
  if (!user) {
    let salt = await bcryptjs.genSalt(saltRounds);
    let hashedPass = await bcryptjs.hash(password, salt);
    User.create({ email, password: hashedPass });
    // bcryptjs
    //   .genSalt(saltRounds)
    //   .then((salt) => bcrytpjs.hash(password, salt))
    //   .then((hashedPass) => {
    //     if (!user) {
    //       User.create({
    //         email: req.body.email,
    //         password: hashedPass,
    //       })
    //         .then((createdUser) => res.json(createdUser))
    //         .catch((err) => console.log(err));
    //     }
    //   });
  }

  //Signing the token with the user object
  jwt.sign({ user }, "secret key", { expiresIn: "30min" }, (err, token) => {
    //Send token back to the frontend
    res.json({ user, token });
  });
});

router.post("/rescue-story", (req, res) => {
  const { name, age, breed, story, image } = req.body;
  RescueStory.create({ name, age, breed, story, image, userId: req.user._id })
    .then((createdStory) => {
      res.json(createdStory);
    })
    .catch((err) => res.json(err));
});

router.get("/rescue-story", (req, res) => {
  RescueStory.find()
    .populate({ path: "userId", select: "username" })
    .then((foundStories) => {
      res.json(foundStories);
    })
    .catch((err) => res.json(err));
});

router.get("/rescue-story-user", (req, res) => {
  RescueStory.find()
    .populate({ path: "userId", select: "username" })
    .then((foundStories) => {
      res.json(foundStories);
    })
    .catch((err) => res.json(err));
});

router.get("/editstory/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  RescueStory.findById(req.params.id)
    .populate({ path: "userId", select: "username" })
    .then((story) => {
      res.status(200).json(story);
    })
    .catch((error) => {
      res.json(error.response.data);
    });
});

router.put("/edit/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  RescueStory.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Story with ${req.params.id} is updated successfully.`,
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

router.delete("/rescue-story/delete/:id", (req, res) => {
  RescueStory.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log("deleted! - backend");
    })
    .catch((err) => res.json(err));
});

//   <input type="text" name="name" placeholder="Cat's Name" />
//   <br />
//   <input type="number" name="age" placeholder="Age" /> <br />
//   <input type="text" name="breed" placeholder="Breed" /> <br />
//   <label>Tell your cat's story:</label>
//   <br />
//   <textarea name="story" cols="80" rows="10"></textarea>
//   <br />
//   <label>Show off your beautiful Furbaby!</label>
//   <br />
//   <input type="file" name="image" />
function authorize(req, res, next) {
  let token = req.headers["authorization"].split(" ")[1];

  if (token != "null") {
    jwt.verify(token, "secret key", async (err, data) => {
      if (!err) {
        console.log(data);
        res.locals.user = data.user;
        next();
      } else {
        console.error(err);
      }
    });
  } else {
    res.status(403).json({ message: "Must be logged in" });
  }
}

module.exports = router;
