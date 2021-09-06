const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;

const session = require("express-session")
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");


// Connect to database
const dbUrl = "mongodb://localhost:27017/leverans-app";
mongoose.connect(dbUrl);

// Log db! 
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => console.log("Database connected!"));


// Sessions
const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret: "thisisasecret"
  }
})

store.on("error", function(e) {
  console.log("session store error", e);
})

const sessionOptions = {
  store,
  name: "session",
  secret: "thisisasecret",
  saveUninitialized: true,
  resave: false,
  cookie: {
    httpOnly: true,
    // secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  },
}

// Middlewares
const sessionMiddleware = session(sessionOptions);
app.use(sessionMiddleware);


// app.get("*", (req,res) => {
//   // Error page
// })

app.listen(4000, () => {
  console.log("Running on " + PORT);
});
