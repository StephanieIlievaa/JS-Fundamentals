function solve(stock, ordered) {
    // First - create object and store all product in it;
    const products = {};
    // every even index hold name of the product and every odd index hold quantity
    stock.forEach((el, i) => {
        if (i % 2 === 0) {
            const product = stock[i];
            const quantity = Number(stock[i + 1]);
            products[product] = quantity;
        }

    });

    for (let i = 0; i < ordered.length; i += 2) {
        const product = ordered[i];
        const quantity = Number(ordered[i + 1]);
        if (product[product] === undefined) {
            products[product] = 0;
        }
        products[product] += quantity;
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);

    }


}
solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14',
        'Pasta', '4', 'Beer', '2'
    ],

    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);