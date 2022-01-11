class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.idTransaction = 0
    }

    newCustomer(customer) {
        const findCustomer = this.allCustomers.find(c => c.firstName === customer.firstName && c.lastName === customer.lastName);
        if (findCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer)
        return (customer)
    }

    depositMoney(personalId, amount) {
        const findCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if (!findCustomer) {
            throw new Error('We have no customer with this ID!')
        }
        if (findCustomer.totalMoney === undefined) {
            findCustomer.totalMoney = amount
        } else {
            findCustomer.totalMoney += amount
        }
        if (findCustomer.transactions === undefined) {
            findCustomer.transactions = []
        }
        findCustomer.transactions.unshift(
            `${findCustomer.firstName} ${findCustomer.lastName} made deposit of ${amount}$!`
        )
        // findCustomer.totalMoney = amount
        return `${findCustomer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        const findCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if (!findCustomer) {
            throw new Error('We have no customer with this ID!')
        }
        if (findCustomer.totalMoney < amount) {
            throw new Error(`${findCustomer.firstName} ${findCustomer.lastName} does not have enough money to withdraw that amount!`)
        }
        findCustomer.totalMoney -= amount
        if (findCustomer.transactions === undefined) {
            findCustomer.transactions = []
        }
        findCustomer.transactions.unshift(
            `${findCustomer.firstName} ${findCustomer.lastName} withdrew ${amount}$!`
        )
        // findCustomer.totalMoney = amount
        return `${findCustomer.totalMoney}$`
    }

    customerInfo(personalId) {
        const findCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if (!findCustomer) {
            throw new Error('We have no customer with this ID!')
        }
        let result = []
        result.push(`Bank name: ${this._bankName}`)
        result.push(`Customer name: ${findCustomer.firstName} ${findCustomer.lastName}`)
        result.push(`Customer ID: ${personalId}`)
        result.push(`Total Money: ${findCustomer.totalMoney}$`)
        result.push('Transactions:')
        for (let i = 0; i < findCustomer.transactions.length; i++) {
            result.push(`${findCustomer.transactions.length - i}. ` + `${findCustomer.transactions[i]}`)
        }
        return result.join('\n')
    }
}

// let bank = new Bank('SoftUni Bank');
//
// console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
// console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
//
// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);
//
// console.log(bank.withdrawMoney(6233267, 125));
//
// console.log(bank.customerInfo(6233267));
// let bank = new Bank('SoftUni Bank');
//
// console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 3333333 }));
//
// bank.depositMoney(1111111, 250);
// console.log(bank.depositMoney(1111111, 250));
// bank.depositMoney(3333333, 555);
//
// console.log(bank.withdrawMoney(1111111, 125));
//
// console.log(bank.customerInfo(1111111));
