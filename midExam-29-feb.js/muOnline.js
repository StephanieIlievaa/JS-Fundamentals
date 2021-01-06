function muOnline(input) {
    //Input
    let isAlive = true;
    let dungeons = input.split('|');
    let health = 100;
    let coins = 0;
    let currentDungeon = 0;

    //Calculate
    for (const dungeon of dungeons) {
        let dungeonSplit = dungeon.split(' ');
        let command = dungeonSplit[0];
        let value = Number(dungeonSplit[1]);
        currentDungeon++;

        if (command == 'potion') {
            // TODO: Fix
            // health = Math.min(100, health + value);
            let healedWith = value;
            if (health + value > 100) {
                healthWith = 100 - health;
                health = 100;
            } else {
                health += value;
            }
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp`);

        } else if (command == 'chest') {
            coins += value;
            console.log(`You found ${value} coins`)
        } else {
            health -= value;
            //TO DO: if lower or equal than zero
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${currentDungeon}.`)
                isAlive = false;
                break;

            }

            console.log(`You slayed ${command}`);
        }
    }
    if (isAlive) {
        console.log(`You've made it!`);
        console.log( `Bitcoins: ${coins}`);
            console.log( `Health: ${health}`);
        
    }

}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');