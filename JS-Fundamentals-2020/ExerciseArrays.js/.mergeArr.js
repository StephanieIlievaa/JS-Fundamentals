function mergeArrays(arrOne, arrTwo) {
    let resultArr = [];


for (let index in arrOne) {

    let result;
let arrOneElement = arrOne[index];
let arrTwoElement = arrTwo[index];

    if (index % 2 === 0) {
        result = (Number(arrOneElement) + Number(arrTwoElement)) + '';

    } else {
        result = arrOneElement  + arrTwoElement ;
    }

        resultArr.push(result);
    }
    console.log(resultArr.join(' - '));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']

);