const {assert, expect} = require('chai')
const cinema = require('./cinema')

describe('Cinema Test', () => {
    describe('showMovies', () => {
        it('return message arr equal to 0', () =>{
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
        })

        it('should return correct', () => {
            let input = ['A', 'B', 'C']
            let expected = 'A, B, C'
            assert.equal(cinema.showMovies(input), expected)
        });
    })

    describe('TicketPrice', () =>{
        it('invalid type projection', () =>{
            expect(function () {
                cinema.ticketPrice('NotNormal')
            }).to.throw('Invalid projection type.')
        })
        it('invalid type projection empty string', () =>{
            expect(function () {
                cinema.ticketPrice('')
            }).to.throw('Invalid projection type.')
        })


        it('should return correct discount', function () {
            assert.equal(cinema.ticketPrice('Discount'), 5.50)
        });
        it('should return correct normal', function () {
            assert.equal(cinema.ticketPrice('Normal'), 7.50)
        });
        it('should return correct premiere', function () {
            assert.equal(cinema.ticketPrice('Premiere'), 12.00)
        });
    })

    describe('swapSetsHall', () => {
        it('invalid type place string', function () {
            assert.equal(cinema.swapSeatsInHall('a', 'b'), "Unsuccessful change of seats in the hall.")
        });
        it('invalid type place floating', function () {
            assert.equal(cinema.swapSeatsInHall(1.1, 1.1), "Unsuccessful change of seats in the hall.")
        });

        it('invalid type place zero', function () {
            assert.equal(cinema.swapSeatsInHall(0, 0), "Unsuccessful change of seats in the hall.")
        });
        it('invalid type place below', function () {
            assert.equal(cinema.swapSeatsInHall(-1, -1), "Unsuccessful change of seats in the hall.")
        });

        it('invalid type place greater one', function () {
            assert.equal(cinema.swapSeatsInHall(1, 21), "Unsuccessful change of seats in the hall.")
        });
        it('invalid type place greater first', function () {
            assert.equal(cinema.swapSeatsInHall(21, 1), "Unsuccessful change of seats in the hall.")
        });
        it('invalid type place greater both', function () {
            assert.equal(cinema.swapSeatsInHall(21, 21), "Unsuccessful change of seats in the hall.")
        });

        it('invalid type missing', function () {
            assert.equal(cinema.swapSeatsInHall(1, null), "Unsuccessful change of seats in the hall.")
        });

        it('invalid type missing', function () {
            assert.equal(cinema.swapSeatsInHall(null, null), "Unsuccessful change of seats in the hall.")
        });



        it('should return correct', function () {
            assert.equal(cinema.swapSeatsInHall(1,2), "Successful change of seats in the hall.")
        })

    })


})
