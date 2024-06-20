const mongooes = require("mongoose");

const userSchema = new mongooes.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unquie: true
  },
  password: {
    type: String,
    require: true,
  },
});

//define models or the collection name

const User = new mongooes.model("Users", userSchema);

module.exports = User;
