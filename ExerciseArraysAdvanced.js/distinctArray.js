function repeatingElements(input) {

    let outputArr =getUniqueElements(input);

   console.log(outputArr.join(' '));

    function getUniqueElements(collection){
        let arr = [];
        for (let element of collection) {
            if (!arr.includes(element)) {
                arr.push(element);
            }
        }
        return arr;
    
    }

}
repeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2]);