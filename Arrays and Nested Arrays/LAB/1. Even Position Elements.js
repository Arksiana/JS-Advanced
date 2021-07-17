function solve(elements){
    let result;
    elements.forEach(function(item, index) {
        if(index % 2 == 0){ 
            result += item
        }
      })
    return result

}


console.log(solve(['20', '30', '40', '50', '60']))