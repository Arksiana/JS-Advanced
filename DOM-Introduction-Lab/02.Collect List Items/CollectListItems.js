function extractText() {
    const items = document.getElementById('items').children
    const result = [...items].map((item) => item.textContent).join('\n')

    document.getElementById('result').textContent = result

}