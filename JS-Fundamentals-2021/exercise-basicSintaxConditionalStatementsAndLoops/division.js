function divisible(num) {
    let divisible = [10, 7, 6, 3, 2];
    for (j = 0; j <= 5; j++) {
        let d = divisible.shift();
        if (num % d === 0) {
            console.log(`The number is divisible by ${d}`);
            break;

        } else if (j === 5) {
            console.log('Not divisible');

        }
    }
}
divisible(1643);