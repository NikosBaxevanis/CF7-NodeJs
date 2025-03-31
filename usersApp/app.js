const express = require("express");
const app = express();

app.use(express.json())
const user = require('./roots/user.rootes');
const userProduct = require('./roots/user.products.routes');


app.use('/api/users', user);
app.use('/api/user-product', userProduct);

module.exports = app 

