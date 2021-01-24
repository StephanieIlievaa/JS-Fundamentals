function fizzBuzz() {
   let i = 1;
   let n = 100; 

   while(i <= n) {
        if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
      i++;
    }
}
fizzBuzz();


