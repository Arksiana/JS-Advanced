const {assert, expect} = require('chai')
const numberOperations = require('./numberOperations')



describe('Number Operations Test', function () {
    describe('powNumber', function () {
        it('should return correct', () => {
            assert.equal(numberOperations.powNumber(1, 1), 1)
        })

    })

    describe('numberChecker', function () {
        it('input is Nan', function () {
            // expect(numberOperations.numberChecker()).to.throw('The input is not a number!')
            expect(function () {
                numberOperations.numberChecker()
            }).to.throw('The input is not a number!')
        })

        it('input is string', function () {
            // expect(numberOperations.numberChecker()).to.throw('The input is not a number!')
            expect(function () {
                numberOperations.numberChecker('a')
            }).to.throw('The input is not a number!')
        })

        it('input is string', function () {
            expect(function () {
                numberOperations.numberChecker(undefined)
            }).to.throw('The input is not a number!')
        })



        // it('input is empty string', function () {
        //     // expect(numberOperations.numberChecker()).to.throw('The input is not a number!')
        //     expect(function () {
        //         numberOperations.numberChecker('')
        //     }).to.throw('The input is not a number!')
        // })

        it('input lower than 100', function () {
            assert.equal(numberOperations.numberChecker(50), 'The number is lower than 100!')
        })

        it('input greater than 100', function () {
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!')
        })

        it('input 100', function () {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
        })
    })

    describe('sumArrays', () => {
        it('should return correct', function ()
        {
            let arr1 = [1, 1, 1, 1]
            let arr2 = [1, 1, 1]
            let res = [2, 2, 2, 1]
            // assert.equal(numberOperations.sumArrays([1], [1]), Array.from([2]))
            expect(numberOperations.sumArrays(arr1, arr2)).deep.to.equal(res)
        });

        it('should return correct 2', function ()
        {
            let arr1 = [1, 1, 1]
            let arr2 = [1, 1, 1]
            let res = [2, 2, 2]
            // assert.equal(numberOperations.sumArrays([1], [1]), Array.from([2]))
            expect(numberOperations.sumArrays(arr1, arr2)).deep.to.equal(res)
        });

        it('should return correct 3', function ()
        {
            let arr1 = [1]
            let arr2 = [1]
            let res = [2]
            // assert.equal(numberOperations.sumArrays([1], [1]), Array.from([2]))
            expect(numberOperations.sumArrays(arr1, arr2)).deep.to.equal(res)
        });
    })
})