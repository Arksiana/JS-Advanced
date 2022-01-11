function addItem() {
    const toAdd = document.getElementById('newItemText')
    // console.log(toAdd)
    const liElement = document.createElement('li')
    liElement.textContent = toAdd.value
    document.getElementById('items').appendChild(liElement)
    toAdd.value = ''
}