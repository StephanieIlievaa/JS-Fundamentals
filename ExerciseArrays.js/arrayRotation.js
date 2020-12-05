function arrayRotation(arr, rot) {

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
    [51, 47, 32, 61, 21],
    2
);