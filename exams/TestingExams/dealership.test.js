const {assert, expect} = require('chai')
const dealership = require('./dealership')

describe('Dealership Test', () => {
    describe('newCarContract', () => {
        it('should return new car', function () {
            let car = 'Audi A5 B8'
            assert.equal(dealership.newCarCost(car, 15000), 15000)
        });

        it('should return new car with discount 1', function () {
            let car = 'Audi A4 B8'
            assert.equal(dealership.newCarCost(car, 20000), 5000)
        });

        it('should return new car with discount 2', function () {
            let car = 'Audi A6 4K'
            assert.equal(dealership.newCarCost(car, 25000), 5000)
        });

        it('should return new car with discount 3', function () {
            let car = 'Audi A8 D5'
            assert.equal(dealership.newCarCost(car, 30000), 5000)
        });

        it('should return new car with discount 4', function () {
            let car = 'Audi TT 8J'
            assert.equal(dealership.newCarCost(car, 19000), 5000)
        });
    })

    describe('carEquipment', () =>{
        it('should return selected extras', function () {
            let extras = ['heated seats', 'sliding roo', 'sport rims', 'navigation']
            let indexArr = [0, 1, 2]
            let res = ['heated seats', 'sliding roo', 'sport rims']
            expect(dealership.carEquipment(extras, indexArr)).to.deep.equal(res)
        });
    })

    describe('euroCategory', () =>{
        it('should return category 4 with discount', function () {
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`)
        })

        it('should return category more than 4 with discount', function () {
            assert.equal(dealership.euroCategory(15), `We have added 5% discount to the final price: 14250.`)
        })

        it('should return less than 4', function () {
            assert.equal(dealership.euroCategory(0), 'Your euro category is low, so there is no discount from the final price!')
        })
    })
})