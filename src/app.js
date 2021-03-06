const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config.js');

mongoose.Promise = global.Promise;

const db = mongoose.connect(config.mongodbPath);

const Book = require('./models/bookModel');

const bookController = require('./controllers/bookController.js')(Book);

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const bookRouter = require('./routes/bookRoutes.js')(Book, bookController);

app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
  res.send('bello everyone :\')');
});

app.listen(port, () => {
  console.log(`Running on PORT: ${port}`);
});

module.exports = app;
