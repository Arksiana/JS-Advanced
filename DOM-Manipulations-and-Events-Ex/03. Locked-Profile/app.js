function lockedProfile() {
    // add toggle event listener to all profile buttons
    // find associated profile details
    // of it's visible -> hide it and display 'show more'
    //otherwise -> show it and display label 'jide it'

    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onToggle))

    function onToggle(e) {
        const profile = e.target.parentElement
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked
        const infoDiv = profile.querySelector('div');
        console.log(isActive)

        if(isActive){
            if (e.target.textContent === 'Show more'){
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it'
            } else {
                infoDiv.style.display = 'none';
                e.target.textContent = 'Show more'
            }
        }
    }
}
