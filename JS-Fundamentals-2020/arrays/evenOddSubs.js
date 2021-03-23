function sumEvenNumbers(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (const number of numbers) {
        if (number % 2 === 0) {
            evenSum += number;

        } else {
            oddSum += number;

        }
    }
    console.log(evenSum - oddSum);

}

sumEvenNumbers([1, 2, 3, 4, 5, 6]);