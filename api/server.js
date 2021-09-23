const express = require('express');
const cors = require('cors')
const server = express();
server.use(express.json());

server.use(cors({
    credentials: true,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
}))

/* routes */

const ping = require('./routes/ping.js');
const products = require('./routes/products.js');
const productReviews = require('./routes/product-reviews.js');

server.use( '/ping', ping );
server.use('/api/products', products);
server.use('/api/product-reviews', productReviews);

module.exports = server;