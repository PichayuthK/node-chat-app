var expect = require('expect');
var { generateMessage } = require('./message.js');

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
