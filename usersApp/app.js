const express = require("express");
const app = express();

app.use(express.json())

const user = require('./roots/user.rootes');
const userProduct = require('./roots/user.products.routes');
const auth = require('./roots/auth.routes');

app.use('/api/auth', auth);
app.use('/api/users', user);
app.use('/api/user-product', userProduct);


module.exports = app;

