const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://fiap:sKZo63kWcb7kVjJk@cluster0.rjscz.mongodb.net/api-vendas?retryWrites=true&w=majority')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});


//Registar as models
require('./models/product')

//Rotas 
const productRouter = require('./routes/product-route')

app.use('/products', productRouter)

//meu erro 
module.exports = app;
