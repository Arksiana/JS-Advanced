const {assert, expect} = require('chai')
const testNumbers = require('./testNumbers')

describe('Test Number', function() {
    describe('sumNumbers Test', function(){
        it('should return correct when both numbers', function () {
            assert.equal(testNumbers.sumNumbers(1, 1), 2)
        });

        it('should return correct when both floats', function () {
            assert.equal(testNumbers.sumNumbers(1.111, 1.1), 2.21)
        });

        it('should return undefined when not number num1', function () {
            assert.equal(testNumbers.sumNumbers('a', 1), undefined)
        });

        it('should return undefined when not number num2', function () {
            assert.equal(testNumbers.sumNumbers(1, 'a'), undefined)
        });

        it('should return undefined when not number num1 and mum2', function () {
            assert.equal(testNumbers.sumNumbers('a', 'a'), undefined)
        });
        it('correct output', function () {
            assert.equal(testNumbers.sumNumbers(2, 1), '3.00')
        })
    })

    describe('numberChecker Test', () => {
        it('if is Nan ', function () {
            expect(function() {
                testNumbers.numberChecker('text')
            }).to.throw('The input is not a number!')
        });

        it('if is even', function () {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!')
        });

        it('if is odd', function () {
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!')
        });

        describe('averageSumArray Test', () => {
            it('correct average sum array', function () {
                assert.equal(testNumbers.averageSumArray([1, 1, 1]), 1)

            });
        })
    })

})