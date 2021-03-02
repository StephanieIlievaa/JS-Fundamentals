function solve(...input) {
        let [budget, students, flourPrice, eggPrice, apronPrice] = input;
        let freePackages = 0;
        let counter = 0;
     
        for (let i = 0; i < students; i++) {
            counter++;
            if (counter === 5) {
                freePackages++;
                counter = 0;
            }
        }
     
        let price = apronPrice * Math.ceil(students + (students * 0.2))
            + eggPrice * 10 * (students) + flourPrice * (students - freePackages);
     
     
        if (budget >= price) {
            return `Items purchased for ${price.toFixed(2)}$.`;
        } else {
            return `${(price - budget).toFixed(2)}$ more needed.`;
        }
    }


    console.log(input);

solve(50,
    2,
    1.0,
    0.10,
    10.0);