const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.get('/', (req, res) => {
  res.send('Kamusta pilipinas?');
});

mongoose.connect(
  'mongodb+srv://mafea8ph:administrator@cluster0.sooma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

app.listen(3000, () => {
  console.log('Server is running at port 3000');
});
