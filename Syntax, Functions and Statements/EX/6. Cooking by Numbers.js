function solve(num, ...args){
    let number = Number(num)
    let commands = args
    for (let index = 0; index < commands.length; index++) {
        const element = commands[index];
        switch (element){
            case 'chop':
                number /= 2; break
            case 'dice':
                number = Math.sqrt(number); break
            case 'spice':
                number += 1; break;
            case 'bake':
                number *= 3; break
            case 'fillet':
                number -= number * 0.20
        }
        console.log(number)
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')