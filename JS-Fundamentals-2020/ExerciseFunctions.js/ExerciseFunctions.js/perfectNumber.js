function perfectNumber(num){
    let divisors = 0;
    for(let i= num - 1; i > 0; i--){
        if(num % i == 0){
            divisors+=i;
        }        
    }
    if(divisors == num){
        console.log("We have a perfect number!");
        
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6);