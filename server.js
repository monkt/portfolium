const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(logger("dev"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //specifies the engine we want to use
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'app')));
app.use('/static', express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res, next) {
  res.render('index.html');
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, function() {
  console.log('app started on port: ', port);
});
