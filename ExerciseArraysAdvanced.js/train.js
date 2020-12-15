function trainWagons(input) {

    let copy = input.slice();
    let train = copy[0].split(' ').map(makeMeNumber);
    let maxCapacity = Number(copy[1]); // for each wagon in the train.

    let commands = copy.slice(2);

    for (let command of commands) {
        let commandInfo = command.split(' ');

        if (commandInfo.length === 2) {
            let wagon = Number(commandInfo[1]);
            train.push(wagon);
        } else {
            let passengers = Number(commandInfo[0]);

            for (let wagon in train) {
                let currentPassengers = train[wagon];

                if ((passengers + currentPassengers) <= maxCapacity) {
                    train[wagon] += passengers;
                    break;
                }
            }
        }
    }


    console.log(train.join(' '));








    function makeMeNumber(element) {

        return Number(element)
    }

}

trainWagons([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);