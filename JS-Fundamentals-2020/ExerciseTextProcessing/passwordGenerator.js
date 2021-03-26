function solve(input) {
//concat first and second string
//every first vowel replace with vowel from the third string - toUpperCase
//reverse the new password
//print output: `Your generated password is ${password}`
let firstString = input.shift();
let secondString = input.shift();
let thirdString = input.shift()

newString = firstString.concat(secondString);
console.log(newString);
for(let char of newString) {
    newString.replace(char, thirdString[] )
}
console.log(newString);
};

solve([ 'ilovepizza', 'ihatevegetables', 'orange' ]);