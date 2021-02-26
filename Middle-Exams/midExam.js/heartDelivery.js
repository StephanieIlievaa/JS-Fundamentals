function heartDelivery(arr){
    let index = 0;
    let neighborhood = arr[index++].split('@');
    neighborhood = neighborhood.map(el => el = Number(el));
    let currentIndex = 0; 
 
    readCommands(arr)
    print(neighborhood, currentIndex);
 
    function readCommands(arr){
        let command = arr[index++];
        while(command !== 'Love!'){
            let jumpLength = Number(command.split(' ')[1]); //index
            let distance = currentIndex + jumpLength;
            if(neighborhood[distance] !== undefined){
                jump(distance);
            }
            else{
                distance = 0;
                jump(distance);
            }
            currentIndex >= 0 ? currentIndex = distance : null
            command = arr[index++]
        }
    }
 
    function jump(length){
        if(neighborhood[length] == 0){
            console.log(`Place ${length} already had Valentine's day.`);
        }
        else{
        neighborhood[length] -=2;  
        if(neighborhood[length] == 0){
            console.log(`Place ${length} has Valentine's day.`);
        }  
    }
    }
 
    function print(arr, index){
        console.log(`Cupid's last position was ${index}.`);
        let sum = arr.reduce((a, b) => a+b);
        if(sum == 0){
            console.log(`Mission was successful.`);
        }
        else{
            let houseCount = 0;
            for(let el of arr){
                el > 0 ? houseCount++ : null
            }
            console.log(`Cupid has failed ${houseCount} places.`)
        }
    }
}
heartDelivery([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!",
]);