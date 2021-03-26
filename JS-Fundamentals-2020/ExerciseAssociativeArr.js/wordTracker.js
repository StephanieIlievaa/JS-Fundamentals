function solve(arr) {
    let words = arr.shift().split(' ');
    let counter = {};

    words.forEach(word => counter[word] = 0);
    arr.forEach(word => word in counter && counter[word]++);
    words.sort((a, b) => counter[b] - counter[a]);
    words.forEach(word => console.log(`${word} - ${counter[word]}`));
}
solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'becaus e', 'this', 'is', 'your', 'task']);