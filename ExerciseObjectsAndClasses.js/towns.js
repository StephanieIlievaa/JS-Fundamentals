function solve(input) {

    // First - get every line of the input and split - (" | ");
    // Second -  construct object;
    //Third - format to the second decimal point;

    input.forEach(line => {
        const tokens = line.split(" | ");
        const town = {
            town: tokens[0],
            latitude: Number(tokens[1]).toFixed(2),
            longitude: Number(tokens[2]).toFixed(2)
        }
        console.log(town)
    });

}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);