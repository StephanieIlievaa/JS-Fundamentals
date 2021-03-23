function solve(word, text) {
  let patern = new RegExp(word, 'g');
  while (patern.test(text)) {
      text = text.replace(patern, '')
  }
  console.log(text);
}
solve('ice kicegiciceeb');