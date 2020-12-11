function factorial(firstNum, secondNumber) {

    result = factorial(firstNum) / factorial(secondNumber);
    console.log(result.toFixed(2));

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {

            factorial *= i;
        }
        return factorial;
    }

}

factorial(6, 2);

