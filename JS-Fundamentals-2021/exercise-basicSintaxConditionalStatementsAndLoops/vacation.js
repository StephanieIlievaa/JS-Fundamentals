function vacation(groupOfPeople, typeOfGroup, day) {

    let price = 0;

    if (typeOfGroup === "Students") {
        if (day === "Friday") {
            price = groupOfPeople * 8.45;
        } else if (day === "Saturday") {
            price = groupOfPeople * 9.80;
        } else if (day === "Sunday") {
            price = groupOfPeople * 10.46;
        }
        if ( groupOfPeople >= 30) {
            price *= 0.85; 
        }

    } else if (typeOfGroup === "Business") {
        if(groupOfPeople >= 100) {
            groupOfPeople -= 10;
        }
        if (day === "Friday") {
            price = groupOfPeople * 10.90;
        } else if (day === "Saturday") {
            price = groupOfPeople * 15.60;
        } else if (day === "Sunday") {
            price = groupOfPeople * 16;

        }
    } else if (typeOfGroup === "Regular") {
        if (day === "Friday") {
            price = groupOfPeople * 15;
        } else if (day === "Saturday") {
            price = groupOfPeople * 20;
        } else if (day === "Sunday") {
            price = groupOfPeople * 22.50;
        }
        if ( groupOfPeople >= 10 && groupOfPeople <= 20){
            price *= 0.95;
        }
    }
console.log(`Total price: ${price.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday");