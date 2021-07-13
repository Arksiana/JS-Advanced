// function solve(arg1, arg2, arg3){
//     let total = arg1.length + arg2.length + arg3.length;

//     console.log(total);
//     console.log(Math.floor(total / 3));
// }



function solve(...args){
    let total = args.reduce((a, c) => a + c.length, 0);
    console.log(total);
    console.log(Math.floor(total / args.length));

}

solve('chocolate', 'ice cream', 'cake')
solve('pasta', '5', '22.3')