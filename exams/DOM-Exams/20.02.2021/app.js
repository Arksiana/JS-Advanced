function solve(){
   const creatorField = document.getElementById('creator')
   const titleField = document.getElementById('title')
   const categoryField = document.getElementById('category')
   const contentField = document.getElementById('content')
   const createBtn = document.getElementsByClassName('btn create')[0]

   const siteContent = document.querySelectorAll('section')[1]
   const archiveSection = document.querySelectorAll('section')[3].querySelector('ol')

   createBtn.addEventListener('click', createPost)

   
   function createPost(event){
      event.preventDefault()

      const creator = creatorField.value
      const title = titleField.value
      const category = categoryField.value
      const content = contentField.value

      if (creator == '' || title == '' || category == '' || content == '') {
         return
      }
      const deleteBtn = e('button', {class: 'btn delete'},`Delete`)
      const archiveBtn = e('button',{class: "btn archive"}, 'Archive')
            
      const post = e('article', {},
            e('h1', {}, title),
            e('p', {}, 'Category: ',
               e('strong', {}, category)),
            e('p', {}, 'Creator: ',
               e('strong', {}, creator)),
            e('p',{}, content),
            e('div', {class: 'buttons'}, deleteBtn, archiveBtn))
               
      siteContent.appendChild(post)


      deleteBtn.addEventListener('click', deletePost)
      archiveBtn.addEventListener('click', archivePost)

      function deletePost(ev){
         ev.target.parentNode.parentNode.remove()
      }

      function archivePost(ev){
         const toArchive = ev.target.parentNode.parentNode.querySelector('h1')
         const li = e('li', {}, toArchive.textContent) 
         archiveSection.appendChild(li)
         
         // const sortedList = document.getElementById('list')
         const elements = [...archiveSection.children]
         elements.sort((a, b) => {
               return a.textContent.localeCompare(b.textContent);
            });

         for (let element of elements) {
               //  console.log(element)
                archiveSection.appendChild(element)
         }



         ev.target.parentNode.parentNode.remove()
         

      }
   }

   function e(type, attr, ...content) {
      const element = document.createElement(type)
      for (let prop in attr) {
          element.setAttribute(prop, attr[prop])
      }
      for (let item of content) {
          if (typeof item == "string" || typeof item == "number") {
              item = document.createTextNode(item)
          }
          element.appendChild(item)
      }
      return element
  }

}