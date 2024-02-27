var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var session =require('express-session')

require('dotenv').config();

var indexRouter = require('./routes/index'); // routes/index.js
var usersRouter = require('./routes/users');
var promosRouter = require('./routes/promos'); //routes/promos.js
var cartaRouter = require('./routes/carta'); //routes/carta.js
var nuestroespacioRouter = require('./routes/nuestroespacio'); //routes/nuestroespacio.js
var direccionRouter = require('./routes/direccion'); //routes/direccion.js
var redessocialesRouter = require('./routes/redessociales'); //routes/redessociales.js
var deliveryRouter = require('./routes/delivery'); //routes/delivery.js
var ingresarRouter = require('./routes/ingresar'); //routes/ingresar.js
var contactoRouter = require('./routes/contacto'); //routes/contacto.js

var app = express();
var hbs = exphbs.create({
  defaultLayout:'main'
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs',);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/promos', promosRouter);
app.use('/carta', cartaRouter);
app.use('/nuestroespacio', nuestroespacioRouter);
app.use('/direccion', direccionRouter);
app.use('/redessociales', redessocialesRouter);
app.use('/delivery', deliveryRouter);
app.use('/ingresar', ingresarRouter);
app.use('/contacto', contactoRouter);

app.use(function(req, res) {
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
