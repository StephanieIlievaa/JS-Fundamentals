function shootTarget(array) {
    let mySeq = array.shift().split(' ').map(Number);
    let shoots = 0;

     for (let element of array) {
        if (element !== 'End') {
            let index = Number(element);
            
            if (index > -1 && index < mySeq.length) {
                let elementOnIndex = mySeq[index];
                mySeq.splice(index,1,-1);
                shoots ++
                for (let i = 0; i < mySeq.length; i++) {
                    if (i !== index && mySeq[i] !== -1) {
                        if (elementOnIndex < mySeq[i]) {
                            mySeq[i] -= elementOnIndex;
                        } else {
                            mySeq[i] += elementOnIndex;
                        }
                    }
                }
            }
        } else {
            console.log(`Shot targets: ${shoots} -> ${mySeq.join(' ')}`)
            break;
        }
    }

}


shootTarget([ '24 50 36 70', '0', '4', '3', '1', 'End' ]);
