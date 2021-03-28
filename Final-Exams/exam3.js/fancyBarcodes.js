function solve(input) {
    let patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let patternDigits = /[0-9]/g;

    input.slice(1).forEach(barcode => {
        if (patternBarcode.test(barcode)) {
            const productGroup = (barcode.match(patternDigits) || ['0', '0']).join('');
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode');
        }
    });
}

//     const patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
//     const patternDigit = /\d/;

//     input.shift();

//     input.forEach(barcode => {
//       if (patternBarcode.test(barcode)) {
//         const productGroup = [...barcode]
//           .filter(char => patternDigit.test(char))
//           .join('');

//         if (productGroup.length > 0) {
//           console.log(`Product group: ${productGroup}`);
//         } else {
//           console.log(`Product group: 00`);
//         }
//       } else {
//         console.log('Invalid barcode');
//       }
//     });
//   }
solve([3, '@#FreshFisH@#']);