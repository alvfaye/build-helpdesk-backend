const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
let port = process.env.PORT;
let uri = process.env.MONGO_URI;

const app = express();
app.get('/', (req, res) => {
  res.send('Kamusta pilipinas?');
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

app.listen(port, () => {
  console.log('Server is running at port 3000');
});
