function stringRepeater(text, count) {

    let result = '';

    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;

}
let result = stringRepeater('abc', 3);
console.log(result);
