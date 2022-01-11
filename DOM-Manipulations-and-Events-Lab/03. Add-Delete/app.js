function addItem() {
    const toAdd = document.getElementById('newItemText')

    //create new li element and set value
    const liElement = document.createElement('li')
    liElement.textContent = toAdd.value

    //create delete button
    const button = document.createElement('a')
    button.href = '#'
    button.textContent = '[Delete]'
    button.addEventListener('click', removeElement)

    liElement.appendChild(button)

    document.getElementById('items').appendChild(liElement)

    //clear input field
    toAdd.value = ''


    function removeElement(ev) {
        const parent = ev.target.parentNode
        parent.remove()
    }
}