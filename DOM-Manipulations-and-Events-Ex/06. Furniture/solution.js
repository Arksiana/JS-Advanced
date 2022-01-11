function solve() {
    // configure event listeners
    //select all buttons
    // first button -> table generation
    //second button -> buy furniture
    // # table generation
    const table = document.querySelector('table.table tbody')

    const [input, output] = Array.from(document.querySelectorAll('textarea'))
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'))

    generateBtn.addEventListener('click', generate)
    buyBtn.addEventListener('click', buyEvent)


    function generate(e) {
        // read input JSON and parse it
        // for every array element, create table row
        const data = JSON.parse(input.value)

        for (let item of data) {
            // const row = document.createElement('tr')
            // const imgCell = document.createElement('td')
            // const nameCell = document.createElement('td')
            // const priceCell = document.createElement('td')
            // const decFactorCell = document.createElement('td')
            // const checkCell = document.createElement('td')
            //
            // const img = document.createElement('img')
            // img.src = item.img
            // imgCell.appendChild(img)
            //
            // const nameP = document.createElement('p')
            // nameP.textContent = item.name
            // nameCell.appendChild(nameP)
            //
            //
            // const priceP = document.createElement('p')
            // priceP.textContent = item.price
            // priceCell.appendChild(priceP)
            //
            // const dec = document.createElement('p')
            // dec.textContent = item.decFactor
            // decFactorCell.appendChild(dec)
            //
            //
            // const check = document.createElement('input')
            // check.type = 'checkbox'
            // checkCell.appendChild(check)
            //
            //
            // row.appendChild(imgCell)
            // row.appendChild(nameCell)
            // row.appendChild(priceCell)
            // row.appendChild(decFactorCell)
            // row.appendChild(checkCell)
            //
            //
            // table.appendChild(row)

            const row = document.createElement('tr')

            row.appendChild(createCell('img', {src: item.img}))
            row.appendChild(createCell('p', {}, item.name))
            row.appendChild(createCell('p', {}, item.price))
            row.appendChild(createCell('p', {}, item.decFactor))
            row.appendChild(createCell('input', {type: 'checkbox'}))


            table.appendChild(row)



        }
    function createCell(nestedTag, props, content) {
        const cell = document.createElement('td')
        const nested = document.createElement(nestedTag)
        for (let prop in props){
            nested[prop] = props[prop]
        }

        if(content){
            nested.textContent = content
        }
        cell.appendChild(nested)
        return cell

    }

    }

    function buyEvent(e) {
        // # buy furniture
        // select all checkboxes
        // filter only checked checkboxes
        //repeat for every selected checkbox
        //--select parent row
        //-- read item information
        // display output

        const furniture = Array
            .from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(b => b.parentElement.parentElement)
            .map(r => ({
                name: r.children[1].textContent,
                price: Number(r.children[2].textContent),
                decFactor: Number(r.children[3].textContent)
            }))

        const names = []
        let total = 0
        let decFactor = 0

        for (let item of furniture) {
            total += item.price
            decFactor += item.decFactor
            names.push(item.name)
        }

        const result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}
        `

        output.value = result
    }


}


