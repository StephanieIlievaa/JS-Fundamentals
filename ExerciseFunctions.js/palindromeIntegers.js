function palindromeIntegers(arr) {

    for (let number of arr) {
        let reversedNumber = reverseNumber(number);
        console.log(number === reversedNumber);
    }

    function reverseNumber(number) {
        let reversedValue = '';

        while (number > 0) {
            let lastDigit = number % 10;
            reversedValue += lastDigit;
            number = parseInt((number / 10));
        }
        return Number(reversedValue);

    }
}
palindromeIntegers([123, 323, 421, 121]);