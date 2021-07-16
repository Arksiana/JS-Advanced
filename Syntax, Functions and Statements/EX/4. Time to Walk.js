function timeToWalk(steps, metersPerStep, speed){
    let distance = steps * metersPerStep
    const decimalTime = distance / 1000 / speed
    const n = new Date(0, 0)
    n.setSeconds(decimalTime * 60 * 60 + 1)
    n.setMinutes(n.getMinutes() + Math.floor(distance / 500))

    return n.toTimeString().slice(0, 8)
}

console.log(timeToWalk(4000, 0.60, 5))