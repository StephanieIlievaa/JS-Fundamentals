function solve(input) {
    const employees = {};
    input.forEach(name => {
        employees[name] = name.length;
    })
    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}
solve(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);



 //Second way to solve - with an array;

 // const employees = [];
 //input.forEach(name => {
 //employees.push({ //name,
 //personalNumber: name.length
 // });
 //});
 //for(const employee of employees) {
 // console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
 