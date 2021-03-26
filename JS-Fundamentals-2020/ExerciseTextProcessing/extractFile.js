function solve(input) {
// File name: Template
// File extension: pptx
let lastIndexOfDashes = input.lastIndexOf('\\');

let fileInfo = input.substring(lastIndexOfDashes + 1);

let lastIndexOfDot = fileInfo.lastIndexOf('.');


let fileName = fileInfo.substring(0,lastIndexOfDot);
let fileExtension = fileInfo.slice(lastIndexOfDot + 1, fileInfo.length);

console.log(`File name: ${fileName}`);
console.log((`File extension: ${fileExtension}`));

}
solve('C:\\Internal\\training-internal\\Template.pptx');