function arrayRotation(arr, rot) {

    //  let newArr = arr.splice(0,rot);
    // let finalArr = arr.concat(newArr);
    //  console.log(finalArr.join(' '));


    let rotations = rot % arr.length;
    let resultArr = [];

    for (let index in arr) {

        if (index >= rotations) {
            let element = arr[index];
            resultArr.push(element);
        }
    }

    for (let index in arr) {

        if (index < rotations) {
            let element = arr[index];
            resultArr.push(element);
        } else {
            break;
        }

    }
    let resultStr = '';
    for (let index in resultArr) {
        let element = resultArr[index];
        if (index <= resultArr.length - 1) {
            resultStr += `${element} `;
        } else {
            resultStr += `${element}`;
        }
    }
    console.log(resultStr);
}
arrayRotation(
    [2, 4, 15, 31],
    5
);