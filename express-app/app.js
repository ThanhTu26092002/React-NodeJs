var createError = require('http-errors');
var express = require('express'); 
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var authRouter = require('./routes/auth');
var demoRouter = require('./routes/demo');
var categoriesRouter = require('./routes/categories');

var app = express();

app.use(
  cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  }), 
  );

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// middleware
const myLogger = function (req, res, next) {
  console.log(req.headers['api-key']);

  const apiKey = req.headers['api-key'];
    if(apiKey && apiKey === 'aptech-node-key') {
      next();
    } else{
      res.sendStatus(401);
    }
  console.log('MIDDLEWARE LOGGED');
};

app.use(myLogger);
//router

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/demo', demoRouter);
app.use('/auth', authRouter);
app.use('/categories', categoriesRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
