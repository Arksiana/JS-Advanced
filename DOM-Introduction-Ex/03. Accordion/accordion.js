function toggle() {
    const btnContext = document.getElementsByClassName('button')[0].textContent
    console.log(btnContext)

    if (btnContext === 'More') {
        document.getElementById('extra').style.display = 'block'
        document.getElementsByClassName('button')[0].textContent = 'Less'
    }
    if (btnContext === 'Less') {
        document.getElementById('extra').style.display = 'none'
        document.getElementsByClassName('button')[0].textContent = 'More'
    }
}