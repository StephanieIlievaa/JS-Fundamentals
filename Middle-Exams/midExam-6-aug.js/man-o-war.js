function manWar(arr) {
    let pirateship = arr.shift().split('>').map(Number)
    let warship = arr.shift().split('>').map(Number)
    let health = Number(arr.shift())
 
    for (let index = 0; index < arr.length; index++) {
        let [comm, num1, num2, num3] = arr[index].split(' ')
        num1 = Number(num1)
        num2 = Number(num2)
        num3 = Number(num3)
        if (comm === 'Fire') {
            if (warship.includes(warship[num1])) {
                warship[num1] -= num2
                if (warship[num1] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    break;
                }
            }
        } else if (comm === 'Defend') {
            if (num1 >= 0 && num2 < pirateship.length) {
                let counter = 0
                for (let i = num1; i <= num2; i++) {
                    pirateship[i] -= num3
                    if (pirateship[i] <= 0) {
                        counter++
                    }
                }
                if(counter > 0){
                    console.log(`You lost! The pirate ship has sunken.`);
                    break;
                }
            }
        } else if (comm === 'Repair') {
            if (pirateship.includes(pirateship[num1])) {
                if (pirateship[num1] + num2 <= health) {
                    pirateship[num1] += num2
                }
            }
        } else if (comm === 'Status') {
            let sum = health * 0.2
            let count = 0
            for (let index = 0; index < pirateship.length; index++) {
                if (pirateship[index] < sum) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`);
        } else if (comm === 'Retire') {
            let sumPirateship = 0
            let sumWarship = 0
            for (let index = 0; index < pirateship.length; index++) {
                sumPirateship += pirateship[index]
            }
            for (let index = 0; index < warship.length; index++) {
                sumWarship += warship[index]
 
            }
 
            console.log(`Pirate ship status: ${sumPirateship}`);
            console.log(`Warship status: ${sumWarship}`);
            break;
 
        }
    }
 
 
 
}