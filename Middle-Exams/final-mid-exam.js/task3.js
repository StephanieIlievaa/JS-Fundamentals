function tomItems(array, entryPoint, cmd) {
    let entryPointItem = array[entryPoint];
    let start = array.slice(0, entryPoint);
    let end = array.slice(entryPoint + 1);
    let leftSum;
    let rightSum;

    if (cmd === 'cheap') {
        leftSum = start.filter(item => item < entryPointItem).reduce((acc, value) => acc + value, 0);
        rightSum = end.filter(item => item < entryPointItem).reduce((acc, value) => acc + value, 0);
    } else {
        leftSum = start.filter(item => item >= entryPointItem).reduce((acc,value) => acc + value, 0);
        rightSum = end.filter(item => item >= entryPointItem).reduce((acc, value) => acc + value, 0);
    }

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`)
    } else {
        console.log(`Right - ${rightSum}`)
    }
}