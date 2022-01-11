function solve() {

    const text = document.getElementById('text').value
    const namingConvention = document.getElementById('naming-convention').value

    let result = ''
    const nn = text.toLowerCase()
    const words = nn.split(' ')
    switch (namingConvention) {
        case 'Camel Case':
            // let res = []
            result += words[0]
            for(let i = 1; i < words.length; i++){
                result += words[i].slice(0, 1).toUpperCase() + words[i].slice(1, words[i].length)
            }
             break
        case 'Pascal Case':
            for(let i = 0; i < words.length; i++){
                result += words[i].slice(0, 1).toUpperCase() + words[i].slice(1, words[i].length)
            }
            break
        default:
            result = 'Error!'


    }

    document.getElementById('result').textContent = result
}