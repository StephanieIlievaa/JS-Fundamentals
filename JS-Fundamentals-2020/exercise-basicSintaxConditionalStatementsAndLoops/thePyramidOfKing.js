function buildPyramid(base, n) {
 
    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let row = 0;
    let currentBase = base;
 
    while (currentBase > 2) {
     let marbel = currentBase * 4 - 4;
     let stone = currentBase * currentBase - marbel;
        totalstone += stone;
 
        row++;
        if(row % 5 === 0) {
            totallapis += marbel;
        }else{
            totalmarble += marbel;
        }
        currentBase -= 2;
    }
    row++;
    let gold = currentBase * currentBase;
 
    stone = Math.ceil(totalstone * n);
    marble = Math.ceil(totalmarble * n);
    lapis = Math.ceil(totallapis * n);
    totalgold = Math.ceil(gold * n);
    totalHeight = Math.floor(row * n);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
 
}
buildPyramid(11, 0.75);