function myModule(a, b) {
    return a + b;
}

function product(a, b){
    return a * b
}

const data = [1, 2, 3]

function printArray(){
    console.log(data)
}

// console.log(myModule(5, 3));
module.exports = {
    sum: myModule,
    product,
    data,
    printArray
}