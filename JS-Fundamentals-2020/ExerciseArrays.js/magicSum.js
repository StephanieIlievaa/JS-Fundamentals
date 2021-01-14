function magicSum(array, magicNumber) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        for (let j = 0; j < array.length; j++) {


            let nextElement = array[j];
            let isMagic = (currentElement + nextElement) === magicNumber;
            let possibleSequence = `${currentElement} ${nextElement}`;

            if ((j !== i) && (isMagic) && (!result.includes(`${nextElement} ${currentElement}`))) {
                result.push(possibleSequence);
                isMagic = false;
            }
        }
    }
    console.log(result.join('\n'));
}
magicSum(
    [1, 7, 6, 2, 19, 23],
    8
);