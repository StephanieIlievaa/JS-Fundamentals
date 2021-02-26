function receipt(input) {

    let price = 0;
    let customer = '';

    for (const line of input) {

        if (line === 'special' || line === 'regular') {
            customer = line;
            break;
        }

        let currentPrice = Number(line);

        if (currentPrice <= 0) {
            console.log('Invalid price!');
            continue;
        }

        price += currentPrice;

    }
    if (price === 0) {
        console.log('Invalid order!');
    } else {

        let taxes = price * 0.2;
        let total = price + taxes;

        if (customer === 'special') {
            total *= 0.9;
        }

        console.log(`Congratulations you've just bought a new computer!
         Price without taxes: ${price.toFixed(2)}$
         Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${total.toFixed(2)}$`);
    }


}

receipt([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]
);