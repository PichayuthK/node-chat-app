var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    // socket.emit('createEmail', {
    //     to: 'peace@example.com',
    //     text: 'Hey. this is peace'
    // });

    socket.emit('createMessage', {
        from: 'peace',
        text: 'this message is from peace web'    
    });

});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(msg)  {
    console.log('there is new message ', msg);
});

// socket.on('newEmail', function (email) {
//     console.log('New Email', email);
// });