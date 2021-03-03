function solve(numbers) {
    let condensed = [];

    while (numbers.length > 1) {
        for (let index = 0; index < numbers.length - 1; index++) {
            currentEl = numbers[index];
            nextEl = numbers[index + 1]
            condensed.push(currentEl + nextEl);
        }
        numbers = condensed;
        condensed = [];
    }
    console.log(numbers[0]);
}
solve([2, 10, 3])