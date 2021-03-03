function reverseArray(n, arr) {

    let reversedArr = [];
    let finalArr = [];
    for (let i = 0; i < n; i++) {
       reversedArr.push(arr[i]);
    }
    for (let j = reversedArr.length - 1; j >= 0; j--) {
       finalArr.push(reversedArr[j]);
    }
    console.log(finalArr.join(' '));
 }
 reverseArray(3, [10, 20, 30, 40, 50]);