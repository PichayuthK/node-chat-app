const expect = require('expect');

var { isRealString } = require('./validation')

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = 111;
        expect(isRealString(str)).toEqual(false);
    });

    it('should reject string with only space', () => {
        var str = '   ';
        expect(isRealString(str)).toEqual(false);
    });

    it('should allow string with non-space characters', () => {
        var str = 'Peace';
        expect(isRealString(str)).toEqual(true);
    });

});