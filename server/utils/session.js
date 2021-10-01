const MongoStore = require("connect-mongo");

const dbUrl = "mongodb://localhost:27017/leverans-app";
const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret: "thisisasecret"
  }
})

store.on("error", function(e) {
})

module.exports.sessionOptions = {
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