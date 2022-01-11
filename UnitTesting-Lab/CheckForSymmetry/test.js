const {expect} = require('chai')
const issSymmetry = require('./symmetry')

describe('symmetry checker', function() {
    it('return true for symmetric array ', function () {
        expect(issSymmetry([1, 2, 2, 1])).to.be.true
    });

    it('returns false for non-symmetric array ', function () {
        expect(issSymmetry([1, 2, 3])).to.be.false
    });

    it('returns false for non-array', function () {
        expect(issSymmetry(5)).to.be.false
    });

    // Test overloading
    it('return false for symmetric array odd number elements', function () {
        expect(issSymmetry([1, 2, 2])).to.be.false
    });

    it('return true for symmetric array of elements', function () {
        expect(issSymmetry(['a', 'b', 'b', 'a'])).to.be.true
    });

    it('return false for symmetric array of odd string', function () {
        expect(issSymmetry(['a', 'b', 'b'])).to.be.false
    });

})
