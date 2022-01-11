function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

// const {expect, assert} = require('chai')

// describe('Test Char Lookup', function() {
//     it('should return char at index', function() {
//         assert.equal(lookupChar('baba', 0), 'b')
//     })
// })

module.exports = lookupChar;