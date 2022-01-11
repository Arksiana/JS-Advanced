const {expect, assert} = require('chai')
const mathEnforcer = require('./4. Math Enforcer')

describe('Test Math Enforcer', function(){
    describe('add five Test', function (){
        it('should return undefined when non number', function () {
            assert.equal(mathEnforcer.addFive('a'), undefined)
        });

        it('should return correct when float', function () {
            assert.equal(mathEnforcer.addFive(1.2), 6.2)
        });

        it('should return correct when number', function () {
            assert.equal(mathEnforcer.addFive(1), 6)
        });
    })

    describe('subtractTen Test', function () {
        it('should return undefined when non number', function () {
            assert.equal(mathEnforcer.subtractTen('aa'), undefined)
        })

        it('should return correct when float', function () {
            assert.equal(mathEnforcer.subtractTen(11.5), 1.5)
        });

        it('should return correct when number', function () {
            assert.equal(mathEnforcer.subtractTen(10), 0)
        });
    })

    describe('sum Test', function () {
        it('should return undefined when non number num1 and num2', function () {
            assert.equal(mathEnforcer.sum('a', 'a'), undefined)
        })

        it('should return undefined when non number num1 ', function () {
            assert.equal(mathEnforcer.sum('a', 1), undefined)
        })

        it('should return undefined when non number num2 ', function () {
            assert.equal(mathEnforcer.sum(1, 'a'), undefined)
        })

        it('should return correct when float', function () {
            assert.equal(mathEnforcer.sum(1.1, 1.1), 2.2)
        });

        it('should return correct when number', function () {
            assert.equal(mathEnforcer.sum(10, 10), 20)
        });
    })
})