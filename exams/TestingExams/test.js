const {assert, expect} = require('chai')
const library = require('./library')

describe('Library Test', () => {
    describe('calcPriceOfBook', () => {
        it('name not string', function () {
            expect(function () {
                library.calcPriceOfBook(1,1)
            }).to.throw("Invalid input")
        })

        it('year not number', function () {
            expect(function () {
                library.calcPriceOfBook('Book','Book')
            }).to.throw("Invalid input")
        })

        it('year float', function () {
            expect(function () {
                library.calcPriceOfBook('Book',1.2)
            }).to.throw("Invalid input")
        })

        it('both not correct', function () {
            expect(function () {
                library.calcPriceOfBook(1,'Book')
            }).to.throw("Invalid input")
        })

        it('year under 1980', function () {
            let res = `Price of Book is 10.00`
            assert.equal(library.calcPriceOfBook('Book', 1970), res)
        })

        it('year equal 1980', function () {
            let res = `Price of Book is 10.00`
            assert.equal(library.calcPriceOfBook('Book', 1980), res)
        })

        it('year over 1980', function () {
            let res = `Price of Book is 20.00`
            assert.equal(library.calcPriceOfBook('Book', 1981), res)
        })

        describe('findBook', function () {
            it('bookArr is empty', function () {
                let nameOfBooks = []
                let desire = 'Book'
                expect(function () {
                    library.findBook(nameOfBooks,desire)
                }).to.throw("No books currently available")
            })

            it('found book', function () {
                let nameOfBooks = ['Book', 'Book1']
                let desire = 'Book'
                assert.equal(library.findBook(nameOfBooks, desire), "We found the book you want.")
            })

            it('not found book', function () {
                let nameOfBooks = ['Book', 'Book1']
                let desire = 'Book3'
                assert.equal(library.findBook(nameOfBooks, desire), "The book you are looking for is not here!")
            })
        })

        describe('arrangeTheBooks', function () {
            it('codebooks not number', function () {
                expect(function () {
                    library.arrangeTheBooks('Book')
                }).to.throw("Invalid input")
            })

            it('codebooks negative', function () {
                expect(function () {
                    library.arrangeTheBooks(-2)
                }).to.throw("Invalid input")
            })

            it('codebooks float', function () {
                expect(function () {
                    library.arrangeTheBooks(1.2)
                }).to.throw("Invalid input")
            })

            it('availableSpace > countBooks', function () {
                assert.equal(library.arrangeTheBooks(4), "Great job, the books are arranged.")
            })

            it('availableSpace = countBooks', function () {
                assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.")
            })

            it('availableSpace < countBooks', function () {
                assert.equal(library.arrangeTheBooks(45), "Insufficient space, more shelves need to be purchased.")
            })
        })
    })
})