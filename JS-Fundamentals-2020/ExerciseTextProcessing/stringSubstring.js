function solve(word, text) {

    let wordLowerCase = word.toLowerCase();
    
    text = text.toLowerCase();

    if (text.split(' ').includes(wordLowerCase)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
solve('java',
    'JavaScript is the best programming language');