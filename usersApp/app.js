const express = require("express");
const app = express();

app.use(express.json())

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger')

const user = require('./roots/user.rootes');
const userProduct = require('./roots/user.products.routes');
const auth = require('./roots/auth.routes');

app.use('/api/auth', auth);
app.use('/api/users', user);
app.use('/api/user-product', userProduct);

app.use(
    '/api-docs', 
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument.options)  
  );
module.exports = app;

