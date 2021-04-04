function solve(input) {

    //Ascii numbers
    //Print result from each input,each on a new line
    //If message isn't valid -> 'Valid message not found!'
      
    let pattern = /([*@])([A-Z][a-z]{2,})\1: \[(\w)]\|\[(\w)]\|\[(\w)]\|$/;
    let num = input.shift();

    input.forEach(n => {
        let j = n.match(pattern);
        if(j){
            let firstLine = j[2];
            let secondLine = j[3].charCodeAt();
            let thirdLine = j[4].charCodeAt();
            let fourthLine = j[5].charCodeAt();
            console.log(`${firstLine}: ${secondLine} ${thirdLine} ${fourthLine}`);
        } else{
            console.log(`Valid message not found!`);
        }
    });
}
    solve(["3",
        "*Request*: [I]|[s]|[i]|",
        "*Taggy@: [73]|[73]|[73]|",
        "Should be valid @Taggy@: [v]|[a]|[l]|"]);