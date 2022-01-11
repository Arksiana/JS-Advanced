function solve() {
    const lectureNameField = document.querySelector('input[type="text"][name="lecture-name"]')
    const lectureDateField = document.querySelector('input[type="datetime-local"][name="lecture-date"]')
    const lectureModuleField = document.querySelector('select[name="lecture-module"]')
    const addButton = document.querySelector('button')
    
    addButton.addEventListener('click', addLecture)

    

    function addLecture(event) {
        event.preventDefault()
        const formDate = new FormData(event.target)
        // const name = formDate.get("lecture-date")
        console.log(formDate)
        const date = lectureDateField.value
        const module = lectureModuleField.value
    
        // console.log(date)
        // console.log(date)
        // if (name == '' || name == ) {
            
        // }

    }


};