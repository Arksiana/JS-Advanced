function focused() {
    // const fields = [...document.getElementsByTagName('input')]
    //
    // for(let field of fields){
    //     field.addEventListener('focus', onfocus)
    //     field.addEventListener('blur', onBlur)
    // }
    //
    // function onfocus(event) {
    //     event.target.parentNode.className = 'focused'
    //     // console.log('focused', event.target)
    // }
    //
    //
    // function onBlur(event) {
    //     event.target.parentNode.className = ''
    // }

    //Optim.
    [...document.getElementsByTagName('input')]
        .forEach(f => {
            f.addEventListener('focus', (ev) => ev.target.parentNode.className = 'focused')
            f.addEventListener('blur', (ev) => ev.target.parentNode.className = '')
        })
}

