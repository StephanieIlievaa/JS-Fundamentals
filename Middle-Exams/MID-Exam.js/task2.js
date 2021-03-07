function cookies(input) {
let [biscuits, ...commands] = input;
    biscuits = biscuits.split(', ');
 
 
    for (let current of commands) {
 
        let [currentCommand, typeBiscuit, index] = current.split(' ');
        if (currentCommand === 'Update-Any') {
 
            if (biscuits.includes(typeBiscuit)) {
 
                biscuits = biscuits
                    .map(x => (x === typeBiscuit) ? x = 'Outofstock' : x = x);
            }
 
        } else if (currentCommand === 'Remove') {
            if (index < biscuits.length) {
                biscuits.splice(index, 1, typeBiscuit);
            }
 
        } else if (currentCommand === 'Update-Last') {
            biscuits.splice(-1);
            biscuits.push(typeBiscuit);
 
        } else if (currentCommand === 'Rearrange') {
            if (biscuits.includes(typeBiscuit)) {
 
                biscuits = biscuits.filter(word => word !== typeBiscuit);
                biscuits.push(typeBiscuit);
            }
 
 
 
        } else if (currentCommand === 'Eat') {
            break;
        }
    }
 
    biscuits = biscuits.filter(word => word !== 'Outofstock').join(' ');
 
 
    console.log(biscuits);
}
cookies([
    "Vanilla, Chocolate, Raspberry, Strawberry, Walnuts, WhiteChocolate, Ordinary, Vegan",
    "Update-Any Chocolate",
    "Remove BBB 3",
    "Update-Last Healthy",
    "Eat"
]);