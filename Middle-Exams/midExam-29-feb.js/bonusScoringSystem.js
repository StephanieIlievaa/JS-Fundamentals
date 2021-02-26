function solve(input) {
    // Input
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());

    // calculate 

    let students = input;
    let maxAttendance = 0;

    for (let i = 0; i < studentsCount; i++) {
        let currentAttendance = Number(students[i]);

        if (currentAttendance > maxAttendance) {
            maxAttendance = currentAttendance;
        }
    }

    let maxBonus = 0;
    if (lecturesCount > 0) {
     maxBonus = maxAttendance / lecturesCount * (5 + initialBonus);
    }
    //print result
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);