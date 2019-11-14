const express = require('express');
const session = require('express-session');
const database = require('./routes/connection');
const login = require('./routes/login');
const path = require('path');
const app = express();

const twoHours = 1000 * 60 * 60 * 2;
const {
  PORT = 3000,
  NODE_ENV = 'development',
  SESS_NAME = "sesson_id",
  SESS_SECRET = "ligmabutcrk",
  SESS_LIFETIME = twoHours
} = process.env;
const IN_PROD = NODE_ENV === 'production';

app.use(session({
  name: SESS_NAME,
  resave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD
  }
}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.listen(PORT, () => {
  console.log('Server is officially running');
})
