function solve(...input) {
    {
        const [words, text, finalText] = [input[0].split(', '), input[1].split(' '), []]
        for (let i = 0; i < text.length; i++) {
          if (text[i].includes('*'))  words.map(w => w.length == text[i].length ? text[i] = w : null)   
          finalText.push(text[i])
        }
        return finalText.join(' ')
      }
}

// function solve(firstP, secondP) {
//   let sentence = secondP;
//   let words = firstP.split(', ');
//   words.forEach(element => {
//       sentence = sentence.replace(('*'.repeat(element.length)), element);
//   });
//   console.log(sentence);  
// }

console.log(solve('great',
    'softuni is ***** place for learning new programming languages'));