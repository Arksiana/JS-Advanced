// class Restaurant {
//     constructor(budgetMoney, menu, stockProduct, history) {
//         this.budgetMoney = budgetMoney
//         this.menu = Object()
//         this.stockProduct = Object()
//         this.history = []
//     }
//
//     loadProducts(arr) {
//         for (const arg of arr) {
//             let [name, quantity, totalPrice] = arg.split(' ')
//             Number(totalPrice)
//             Number(quantity)
//             if (totalPrice <= this.budgetMoney) {
//                 if (this.stockProduct.hasOwnProperty(name)) {
//                     this.stockProduct[name] += quantity
//                 } else {
//                     this.stockProduct[name] = quantity
//                 }
//                 this.budgetMoney -= totalPrice
//                 this.history.push(`Successfully loaded ${quantity} ${name}`)
//             } else {
//                 this.history.push(`There was not enough money to load ${quantity} ${name}`)
//             }
//         }
//         return this.history.join('\n')
//     }
//
//     addToMenu(meal, neededProducts, price) {
//         if (!this.menu.hasOwnProperty(meal)) {
//             this.menu[meal] = {
//                 products: [],
//                 price: price
//             }
//             for (const arg of neededProducts) {
//                 let mealToAdd = {
//                     pName: arg.split(' ')[0],
//                     pQuantity: Number(arg.split(' ')[1]),
//                 }
//
//                 this.menu[meal]['products'].push(mealToAdd)
//                 // console.log(this.menu[meal])
//             }
//             if(Object.keys(this.menu).length === 1){
//                 return (`Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`)
//             } else {
//                 return(`Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`)
//             }
//         }
//         return (`The ${meal} is already in the our menu, try something different.`)
//
//     }
//     showTheMenu(){
//         if(Object.keys(this.menu).length === 0){
//             return("Our menu is not ready yet, please come later...")
//         } else {
//             let result = []
//             for (const el in this.menu){
//                 result.push(`${el} - $ ${this.menu[el]['price']}`)
//             }
//             return result.join('\n')
//         }
//
//     }
//
//     makeTheOrder(meal){
//         let weHaveAllProducts = false
//         if(!this.menu.hasOwnProperty(meal)){
//             return(`There is not ${meal} yet in our menu, do you want to order something else?`)
//         } else {
//             for(const p of this.menu[meal].products){
//                 weHaveAllProducts = !!this.stockProduct[p.pName];
//             }
//         }
//
//         if(weHaveAllProducts === true){
//             return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
//         } else {
//             return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
//         }
//
//     }
// }



class Restaurant {
    constructor(budgetMoney, menu, stockProduct, history) {
        this.budgetMoney = Number(budgetMoney)
        this.stockProduct = {}
        this.history = []
        this.menu = {}
    }

    loadProducts(arr) {
        for (const arg of arr) {
            let [name, quantity, totalPrice] = arg.split(' ')
            Number(totalPrice)
            Number(quantity)
            if (totalPrice <= this.budgetMoney) {
                if (this.stockProduct.hasOwnProperty(name)) {
                    this.stockProduct[name] += quantity
                } else {
                    this.stockProduct[name] = quantity
                }
                this.budgetMoney -= totalPrice
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        }
        return this.history.join('\n')
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products: [],
                price: price
            }
            for (const arg of neededProducts) {
                let mealToAdd = {
                    pName: arg.split(' ')[0],
                    pQuantity: Number(arg.split(' ')[1]),
                }

                this.menu[meal]['products'].push(mealToAdd)
                // console.log(this.menu[meal])
            }
            if(Object.keys(this.menu).length === 1){
                return (`Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`)
            } else {
                return(`Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`)
            }
        }
        return (`The ${meal} is already in the our menu, try something different.`)

    }
    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return("Our menu is not ready yet, please come later...")
        } else {
            let result = []
            for (const el in this.menu){
                result.push(`${el} - $ ${this.menu[el]['price']}`)
            }
            return result.join('\n')
        }

    }

    makeTheOrder(meal){
        let weHaveAllProducts = false
        if(!this.menu.hasOwnProperty(meal)){
            return(`There is not ${meal} yet in our menu, do you want to order something else?`)
        } else {
            for(const p of this.menu[meal].products){
                weHaveAllProducts = !!this.stockProduct[p.pName];
            }
        }

        if(weHaveAllProducts === true){
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        } else {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }

    }
}