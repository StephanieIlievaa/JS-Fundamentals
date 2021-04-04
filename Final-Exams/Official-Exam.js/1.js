function solve(input) {
    //At any time the message will contain at least one char.
    //Indexes in range
    //On every command -> print OUTPUT
    //To check commands for indexes that are invalid -> print "Invalid indices!"

    let message = input.shift();
    let secInput = input.splice(0, input.indexOf('Finish'));


    for (let line of secInput) {
        let [command, firstValue, secondValue] = line.split(' ');

        switch (command) {
            case 'Replace':
                let currentChar = firstValue;
                let newChar = secondValue;

                while (message.includes(currentChar)) {
                    message = message.replace(currentChar, newChar);
                }
                console.log(message);
                break;

            case "Cut":
                let startIndex = Number(firstValue);
                let endIndex = Number(secondValue);
                if (startIndex < message.length && startIndex > -1 && endIndex < message.length && endIndex > -1) {
                    let cutted = message.substring(startIndex, endIndex + 1);
                    message = message.replace(cutted, '');
                    console.log(message);
                } else {
                    console.log('Invalid indices!');
                }
                break;

            case "Make":
                if (firstValue === "Upper") {
                    message = message.toUpperCase();
                    console.log(message);
                } else {
                    message = message.toLowerCase();
                    console.log(message);
                }
                break;
            case "Check":
                if (message.includes(firstValue)) {
                    console.log(`Message contains ${firstValue}`);
                } else {
                    console.log(`Message doesn't contain ${firstValue}`);
                }

                break;
            case "Sum":
                let firstIndex = Number(firstValue);
                let endingIndex = Number(secondValue);
                if (firstIndex < message.length && firstIndex > -1 && endingIndex < message.length && endingIndex > -1) {

                    let subst = message.substring(firstIndex, endingIndex + 1)
                    let sum = 0;
                    for (i = 0; i < subst.length; i++) {
                        sum += subst.charCodeAt(i);
                    }
                    console.log(sum);
                } else {
                    console.log('Invalid indices!');
                }

                break;
        }
    }
}
solve((["ILikeSharan",
    "Replace a e",
    "Make Upper",
    "Check SHEREN",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])
);



