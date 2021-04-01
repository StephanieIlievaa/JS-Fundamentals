function solve(input) {
let adressbook = {};
for(let line of input) {
    let [name, adress] = line.split(':');
    adressbook[name] = adress
}
}
solve(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);