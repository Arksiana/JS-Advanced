class ChristmasDinner{
    constructor(budget) {
        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = {}
    }
    set budget(value) {
        if (value < 0) {
            throw Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping(product){
        const typeProduct = product[0]
        const priceProduct = Number(product[1])
        if(priceProduct < this.budget){
            this.budget -= priceProduct
            this.products.push(typeProduct)
            return `You have successfully bought ${typeProduct}!`
        }
        throw new Error( "Not enough money to buy this product")
    }
    recipes({ recipeName, productsList }) {
        if (productsList.some((p) => this.products.includes(p) === false)) {
            throw new Error("We do not have this product");
        }
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish){

        if(this.guests.hasOwnProperty(name)){
            throw new Error("This guest has already been invited")
        }
        if(!this.dishes.some(x => x.recipeName === dish)){
            throw new Error("We do not have this dish")
        }

        this.guests[name] = dish
        // console.log(this.guests)
        return `You have successfully invited ${name}!`
    }
    showAttendance(){
        let result = []
        for(const el in this.guests){
            const currentProducts = this.dishes.find(d => d.recipeName === this.guests[el]).productsList.join(', ')
            result.push(`${el} will eat ${this.guests[el]}, which consists of ${currentProducts}`)
        }
        return result.join("\n")
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
