function solve(n) {
    let sum = 0;
    for (let current = 1; current <= Number.MAX_SAFE_INTEGER; current += 2) {
        if (n === 0) {
            break;
        }


        console.log(current);
        sum += current;
        n--;
    }
    console.log(`Sum: ${sum}`);
}
solve(5);