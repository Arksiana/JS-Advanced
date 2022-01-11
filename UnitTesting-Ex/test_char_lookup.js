const {expect, assert} = require('chai')
const lookupChar = require('./3. Char Lookup')


describe('Test Char Lookup', function() {
    it('should return char at index', function() {
        assert.equal(lookupChar('baba', 0), 'b')
    })

    it('negative index should return incorrect', function () {
        assert.equal(lookupChar('baba', -1),"Incorrect index")
    });

    it('index out of range return incorrect', function () {
        assert.equal(lookupChar('baba', 7),"Incorrect index")
    });

    it('not string should return undefined', function () {
        assert.equal(lookupChar(1,1), undefined)

    });

    it('not integer should return undefined', function () {
        assert.equal(lookupChar('Baba','a'), undefined)

    });

    it('not string an not integer should return undefined', function () {
        assert.equal(lookupChar(1,'baba'), undefined)

    });

    it('float should return undefined', function () {
        assert.equal(lookupChar('baba',1.2), undefined)

    });
    it('index equal length return incorrect', function () {
        assert.equal(lookupChar('baba', 4),"Incorrect index")
    });

    it('not string float should return undefined', function () {
        assert.equal(lookupChar(1.2,1), undefined)

    });

})