window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model')
    const yearField = document.getElementById('year')
    const descriptionField = document.getElementById('description')
    const priceField = document.getElementById('price')
    const addBtn = document.getElementById('add')
    const furnitureList = document.getElementById('furniture-list')
    const totalPrice = document.querySelector('.total-price')


    addBtn.addEventListener('click', addFurniture)

    function addFurniture(event) {
        event.preventDefault()
        const year = Number(yearField.value)
        const price = Number(priceField.value)

        if (year == '' || year < 0 || price == '' || price < 0) {
            return            
        }


        const tr = document.createElement('tr')
        tr.classList.add('info')
        tr.innerHTML = `<td>${modelField.value}</td>
                        <td>${(price.toFixed(2))}</td>
                        <td>
                            <button class="moreBtn">More Info</button>
                            <button class="buyBtn">Buy it</button>
                        </td>`

        const hideTr = document.createElement('tr')
        hideTr.classList.add('hide')
        hideTr.innerHTML = `<td>Year: ${yearField.value}</td>
                            <td colspan='3'>Description: ${descriptionField.value}</td>`                        

        furnitureList.appendChild(tr)
        furnitureList.appendChild(hideTr)


        modelField.value = ''
        yearField.value = ''
        descriptionField.value = ''
        priceField.value = ''

        const btn = tr.querySelectorAll('button')
        btn[0].addEventListener('click', showMoreInfo)
        btn[1].addEventListener('click', buyIt)

    }




    function showMoreInfo(event){
        const moreIntoTr = event.target.parentElement.parentElement.nextElementSibling


        if (event.target.textContent === 'More Info') {
            moreIntoTr.style.display = 'contents'

            event.target.textContent = 'Less Info'
        } else {
            moreIntoTr.style.display = 'none'
            event.target.textContent = 'More Info'
        }
      
        
    }


    function buyIt(event) {
        const tr = event.target.parentNode.parentNode
        const hideTr = tr.nextElementSibling

        hideTr.parentElement.removeChild(hideTr)

        const price = Number(tr.querySelectorAll('td')[1].textContent)
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2)


        tr.parentElement.removeChild(tr)

        
        
    }
    




}

