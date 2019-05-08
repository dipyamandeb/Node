const express = require("express");
const app = express();
const Joi = require("joi");
var cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log("Listening to 3000"));

const users = [
  { username: "deb", password: "deb123" },
  { username: "john", password: "john123" },
  { username: "smith", password: "smith123" }
];

//Rest end point

//testing
app.get("/", (req, res) => res.send("Testing all ok!!!"));

//getAll
app.get("/api/getAll", (req, res) => res.send(users));

//getById
app.get("/api/get/:id", (req, res) => {
  const user = users.find(c => c.username === req.params.username);

  if (!user) return res.status(404).send("No user with specific id found");

  return res.send(user);
});

//register or create a user
app.post("/api/create", (req, res) => {
  const user = users.find(c => c.username === req.body.username);

  //   console.log(user);
  if (user)
    return res.status(404).send("User with specific username already present");

  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newUser = {
    username: req.body.username,
    password: req.body.password
  };

  users.push(newUser);
  return res.send(user.username + " registration done succesfully");
});

// Login user
app.post("/api/login", (req, res) => {
  const user = users.find(c => c.username === req.body.username);

  if (!user)
    return res
      .status(404)
      .send("Please try agin with correct username/password");

  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //updating the genreType
  if (user.password != req.body.password) {
    return res
      .status(404)
      .send("Please try agin with correct username/password");
  }

  return res.send({ msg: "Login successful" });
});

function validateUser(user) {
  const schema = {
    username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(user, schema);
}
