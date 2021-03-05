
function printElement(arr) {

    let lastNumber = arr.pop();
    let resultArray = [];
    for (let index in arr) {
        if (index % lastNumber === 0) {
            resultArray.push(arr[index]);
        }
    }
    console.log(resultArray.join(' '));
}
printElement(['5', '20', '31', '4', '20', '2']);