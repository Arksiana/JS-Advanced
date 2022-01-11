function create(words) {
   for(let word of words){
      const content = document.getElementById('content')

      const div = document.createElement('div')
      const para = document.createElement('p')
      para.textContent = word
      para.style.display = 'none'
      div.appendChild(para)

      div.addEventListener('click', e => {
         e.target.children[0].style.display = ''
      })

      content.appendChild(div)

   }

   //create <div>
   // create <p>
   //set <p> content
   //configure <p> to be hidden
   //add <p> to >div>
   //add div to page
   //configure div eventList


}