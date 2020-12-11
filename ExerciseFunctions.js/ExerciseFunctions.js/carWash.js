function carWash(input) {
   
    let value = 0;
    let soap = n => n + 10;
    let water = n => n + (n * 0.2);
    let vacuumCleaner = n => n + (n * 0.25);
    let mud = n => n - (n * 0.10);

    for (let i = 0; i < input.length; i++) {
        
        if (input[i] === 'soap') {
            value = soap(value);
        } else if (input[i] === 'water') {
            value = water(value);
        } else if (input[i] === 'vacuumCleaner') {
            value = vacuumCleaner(value);
        } else {
            value = mud(value);
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);