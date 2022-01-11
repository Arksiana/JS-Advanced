function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const dropDownButton = document.getElementById('menu')

    const addDropDown = document.createElement('option')
    addDropDown.textContent = newItemText.value + ' ' + newItemValue.value
    dropDownButton.appendChild(addDropDown)
    newItemValue.value = ''
    newItemText.value = ''

}