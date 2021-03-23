function solve(start, stop) {
let range = '';
    let sum = 0;

    for ( let i = start; i <= stop; i++) {
      range += i + ' ';
      sum += i;
        
    }
    console.log(range);

console.log(`Sum: ${sum}`);
}
solve( 5, 10);