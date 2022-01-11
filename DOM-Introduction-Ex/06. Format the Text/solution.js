function solve() {
    const text = document.getElementById('input').value
    const splintedText = text.split('.').filter((el) => el !== '')
    const output = document.getElementById('output')
    let finalString = ''
    let result = '<p>'
    let counter = 0
    for (let i = 0; i < splintedText.length; i++){
        if (i % 3 === 0){
            result += result + '</p>'
            finalString += result
            result = '<p>'

        }
        result += splintedText[i] + '.'
        counter++

    }
    // console.log(splintedText)
    output.innerHTML = finalString
}