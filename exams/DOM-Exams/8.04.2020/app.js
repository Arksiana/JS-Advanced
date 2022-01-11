function solve() {
    const taskField = document.getElementById('task')
    const descriptionField = document.getElementById('description')
    const dateField = document.getElementById('date')

    const openTasks = document.querySelectorAll('section')[1]
    const openTinProgressTasks = document.querySelectorAll('section')[2]
    const completeTasks = document.querySelectorAll('section')[3]
 

    const addTaskBtn = document.getElementById('add')
    addTaskBtn.addEventListener('click', addTask)

    function addTask(ev){
        ev.preventDefault()
        const taskName = taskField.value
        const description = descriptionField.value
        const date = dateField.value

        if(taskName == '' || description == '' || date == ''){
            return
        }
        const toAdd = openTasks.querySelectorAll('div')[1]
        const startBtn = e('button', {class: 'green'}, 'Start')
        const deleteBtn = e('button', {class: 'red'}, 'Delete')
        const task = e('article', {},
        e('h3', {}, taskName),
        e('p', {}, `Description: ${description}`),
        e('p', {}, `Due Date: ${date}`),
        e('div', {class: 'flex'}, startBtn, deleteBtn))


        toAdd.appendChild(task)


        startBtn.addEventListener('click', inProgress)
        deleteBtn.addEventListener('click', deleteTask)


        function deleteTask(ev){
            ev.target.parentNode.parentNode.remove()
        }


        function inProgress(ev){
            const task = ev.target.parentNode.parentNode
            ev.target.parentNode.remove()

            const deleteBtn = e('button', {class: 'red'}, 'Delete')
            const finishBtn = e('button', {class: 'orange'}, 'Finish')
            const a = e('div', {class: 'flex'}, deleteBtn, finishBtn)
            task.appendChild(a)
            openTinProgressTasks.appendChild(task)
            
            deleteBtn.addEventListener('click', deleteTask)
            finishBtn.addEventListener('click', finishTask)

            function deleteTask(ev){
                ev.target.parentNode.parentNode.remove()
            }

            function finishTask(ev){
                const task = ev.target.parentNode.parentNode
                ev.target.parentNode.remove()
                completeTasks.appendChild(task)

            }



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