const express = require('express');
const cors = require('cors');
const server = express();
server.use( express.json() );

server.use(cors({
    origin: ['http://localhost:3000', 'https://howto-frontend.netlify.com'],
}));

/* routes */

const ping = require('./routes/ping.js');
const products = require('./routes/products.js');
const productReviews = require('./routes/product-reviews.js');

server.use( '/ping', ping );
server.use('/api/products', products);
server.use('/api/product-reviews', productReviews);

/* websocket */

const http = require('http').Server(server);
const io = require('socket.io')(http);

io.on("connection", (socket) => {
    console.log("New client connected");
    socket.emit("welcome", "Hello and Welcome to the Server");
})

http.listen(4000, function() {
    console.log('listening on *:4000');
});

module.exports = server;

