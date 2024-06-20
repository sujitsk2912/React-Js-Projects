const User = require("../models/user_model");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to home controller");
  } catch (error) {
    console.log(error);
  }
};

const signin = async (req, res) => {
  try {
    let user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    const doc = await user.save();
    // console.log(doc);
    res.status(200).json(doc);
    // console.log("res body", req.body);
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

const Getsignin = async (req, res) => {
  try {
    let docs = await User.find({});
    // user.email = req.body.email;
    // user.password = req.body.password;
    // const doc = await user.save();
    console.log(docs);
    res.status(200).send(docs);
    // console.log("res body", req.body);
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

const signup = async (req, res) => {
  try {
    let user = new User();
    user.firstname = req.body.firstName;
    user.lastname = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    const data = await user.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};
const forgotpassword = async (req, res) => {
  try {
    res.status(200).send("Welcome to Forgot Password  Router");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, signin, signup, forgotpassword, Getsignin };
