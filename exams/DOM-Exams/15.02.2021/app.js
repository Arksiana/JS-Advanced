function solution() {
    const giftToAdd = document.querySelector('input[type=text]')
    const addGiftBtn = document.querySelector('button')
    const allLists = document.querySelectorAll('ul')
    const listOfGifts = allLists[0]
    const sentGifts = allLists[1]
    const discardedGifts = allLists[2]

    addGiftBtn.addEventListener('click', addGift)

    function addGift(ev) {
        ev.preventDefault()
        const nameGift = giftToAdd.value.trim()

        if(nameGift == ''){
            return
        }

        const li = document.createElement('li')
        li.className = 'gift'
        li.innerHTML = `${nameGift}<button class='sendButton'>Send</button><button class='discardButton'>Discard</button>
        `
        
        listOfGifts.appendChild(li)
        
        giftToAdd.value = ''

        Array.from(listOfGifts.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((li) => listOfGifts.appendChild(li));

        const sendButton = li.getElementsByClassName('sendButton')[0]
        const discardButton = li.getElementsByClassName('discardButton')[0]
        
        sendButton.addEventListener("click", send);
        discardButton.addEventListener("click", discard);
        

        
    }


    function send(e) {
        const sBtn = document.getElementsByClassName('sendButton')[0]
        // console.log(sBtn.previousSibling)
        
        sentGifts.innerHTML += `<li>${sBtn.previousSibling.textContent}</li>`;
        e.target.parentNode.remove()
    }

    function discard(e) {
        const dBtn = document.getElementsByClassName('discardButton')[0]
  
        
        discardedGifts.innerHTML += `<li>${dBtn.previousSibling.previousSibling.textContent}</li>`;
        e.target.parentNode.remove()
    }

}