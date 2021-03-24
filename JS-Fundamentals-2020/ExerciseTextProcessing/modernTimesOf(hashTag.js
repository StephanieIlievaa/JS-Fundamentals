function solve(input) {

    //special word starting with #
    //only letters in the special word
    //print without the #

    for (const el of input.split(' '))
    if (el.match(/(#[A-z]+)/gim)) console.log(el.substring(1, ))
}
 

    //     text = input.split(' ');
    //     for (let word of text) {
    //         if (word.startsWith("#") && isOnlyLetters(word.substring(1)) && word.length > 1) {
    //             console.log(word.substring(1));
    //         }
    //     }
    //     function isOnlyLetters(w) {
    //         let isLetter = true;
    //         for (const char of w) {
    //             let code = char.charCodeAt();
    //             if (code < 65 || code > 90 && code < 97 || code > 122){
    //                 isLetter = false;
    //                 break;
    //             } 
    //         }
    //         return isLetter;
    //     }
    // }
solve('Nowadays everyone uses # to tag #special word in #socialMedia')