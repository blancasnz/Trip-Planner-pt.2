var path = require('path');
var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var db = require('../models').db;
var routes = require('../routes');

//logging and body-parsing
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//app.get('/', (req, res, next) => {
// res.sendFile(path.join(__dirname, '.../public/index.html'))
// })

//static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routes); // only arguement where first param is optional






// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send('Error found: ' + err.message);
});

//listening on port
var port = 3000;
app.listen(port, function () {
  console.log("The server is listening closely on port", port);
  db.sync()
    .then(function () {
      console.log("Synchronated the database");
    })
    .catch(function (err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});
