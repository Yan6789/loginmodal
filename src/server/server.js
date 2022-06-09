var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const config = require("./config/auth.config");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const connectToMongoose = require("./database/connect");
const UserAccount = require("./database/model");

connectToMongoose();

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cors());
app.options("*", cors());
//app.use("/app", routersUrls);
app.listen(4000, () => console.log("server is up and running"));

app.post("/login", async (request, response) => {
  const ifUserExist = await UserAccount.findOne({
    email: request.body.email,
    password: request.body.password,
  });

  if (ifUserExist) {
    response.json({
      status: 200,
      message: "succeed",
    });
    return;
  } else {
    response.json({
      status: 400,
      message: "failed",
    });
  }
});

app.post("/signup", async (request, response) => {
  const ifUserExist = await UserAccount.findOne({
    email: request.body.email,
  });
  if (ifUserExist) {
    response.json({
      status: 400,
      message: "userExist",
    });
    return;
  }
  const newUser = new UserAccount({
    email: request.body.email,
    password: request.body.password,
  });

  const newUserSaved = await newUser.save();

  if (newUser === newUserSaved) {
    response.json({
      status: 200,
      message: "succeed",
    });
    return;
  } else {
    response.json({
      status: 400,
      message: "failed",
    });
  }
});

app.get("/allList", async (request, response) => {
  const allListFromDB = await UserAccount.find();
  console.log(allListFromDB);
  response.json(allListFromDB);
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
