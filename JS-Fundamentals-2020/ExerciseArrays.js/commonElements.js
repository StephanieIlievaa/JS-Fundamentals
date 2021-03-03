function elements(arr1, arr2) {
    let firstArray = arr1;
    let secondArray = arr2;

    for (const el1 of firstArray) {
        for (const el2 of secondArray) {
            if (el1 === el2) {
                console.log(el1);
            }
        }
    }
}

elements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);