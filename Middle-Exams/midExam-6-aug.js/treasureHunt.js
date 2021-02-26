function treasureHunt(array) {
    let initialItems = array.shift().split('|');

    for (let element of array) {
        let cmd = element.split(' ') [0];

        if (cmd === 'Yohoho!') {
            break;
        }

        if (cmd === 'Loot') {
            let sequanceOfItems = element.split(' ').slice(1);
            for (let item of sequanceOfItems) {
                if (!initialItems.includes(item)) {
                    initialItems.unshift(item);
                }
            }
        } else if (cmd === 'Drop') {
            let dropIndex = Number(element.split(' ') [1]);

            if (dropIndex > -1 && dropIndex < initialItems.length) {
                let dropItem = initialItems[dropIndex];
                initialItems = initialItems.filter(item => item !== dropItem);
                initialItems.push(dropItem);
            }
        } else if (cmd === 'Steal') {
            let count = Number(element.split(' ') [1]);
            let stolenItems;

            if (count <= initialItems.length) {
                stolenItems = initialItems.splice(-count);
            } else {
                stolenItems = initialItems.splice(0);
            }

            console.log(stolenItems.join(', '));
        }
    }

    let sum = 0;
    for (let item of initialItems) {
        sum += item.length
    }

    let average = sum / initialItems.length;
    if (initialItems.length === 0) {
        console.log("Failed treasure hunt.")
    } else {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    }
}

   treasureHunt([
        'Gold|Silver|Bronze|Medallion|Cup',
        'Loot Wood Gold Coins',
        'Loot Silver Pistol',
        'Drop 3',
        'Steal 3',
        'Yohoho!'
    ]);
