class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants = []
    }

    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp.hasOwnProperty(condition)){
            throw new Error("Unsuccessful registration at the camp.")
        }
        let foundName = this.listOfParticipants.find( x => x.name === name)
        if(foundName !== undefined){
            return `The ${name} is already registered at the camp.`
        }
        if(this.priceForTheCamp[condition] > money){
            return `The money is not enough to pay the stay at the camp.`
        }

        let toAdd = {name,
            condition,
            power:100,
            wins: 0}

        this.listOfParticipants.push(toAdd)
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant (name){
        let foundName = this.listOfParticipants.find( x => x.name === name)
        if(foundName === undefined){
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        let ind = this.listOfParticipants.indexOf(foundName)
        this.listOfParticipants.splice(ind)
        return `The ${name} removed successfully.`
    }

    timeToPlay (typeOfGame, participant1, participant2){
        if(typeOfGame === 'Battleship' ){
            let findPlayer1 = this.listOfParticipants.find( x => x.name === participant1)
            if(findPlayer1 === undefined){
                throw new Error(`Invalid entered name/s.`)
            }
            findPlayer1.power += 20
            return `The ${findPlayer1.name} successfully completed the game ${typeOfGame}.`
        }

        if(typeOfGame === 'WaterBalloonFights'){
            let findPlayer1 = this.listOfParticipants.find( x => x.name === participant1)
            let findPlayer2 = this.listOfParticipants.find( x => x.name === participant2)

            if(findPlayer1 === undefined || findPlayer2 === undefined){
                throw new Error(`Invalid entered name/s.`)
            }

            if(findPlayer1.condition !== findPlayer2.condition){
                throw new Error(`Choose players with equal condition.`)
            }
            let winner = ''

            if(findPlayer1.power > findPlayer2.power){
                findPlayer1.wins += 1
                winner = findPlayer1.name
            } else if (findPlayer1.power < findPlayer2.power) {
                winner = findPlayer2.name
                findPlayer2.wins += 1
            }

            if(winner !== ''){
                return `The ${winner} is winner in the game ${typeOfGame}.`
            }
            return `There is no winner.`
        }

    }
    toString (){
        let result = []
        result.push(`${this.organizer} will take ${Object.keys(this.listOfParticipants).length} participants on camping to ${this.location}`)
        this.listOfParticipants.sort((a, b) => a.wins > b.wins ? -1 : 1)
        for(const player of this.listOfParticipants){
            result.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`)
        }
        return result.join('\n')
    }

}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
//
//
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// console.log(summerCamp.toString());
// console.log(summerCamp.unregisterParticipant('Petar Petarson', 'student', 300))