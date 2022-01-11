window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById('genre');
    const nameField = document.getElementById('name')
    const authorField = document.getElementById('author')
    const dateField = document.getElementById('date')
    const addBtnField = document.getElementById('add-btn')
    let totalLikeSongs = 0

    addBtnField.addEventListener('click', SubmitSong)


    function SubmitSong(ev) {
        ev.preventDefault();
        const name = genreField.value
        const genre = nameField.value
        const date = dateField.value
        const author = authorField.value


        if(name == '' || genre == '' || date == '' || author == ''){
            return
        }

        const allHitsContainer = document.querySelector('div[class="all-hits-container"]')
        const hitsInfo = document.createElement('div')
        hitsInfo.className = 'hits-info'
        hitsInfo.innerHTML = `<img src="./static/img/img.png">
        <h2> Genre: ${genre}</h2>
        <h2>Name: ${name}</h>
        <h2>Author: ${author}</h>
        <h3>Date: ${date}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>`

        allHitsContainer.appendChild(hitsInfo)

        genreField.value = ''
        nameField.value = ''
        authorField.value = ''
        dateField.value = ''



        const likeBtn = allHitsContainer.querySelector('button[class="like-btn"]')
        const saveBtn = allHitsContainer.querySelector('button[class="save-btn"]')
        const deleteBtn = allHitsContainer.querySelector('button[class="delete-btn"]')
        
        likeBtn.addEventListener('click', likeSong)
        
    }


    function likeSong(ev) {
        totalLikeSongs += 1
        console.log(ev.target.parentNode)
        // const totalLikes = ev.target.querySelector('div[class="likes"]')
        // // console.log(totalLikes.children[0].textContent) 
        // totalLikes.children[0].textContent = `Total Likes: ${totalLikeSongs}`
        // document.querySelector('button[class="like-btn"]').disabled = true
        
    }
    


}