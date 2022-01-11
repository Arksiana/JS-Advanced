const {expect} = require('chai')
const rgbToHexColor = require('./rgbtohex')

describe('RGB Convertor', () => {
    it('convert white', function () {
        expect(rgbToHexColor(255, 255, 255).to.equal('#FFFFFF'))
    });
})