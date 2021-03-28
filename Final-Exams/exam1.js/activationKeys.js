function solve(arr) {
    arr.pop()
    let key = arr.shift()
    while (arr.length > 0) {
  
      let token = arr.shift().split('>>>')
      const command = token.shift()
  
      if (command == 'Slice') {
        const [start, end] = [...token].map(Number)
        const cutElements = key.slice(start, end)
        key = key.replace(cutElements, '')
        console.log(key)
      }
  
      if (command == 'Flip') {
        const [action, start, end] = [...token].map(el => isNaN(el) ? el : Number(el))
        if (action == 'Upper') {
          key = key.slice(0, start) + key.slice(start, end).toUpperCase() + key.slice(end, )
        } else { //Lower
          key = key.slice(0, start) + key.slice(start, end).toLowerCase() + key.slice(end, )
        }
  
        console.log(key)
      }
  
      if (command == 'Contains') {
        let substr = token.shift()
        if (key.includes(substr)) {
          console.log(`${key} contains ${substr}`)
        } else {
          console.log(`Substring not found!`)
        }
  
      }
    }
  
    console.log(`Your activation key is: ${key}`)
  }
  
  solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate',
  ]);