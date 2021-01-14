function processOddNumbers(array) {


    
    let newArray = array.filter(n => n % 2 != 0)
        .map(n => n * 2)
        .reverse();



    console.log(newArray.join(" "));


}
processOddNumbers([10, 15, 20, 25]);