function weapon(input) {

    input.pop()
    let particles = input.shift().split('|')

    for (const token of input) {
        let [command, position, index] = token.split(' ').map(el => Number(el) || el)

        if (command === 'Move' && particles[index]) {
            if (position === 'Left' && index > 0) {
                let el = particles.splice(index, 1)[0]
                particles.splice(index - 1, 0, el)
            }

            if (position === 'Right' && index < particles.length) {
                let el = particles.splice(index, 1)[0]
                particles.splice(index + 1, 0, el)
            }

        }

        if (command === 'Check') {
            if (position === 'Odd') console.log(particles.filter((el, i) => i & 1).join(' '))
            else console.log(particles.filter((el, i) => !(i & 1)).join(' '))
        }

    }

    console.log(`You crafted ${particles.join('')}!`);
}
weapon([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]);
