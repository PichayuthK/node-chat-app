
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();
// use node http instead of express
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New user connected');

    //event response
    // socket.emit('newEmail',{
    //     from: 'mike@example.com',
    //     text: 'Hey. What is going on.',
    //     createAt: 123
    // });

    //event listener
    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail',newEmail);
    // });

    socket.on('createMessage', (msg) => {
        console.log('createMessage', msg);
    });

    socket.emit('newMessage', {
        from: 'peace server',
        text: 'new message from server',
        createdAt: Date.now()
    });

    socket.on('disconnect', () => {
        console.log('User disconnected from server');
    });

});

// user node http to run server instead of express
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

