function smallestNumbers(array){
   
   // let smalestNumber = a;
    //let secondsmalestNumber = b;

    let sortedInAscending = array.sort((a, b) => { return a - b;});
    

    console.log(sortedInAscending.slice(0,2));
}
smallestNumbers([30, 15, 50, 5]);