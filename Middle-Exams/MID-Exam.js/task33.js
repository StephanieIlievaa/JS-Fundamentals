function solve(input) {
    let text = input.shift().split(' ');
    let commandArr = input;
    for (let i of commandArr) {
        let line = i.split(' ');
        let index = -1;
        if(line[0] == "Stop"){
            break;
        }
        else if (line[0] == "Delete") {
               index = Number(line[1]) + 1;
            if (0 <= line[1] && line[1] < text.length) {
                text.splice(index, 1);
            }
        }
        else if (line[0] == "Swap") {
            let indexFirstWord = text.indexOf(line[1]);
            let indexSecondWord = text.indexOf(line[2]);
            if (indexFirstWord != -1 && indexSecondWord != -1) {
                text.splice(indexFirstWord, 1, line[2]);
                text.splice(indexSecondWord, 1, line[1]);
            }
        }
        else if (line[0] == "Put") {
            index = Number(line[2]) - 1;
            if (0 <= index && index <= text.length) {
                text.splice(index, 0, line[1]);
            }
        }
        else if (line[0] == "Sort") {
            text.sort((a, b) => b.localeCompare(a));
        }
        else if (line[0] == "Replace") {
            index = text.indexOf(line[2]);
            if(index != -1){
                text.splice(index, 1, line[1]);
            }
        }
    }
    console.log(text.join(' '));
}
solve([
    "Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"
]);