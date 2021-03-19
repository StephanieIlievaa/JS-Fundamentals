function solve(input){
let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
let matchInput = input.shift();

matches = matchInput.match(pattern);

console.log(matches.join(', '));

}
solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ]
  );