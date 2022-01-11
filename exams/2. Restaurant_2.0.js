class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney)
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(products){
        for(const p of products){
            let [name, quantity, price] = p.split(' ')
            if(this.budgetMoney >= price){
                if(name in this.stockProducts){
                    this.stockProducts[name] += quantity
                } else {
                    this.stockProducts[name] = quantity
                }
                this.budgetMoney -= price
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        }
        return this.history.join('\n')
    }
    addToMenu(meal, neededProducts, price) {
        if (meal in this.menu) {
            return `The ${meal} is already in the our menu, try something different.`
        }
        this.menu[meal] = {
            products: [],
            price: price
        }

        for (const el of neededProducts) {
            const [pName, pQuantity] = el.split(' ')
            this.menu[meal].products.push({
                productName: pName,
                productQuantity: pQuantity
            })
        }
        if (Object.keys(this.menu).length === 1) {
            return (`Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`)
        } else {
            return (`Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`)
        }
    }
    showTheMenu() {
        if(Object.keys(this.menu).length === 0){
            return "Our menu is not ready yet, please come later..."
        }
        let result = []
        for(const m in this.menu){
            result.push(`${m} - $ ${this.menu[m].price}`)
        }
        return result.join('\n')
    }

    makeTheOrder(searchMeal){
        // let hasAll = false
        if(!searchMeal in this.menu){
            return `There is not ${searchMeal} yet in our menu, do you want to order something else?`
        }

        const productKeys = Object.keys(this.stockProducts)
        // console.log(productKeys)
        if(this.menu[searchMeal].products.some((p) => productKeys.includes(p) === true)){
            return `For the time being, we cannot complete your order (${searchMeal}), we are very sorry...`
        }
        for(const el in this.stockProducts){
            for (const m of this.menu[searchMeal].products){
                if(el === m){
                    this.stockProducts[el].quantity -= 1
                }
            }
        }
        this.budgetMoney += this.menu[searchMeal].price
        // this.stockProducts[name] -= quantity
        return `Your order (${searchMeal}) will be completed in the next 30 minutes and will cost you ${this.menu[searchMeal].price}.`

        //
        // if(hasAll){
        //     return `Your order (${searchMeal}) will be completed in the next 30 minutes and will cost you ${this.menu[searchMeal].price}.`
        // }
        // return `For the time being, we cannot complete your order (${searchMeal}), we are very sorry...`

        // const curr = productsList.some((p) => this.products.includes(p) === false
    }

}
//
//
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// // let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());
// console.log(kitchen.makeTheOrder('frozenYogurt'));
