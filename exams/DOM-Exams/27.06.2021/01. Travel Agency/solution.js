window.addEventListener('load', solution);

function solution() {
  const nameField = document.getElementById('fname')
  const emailField = document.getElementById('email')
  const numberField = document.getElementById('phone')
  const addressField = document.getElementById('address')
  const codeField = document.getElementById('code')
  const submitBtn = document.getElementById('submitBTN')
  const infoPrev = document.getElementById('infoPreview')

  let backupName = '';
  let backupEmail = '';
  let backupNumber = '';
  let backupAddress = '';
  let backupCode = '';
  
  const editBtn = document.getElementById('editBTN')
  const continueBTN = document.getElementById('continueBTN')
  

  submitBtn.disabled = false
  editBtn.disabled = true
  continueBTN.disabled = true

  submitBtn.addEventListener('click', submitInformation)
  editBtn.addEventListener('click', editInformation)
  continueBTN.addEventListener('click', continueReservation)


  function submitInformation(ev){
      ev.preventDefault()

      if(nameField.value == '' || emailField.value == ''){
        return
      }

      backupName = nameField.value
      backupEmail = emailField.value
      backupAddress = addressField.value
      backupNumber = numberField.value
      backupCode = codeField.value

      submitBtn.disabled = true

      infoPrev.innerHTML = `<li>Full Name: ${nameField.value}</li>
      <li>Email: ${emailField.value}</li>
<li>Phone Number: ${numberField.value}</li>
<li>Address: ${addressField.value}</li>
<li>Postal Code: ${codeField.value}</li>`


      editBtn.disabled = false
      continueBTN.disabled = false
                    
      nameField.value = ''
      emailField.value = ''
      numberField.value = ''
      addressField.value = ''
      codeField.value = ''
  }




  function editInformation(ev){

    editBtn.disabled = true
    continueBTN.disabled = true
    submitBtn.disabled = false

    nameField.value = backupName
    emailField.value = backupEmail
    numberField.value = backupNumber
    addressField.value = backupAddress
    codeField.value = backupCode

    infoPrev.innerHTML = ''
  }

  
  function continueReservation(ev){
    const allContentPage = document.getElementById('block')
    allContentPage.innerHTML = ''
    const addTag = document.createElement('h3')
    addTag.textContent = "Thank you for your reservation!"

    allContentPage.appendChild(addTag)
  }



}
