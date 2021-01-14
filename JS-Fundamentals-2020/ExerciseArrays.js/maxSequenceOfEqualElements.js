function maxSequenceOfEqualElements(arr) {

    let bestSequence = [];

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        let currentSequence = [element];

        for (let i = index + 1; i < arr.length; i++) {
            let nextElement = arr[i];
            index = i;

            if (element === nextElement) {
                currentSequence.push(nextElement);
                index = i;
            } else {
                break;
            }

        }
        if (currentSequence.length > bestSequence) {
            bestSequence = currentSequence;
        }

    }
    console.log(bestSequence.join(' '));
}
maxSequenceOfEqualElements(
    [4, 4, 4, 4]
);