function memory(array) {
    let mySequance = array.shift().split(' ');
    let moves = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        moves ++
        if (element !== 'end') {
            let firstIndex = element.split(' ') [0];
            let secondIndex = element.split(' ') [1];
            if (mySequance[firstIndex] === mySequance[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${mySequance[firstIndex]}!`);
                if (firstIndex > secondIndex) {
                    mySequance.splice(firstIndex,1);
                    mySequance.splice(secondIndex,1);
                } else {
                    mySequance.splice(secondIndex,1);
                    mySequance.splice(firstIndex,1);
                }
            } else if (firstIndex == -1 || secondIndex == -1 ||  firstIndex == secondIndex) {
                console.log("Invalid input! Adding additional elements to the board");
                let middleOfTheSequance = Math.trunc(mySequance.length / 2);
                mySequance.splice(middleOfTheSequance, 0, `-${moves}a`)
                mySequance.splice(middleOfTheSequance, 0, `-${moves}a`)
            } else {
                console.log("Try again!");
            }
            if (mySequance.length === 0) {
                console.log(`You have won in ${moves} turns!`);
                break;
            }
        } else {
            console.log('Sorry you lose :(')
            console.log(mySequance.join(' '))
            break;
        }

    }
}