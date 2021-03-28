function solve(input) {
    let password = input.shift();
    let line = input.shift();

    while (line != 'Done') {
        let [command, firstArgument, secondArgument] = line.split(' ')
        
        switch (command) {
            case 'TakeOdd':
               let tempPassword = '';

                for (let i = 1; i < password.length; i += 2) {
                    tempPassword += password[i]
                }
                console.log(tempPassword);
                password = tempPassword;

                break;
            case 'Cut':
                firstArgument = Number(firstArgument); //index
                secondArgument = Number(secondArgument); //length
                let substring = password.substring(firstArgument, firstArgument + secondArgument);
                password = password.replace(substring, '');
                console.log(password);
                break;
            case 'Substitute':
                //firstArgument = substring
                //secondArgument = substitute
                let temporaryPassword = password;

                while (temporaryPassword.includes(firstArgument)) {
                    temporaryPassword = temporaryPassword.replace(firstArgument, secondArgument);
                }
                if (password.includes(firstArgument)) {
                    console.log(temporaryPassword);
                } else {
                    console.log('Nothing to replace!');
                }
                password = temporaryPassword;
                break;
        }
        line = input.shift();
    }

    console.log(`Your password is: ${password}`);
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done']);