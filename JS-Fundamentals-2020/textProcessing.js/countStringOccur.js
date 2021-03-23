function solve(text, searchedWord) {
    
    //     let words = text.split(' ');
    //     let counter = 0;

    //     for (let word of words) {
    //         if (word === searchedWord) {
    //             counter++;
    //         }
    //     }
    //     console.log(counter);
    // }

    return text.split(' ')
        .filter(word => word === searchedWord)
        .length

}
console.log(solve('This is a word and it also is a sentence', 'is'));
