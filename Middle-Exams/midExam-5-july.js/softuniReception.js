function solve(input) {

    // Each emloyee efficiency 
    
let firstEmployee = +input.shift();
let secondEmployee = +input.shift();
let thirdEmployee = +input.shift();
let studentsCount = +input.shift();
let neededHours = 0;

let answerPerHour = firstEmployee + secondEmployee + thirdEmployee;

while (studentsCount > 0) {
    studentsCount -= answerPerHour;
    neededHours++;

    if(neededHours % 4 === 0){
        neededHours++;
    }
}
console.log(`Time needed : ${neededHours}h.`);
}
solve(['5','6','4','20' ]);