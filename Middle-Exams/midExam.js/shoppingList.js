function solve(input) {

    let shoppingList = input.shift().split('!');
    let commands = input.shift();

    while (commands != 'Go shopping!') {
        let tokens = commands.split(' ');
        let command = tokens[0];
        let item = tokens[1];

        let index = shoppingList.indexOf(item);
        switch (command) {
            case 'Urgent':  //add item
                if (index < 0) {
                    shoppingList.unshift(item);

                }
                break;
            case 'Unnecessary': //remove item
                if (~index) {
                    shoppingList.splice(index, 1);

                }
                break;
            case 'Correct': // if item exist change name, if item doesn`t exist,skip te command
                let newItem = tokens[2];
                if (~index) {
                    shoppingList.splice(index, 1, newItem);
                }
                break;
            case 'Rearrange': // remove the item and add it in the end of the list
                if (~index) {
                    shoppingList.splice(index, 1);
                    shoppingList.push(item);
                }

                break;
                default:
                    break;

        }
        commands = input.shift();

    }
    console.log(shoppingList.join(', '));
}
solve([
    'Tomatoes!Potatoes!Bread',
     'Unnecessary Milk', 
     'Urgent Tomatoes', 
     'Go Shopping!'
    ]);