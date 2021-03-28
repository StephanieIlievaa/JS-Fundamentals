function solve(arr) {
    //concat first and second string
    //first vowel character replace with character from the third string - toUpperCase
    //reverse the new password
    //print output: `Your generated password is ${password}`

    let text = Array.from(arr[0] + arr[1]);
    let chars = Array.from(arr[2].toUpperCase());

    let password = [];

    for (let i = 0; i < text.length; i++) {
        if (/[aeiou]/.test(text[i])) {
            let extractedChar = chars.shift();
            chars.push(extractedChar);

            let getIndex = text.indexOf(text[i]);
            text[getIndex] = '';

            password.push(extractedChar)
        }
        password.push(text[i]);
    }
console.log(`Your generated password is ${password.reverse().join('')}`);
}
solve(['ilovepizza', 'ihatevegetables', 'orange']);