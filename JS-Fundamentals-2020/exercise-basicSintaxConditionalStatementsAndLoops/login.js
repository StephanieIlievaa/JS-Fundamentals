function login(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('');

    let failCounter = 0;
    let currentPass = input.shift();

    while (currentPass !== password && failCounter < 3) {
        failCounter++;
        console.log('Incorrect password. Try again.');
        currentPass = input.shift();

    }
    if(currentPass === password) {
        console.log(`User ${username} logged in.`);
    } else {
        console.log(`User ${username} blocked!`);
    }

}
login(['momo', 'omom']);