function solve(s) {
    return s.match(/\w+/g).join(", ").toLocaleUpperCase()
}


console.log(solve('Hi, how are you?'))