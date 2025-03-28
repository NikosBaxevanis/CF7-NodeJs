const express = require("express");
const app = express();

app.use(express.json())
const user = require('./roots/user.rootes');

app.use('/api/users', user)

module.exports = app 

