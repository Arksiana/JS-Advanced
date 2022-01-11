function sumTable() {
    const rows = document.querySelectorAll('table tr')
    let result = 0
    for (let i = 1; i < rows.length; i++) {
        result += Number(rows[i].lastElementChild.textContent)
    }
    document.getElementById('sum').textContent = result
}