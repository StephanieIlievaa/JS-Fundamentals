function lift(input) {
    //Input
    let people = Number(input.shift());
    let wagons = input.shift().split(' ');

    let wagonSeatsCount = 0;

    //Loop
    for (i = 0; i < wagons.length; i++) {

        let currentWagon = Number(wagons[i]);
        if (currentWagon < 4) {
            if (people >= 4) {
                if (currentWagon != 0) {
                    people -= (4 - currentWagon);
                    currentWagon = 4;
                    wagons[i] = currentWagon;
                    emptySeats = false;

                } else {
                    currentWagon = 4;
                    people -= currentWagon;
                    wagons[i] = currentWagon;
                }
            } else {
                currentWagon += people;
                people = 0;
                wagons[i] = currentWagon;
                emptySeats = true;
            }
        }
    }
    //Print output
    if(people != 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(' '));

    } else {
        for (let wagon of wagons) {
            if (wagon === 4) {
                wagonSeatsCount++;
            }
        }
        if (wagonSeatsCount != wagons.length) {
            console.log("The lift has empty spots!");
            console.log(`${wagons.join(' ')}`);
        } else {
            console.log(`${wagons.join(' ')}`)
        }
    }
}
lift([
    "15",
    "0 0 0 0 0"
]
);