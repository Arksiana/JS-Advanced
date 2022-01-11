class Parking{
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber){
        if(this.capacity <= 0){
            throw new Error("Not enough parking space.")
        }
        const toAdd = {
            carModel: carModel,
            carNumber: carNumber,
            payed: false
        }
        this.vehicles.push(toAdd)
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber){
        const findCar = this.vehicles.find(x => x.carNumber === carNumber)
        if(!findCar){
            throw new Error("The car, you're looking for, is not found.")
        }
        if(findCar.payed === false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }

        let ind = this.vehicles.indexOf(findCar)
        this.vehicles.splice(ind)
        return `${carNumber} left the parking lot.`
    }
    pay(carNumber){
        const findCar = this.vehicles.find(x => x.carNumber === carNumber)
        if(!findCar){
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if(findCar.payed === true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        findCar.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber){
        if(carNumber !== undefined){
            const findCar = this.vehicles.find(x => x.carNumber === carNumber)
            return `${findCar.carModel} == ${carNumber} - ${findCar.payed ? "Has payed" : "Not payed"}`
        }
        let result = []
        result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`)
        this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
        for(const car of this.vehicles){
            result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : "Not payed"}`)
        }
        return result.join("\n")


    }
}

//
// const parking = new Parking(12);
//
// console.log(parking.addCar("Volvo t600", "TX3691CA"));
// console.log(parking.getStatistics());
//
// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX3691CA"));
