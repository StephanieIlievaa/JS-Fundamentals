function grades(grade) {


    if (grade >= 2.00 && grade <= 3.00) {
        return `Fail (${grade})`;
    } else if (grade >= 3.00 && grade <= 3.49) {
        return `Poor (${grade})`;
    } else if (grade >= 3.50 && grade <= 4.49) {
        return `Good (${grade})`;
    } else if (grade >= 4.50 && grade <= 5.49) {
        return `Very good (${grade})`;
    } else {
        return `Exellent (${grade})`;
    }

}

console.log(grades(2.99));