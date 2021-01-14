 function solve(numbers) {
 let orderedNumbers = [];
   while(numbers.length > 0){
   let currentElement = numbers.shift();

   if(currentElement < 0){
       orderedNumbers.unshift(currentElement);

   } else {
        orderedNumbers.push(currentElement);
   }

   }

   for(const number of orderedNumbers) {
       console.log(number);
   }

 }
 solve([7, -2, 8, 9]);