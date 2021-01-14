function solution(arr, bombInfo) {

    let bomb = bombInfo[0];
    let range = bombInfo[1];

   let  index = arr.indexOf(bomb);

   while(index > -1) {
   
      arr.splice((index - range) , range )  // left detonation
      arr.splice(index, (range + 1))  //right detonation
     
   }

   

}
solution([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);