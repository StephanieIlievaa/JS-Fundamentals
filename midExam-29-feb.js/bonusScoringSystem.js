function solve(input) {
     //1. Input
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());



    // 2.Calculate 
    let students = input;
    let maxAttendance = students 
    .map(Number)
    .sort((a, b) => b - a)
    .shift();

    //  for (let i = 0; i < studentsCount; i++) {
    //      let currentAttendance = Number(students[i])
    //
    //      if (currentAttendance > maxAttendance) {
    //      maxAttendance = currentAttendance;
    //      }
    //  }

    

    let maxBonus = maxAttendance / lecturesCount * (5 + initialBonus);

    // 3.Print
    console.log(`Max bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${Math.ceil(maxAttendance)} lecture.`);

}
solve(['5', '25', '30',
    '12', '19', '24',
    '16', '20']
);