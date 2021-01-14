function solve(employee1, employee2, employee3, peopleCount) {

    let peopleServed = peopleCount;
    let timeNeeded = 0;


    while (peopleServed > 0) {
        timeNeeded++;

        if (timeNeeded % 4 === 0) {
            continue;
        }

        peopleServed -= employee1;
        peopleServed -= employee2;
        peopleServed -= employee3;
    }
    console.log(`Time needed: ${timeNeeded}h.`)
}
solve(5, 6, 4, 20);