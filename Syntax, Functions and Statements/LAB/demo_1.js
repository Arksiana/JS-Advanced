// 1
// functions declaration
function printStart(count){
    return '*'.repeat(count)
    // console.log('*'.repeat(count));
}

console.log(printStart(5))

// 2
// antonym function, function expression
const walk = function(){
    console.log("walking");
}
walk()

// // 3
// // arrow functions
// const walk = () => {
//     console.log("walking");
// }

// walk()