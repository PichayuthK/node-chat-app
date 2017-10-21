var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    // socket.emit('createEmail', {
    //     to: 'peace@example.com',
    //     text: 'Hey. this is peace'
    // });

});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (msg) {
    console.log('there is new message ', msg);

    var li = jQuery('<li></li>');
    li.text(`${msg.from}: ${msg.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Krit',
//     text: 'hi'
// }, function (data) {
//     console.log('got it', data);
// });

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    });
});

// socket.on('newEmail', function (email) {
//     console.log('New Email', email);
// });