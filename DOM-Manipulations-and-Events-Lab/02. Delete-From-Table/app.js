// function deleteByEmail() {
//     // select input field and read value
//     const input = document.querySelector('input[name="email"]')
//
//
//     // get tbody children
//     const rows = [...document.querySelector('tbody').children];
//     // FOR JUDGE
//     // const rows = Array.from(document.querySelector('tbody').children)
//     let removed = false
//     // repeat for every row
//     //--select second cell
//     //--if textContent matches input value -> remove row
//     for (let row of rows){
//         if (row.children[1].textContent === input.value){
//             row.remove()
//             removed = true;
//         }
//     }
//     // if there is a match print 'Deleted'
//     // otherwise, print 'Not Found'
//     if(removed){
//         document.getElementById('result').textContent = 'Deleted'
//     } else {
//         document.getElementById('result').textContent = 'Not Found';
//     }
//
//     input.value = ''
// }


//OPTIMIZATION

function deleteByEmail() {
    // select input field and read value
    const input = document.querySelector('input[name="email"]')


    // get tbody children
    // const rows = [...document.querySelector('tbody').children];
    // FOR JUDGE
    const rows = Array.from(document.querySelector('tbody').children)
        .filter(r => r.children[1].textContent === input.value)

    // repeat for every row
    //--select second cell
    //--if textContent matches input value -> remove row
    for (let row of rows){
        row.remove()
    }
    // if there is a match print 'Deleted'
    // otherwise, print 'Not Found'
    if(rows.length > 0){
        document.getElementById('result').textContent = 'Deleted'
    } else {
        document.getElementById('result').textContent = 'Not Found';
    }

    input.value = ''
}

