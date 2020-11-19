const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('We are on home');
}); 

mongoose.connect(process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('connected to db 🚀')
);

app.listen(3000);
