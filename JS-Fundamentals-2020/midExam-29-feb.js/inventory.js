function solve(input) {
    let inventoryInput = input.shift();
    let inventory = inventoryInput.split(', ');

    let commandLine = input.shift();
    while (commandLine != 'Craft!') {
        let [command, argument] = commandLine.split(' - ');

        switch (command) {
            case 'Collect':
                collectItem(inventory, argument);
                break;
            case 'Drop':
                dropItem(inventory, argument);
                break;
            case 'Combine Items':
                let [oldItem] = argument.split(':');
                combineItem(inventory, oldItem, newItem);
                break;
            case 'Renew':
                renewItem(inventory, argument);
                break;


        }
        commandLine = input.shift();
    }
    function collectItem(inventory, item) {
        if (!inventory.includes(item)) {
            inventory.push(item);
        }
    }
    function dropItem(inventory, item) {
        let itemIndex = inventory.indexOf(item);
        if (itemIndex > -1) {
            inventory.splice(itemIndex, 1);
        }

    }
    function combineItem(inventory, oldItem, newItem) {
        let oldItemIndex = inventory.indexOf(oldItem);
        if (oldItemIndex > -1) {
            inventory.splice(oldItemIndex + 1, 0, newItem)
        }

    }
    function renew(inventory, item){
        let itemIndex = inventory.indexOF(item);
        if(itemIndex > -1) {
            inventory.splice(itemIndex, 1);
          inventory.push(item);
        }
     
    }
    //Print result/inventory
    let result = inventory.join(', ')
    console.log(result);
}
solve(['Iron, Wood, Sword', 'Collect - Gold', ' Drop - Wood', 'Craft!']);