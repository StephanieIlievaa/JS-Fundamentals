function solve(input) {

    input.pop();
    let n = Number(input.shift());
    let songList = {};

    for (let i = 0; i < n; i++) {
        let [pieceName, composerName, key] = input.shift().split('|');
        if (songList.hasOwnProperty(pieceName)) {
            console.log(`${pieceName} is already in the collection!`);
        } else {
            songList[pieceName] = { composerName, key };
        }
    }
    while (input.length > 0) {
        let [cmd, pieceName, ...args] = input.shift().split('|');
        if (cmd === 'Remove') {
            songList.hasOwnProperty(pieceName) ?
                delete songList[pieceName] && console.log(`Successfully removed ${pieceName}!`) :
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`)
        } else if (cmd === 'Add') {
            let [composerName, key] = [...args];
            if (songList.hasOwnProperty(pieceName)) {
                console.log(`${pieceName} is already in the collection!`);
            } else {
                songList[pieceName] = { composerName, key };
                console.log(`${pieceName} by ${composerName} in ${key} added to the collection!`);
            }
        } else if (cmd === 'ChangeKey') {
            let key = args[0];
            if (songList.hasOwnProperty(pieceName)) {
                songList[pieceName].key = key;
                console.log(`Changed the key of ${pieceName} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }
    }
    let sorted = Object.entries(songList).sort((a, b) =>
        a[0].localeCompare(b[0]) || a[1].composerName.localeCompare(b[1].composerName));
    sorted.forEach(piece => console.log(`${piece[0]} -> Composer: ${piece[1].composerName}, Key: ${piece[1].key}`));
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);