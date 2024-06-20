const mongooes = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongooes.connect(URI);
    console.log("Connection success to database");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
