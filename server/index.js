const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;

const session = require("express-session")
const {sessionOptions} = require("./utils/session")
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const cors = require("cors")
const bodyParser = require("body-parser");
const path = require("path");

// Passport
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user");
const router = require("./routes/routes");



// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use(cors());

// useCreateIndex: true,
// useFindAndModify: false,
// Connect to database
const dbUrl = "mongodb://localhost:27017/leverans-app";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log db!!!
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
});

// Post route
const productRouter = require('./routes/routes')
app.use('/', productRouter)

// ## Middlewares ##
const sessionMiddleware = session(sessionOptions);
app.use(sessionMiddleware);

// Passport (Middlewares)
const passportInit = passport.initialize();
const passportSession = passport.session();

app.use(passportInit);
app.use(passportSession);
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Routes
app.use("/api", router)




// Serve dist
app.use(express.static(path.join(__dirname, "..", "client", "dist")))


// Handle all routes other than /
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
})

// Handle errors
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).send(err.message);
});



app.listen(PORT, () => {
});
