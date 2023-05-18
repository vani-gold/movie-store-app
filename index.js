const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// imports routes
const authRoute = require("./routes/auth");
const movieRoute = require("./routes/movie");

dotenv.config()

// connect to db
// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
//   console.log("connected to db")
// );
mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { // Successfully connected
    // console.log(result);
  })
  .catch((err) => {
    // Catch any potential error
    console.log(mongoose.version);
    console.log("Unable to connect to MongoDB. Error: " + err);
  });


app.use(express.json());

// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/movie", movieRoute);
// const port = process.env.PORT || 5000;

app.listen(6005, () => console.log("Server up and running"));
