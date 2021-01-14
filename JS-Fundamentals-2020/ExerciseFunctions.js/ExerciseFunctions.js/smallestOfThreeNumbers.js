function getSmallestNumberOfThree(firstNumber, secondNumber, thirdNumber) {
    
    if (firstNumber < secondNumber && firstNumber < thirdNumber) {
        console.log(firstNumber);

    } else if ((secondNumber < thirdNumber)) {
        console.log(secondNumber);

    } else {
        console.log(thirdNumber);
    }
}
getSmallestNumberOfThree(2, 5, 3);