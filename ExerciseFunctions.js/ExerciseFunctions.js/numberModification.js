function numberModification(modifiedNum) {
   
    while (getAverage(modifiedNum) < 5) {
        modifiedNum += '9';
    }
   
    console.log(modifiedNum);

    function getSum(number) {
        let numToString = number.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        return sum;
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }
}
numberModification(101);