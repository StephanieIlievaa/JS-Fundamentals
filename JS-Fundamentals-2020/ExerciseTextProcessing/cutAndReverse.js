function solve(input) {
    let half = input.length / 2;
    let left = input.substr(0, half);
    let right = input.substr(half, half);

    console.log(reverse(left));
    console.log(reverse(right));

    function reverse(string) {
        let newString = '';
        return string.split('').reverse().join('');
        // for (let i = string.length - 1; i >= 0; i--) {
        //    newString += string[i];
        // }
        // return newString;
    }

}
solve('tluciffiDsIsihTgnizamAoSsIsihT');