var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message.js');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var text = 'testing message';
        var from = 'peace';
        var newMessage = generateMessage(from, text);

        expect(newMessage.from).toEqual(from);
        expect(newMessage.text).toEqual(text);
       // expect(newMessage.createdAt).toBeAn('number');


    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'admin';
        var latitude = 1;
        var longitude = 1;
        var newLocationMessage = generateLocationMessage(from, latitude, longitude);

        expect(newLocationMessage.from).toEqual(from);
        expect(newLocationMessage.url).toEqual(`https://www.google.com/maps?q=${latitude},${longitude}`);
        //expect(newLocationMessage.createdAt).toBe('string');
        //expect(newLocationMessage).toInclude({from});
    });
});
