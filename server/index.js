const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;

const session = require("express-session")
const {sessionOptions} = require("./utils/session")
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const cors = require("cors")

// Passport
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user");
const router = require("./routes/routes");

app.use(cors());

// Connect to database
const dbUrl = "mongodb://localhost:27017/leverans-app";
mongoose.connect(dbUrl);

// Log db!!!
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => console.log("Database connected!"));

// Post route
const productRouter = require('./routes/routes')
app.use('/', productRouter)

// Middlewares
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


// app.get("*", (req,res) => {
//   // Error page
// })

app.listen(4000, () => {
  console.log("Running on " + PORT);
});
