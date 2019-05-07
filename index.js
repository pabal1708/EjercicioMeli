const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require("express");
const app = express();

const port = 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get("/", (req, res, next) => {
    res.json({
        message: 'OK',
    });
});

app.get("/ping", (req, res, next) => {
  res.json(["pong"]);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Levanta en puerto ${port}`);
});

module.exports = app;
