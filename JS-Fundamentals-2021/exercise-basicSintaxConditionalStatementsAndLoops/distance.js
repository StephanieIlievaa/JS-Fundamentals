function solve(x1, y1, x2, y2) {

    //pithagorean theorem
    // a^2 + b^2 = c^2 
    //sides of 90 degrees triangle

let a = Math.abs(x1 -x2);
let b = Math.abs(y1 -y2);

 
let distance =   Math.sqrt((a * a) + (b * b));

console.log(distance);
}
solve(2, 4, 5, 0);