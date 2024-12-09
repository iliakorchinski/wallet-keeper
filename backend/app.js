const express = require('express');

// const path = require('path');
require('dotenv').config();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const walletRoutes = require('./routes/walletRoutes');

const cors = require('cors');
const db = process.env.MONGODB_URI;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(walletRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

mongoose
  .connect(db)
  .then(() => {
    app.listen(8080, () => {
      console.log('Connected!');
    });
  })
  .catch((err) => console.log(err));
