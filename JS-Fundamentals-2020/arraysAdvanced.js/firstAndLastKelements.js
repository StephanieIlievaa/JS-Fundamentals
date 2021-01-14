function solve(input) {
    let k = input.shift();

    let firstElements = input.slice(0, k);
    let lastElements = input.slice(input.length - k);


    let firstResult = '';
    let lastResult = '';
    for (let i = 0; i < k; i++) {
        firstResult += ` ${firstElements[i]}`;
        lastResult += ` ${lastElements[i]}`;
    }

    console.log(firstResult);
    console.log(lastResult);

}

solve([2, 7, 8, 9]);