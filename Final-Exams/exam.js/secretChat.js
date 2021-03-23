function solve(input) {
    //Input
    let message = input.shift();


    //Calculation - switch command
    let line = input.shift();

    while (line != 'Reveal') {
        let [command, firstArgument, secondArgument] = line.split(':|:')
        let hasError = false;

        switch (command) {
            case 'InsertSpace':
                let index = Number(firstArgument);
                message = message.substring(0, index) + ' ' + message.substring(index);
                break;
            case 'Reverse':
                if (message.includes(firstArgument)) {
                    //slice
                    message = message.replace(firstArgument, '');
                    //reverse
                    let reversedSubstring = firstArgument.split('').reverse().join('');
                    //add to end
                    message += reversedSubstring;

                } else {
                    console.log('error');
                    hasError = true;
                }
                break;
            case 'ChangeAll':
                while (message.includes(firstArgument)) {
                    message = message.replace(firstArgument, secondArgument)
                }
                break;
        }
        if (!hasError) {
            console.log(message);
        }
        line = input.shift();
    }

    //Print output
    console.log(`You have a new text message: ${message} `);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);