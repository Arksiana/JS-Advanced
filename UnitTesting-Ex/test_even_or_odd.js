const {expect, assert} = require('chai')
const isOddOrEven = require('./2.Even or odd')

describe('Is Odd or Even Test', () => {
    it("Is even", () => {
        assert.equal(isOddOrEven("aa"), "even", "Message a==a");
    });

    it("Is odd", () =>{
        assert.equal(isOddOrEven('aaa'), 'odd')
    })

    it('should return undefined when not string', function () {
        assert.equal(isOddOrEven(1), undefined)
    });
})