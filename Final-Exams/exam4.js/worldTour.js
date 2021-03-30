function solve(input) {
    let tour = input.shift();
    let line = input.shift()

    while (line != 'Travel') {
        let [command, ...rest] = line.split(':');
        switch (command.trim()) {
            case 'Add Stop':
                let index = Number(rest[0]);
                let string = rest[1];
                if (index >= 0 && index <= tour.length) {
                    tour = tour.split('');
                    tour.splice(index, 0, string);
                    tour = tour.join('')
                }
                break;
            case 'Remove Stop':
                let startIndex = Number(rest[0]);
                let endIndex = Number(rest[1]);
                if (startIndex >= 0 && startIndex < tour.length && endIndex >= 0 && endIndex < tour.length && startIndex <= endIndex) {
                    tour = tour.split('');
                    tour.splice(startIndex, endIndex - startIndex + 1);
                    tour = tour.join('');

                }
                break;
            case 'Switch':
                let oldStr = rest[0];
                let newStr = rest[1];
                let regex = new RegExp(oldStr, 'g');
                tour = tour.replace(regex, newStr);
                break;
                default:
                    break;
        }
        console.log(tour);
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}
solve(['Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);