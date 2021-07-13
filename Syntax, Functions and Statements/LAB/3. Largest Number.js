function solve(a, b, c){
    let arr = [a, b, c];
    console.log('The largest number is', Math.max.apply(null, arr) + '.')

}

solve(5, -3, 16)
solve(-3, -5, -22.5)