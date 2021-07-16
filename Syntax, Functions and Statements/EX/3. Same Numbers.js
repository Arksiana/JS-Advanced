function sameNumbers(number) {
    let string = number.toString();
    // let currentNum = a[0];
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < string.length; i++) {
        let current = Number(string[i])
        let next = string[i + 1];
        if (string[i] !== string[i + 1] && next !== undefined){
            isSame = false;
        }

        sum += current;
    }

    return `${isSame}\n${sum}`;
    }


// console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));
