function blackFlag(input) {
    //Input
    let days = Number(input.shift());
    let plunderPerDay = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let total = 0;
    // calculate
    for (let day = 1; day <= days; day++) {
        total += plunderPerDay;
        if (day % 3 === 0) {
            total += plunderPerDay * 0.5;
        }
        if (day % 5 === 0) {
            total -= total * 0.3;
        }

    }
    //Print output
    if (total >= expectedPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let percentage = total / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(['5', '40', '100']);