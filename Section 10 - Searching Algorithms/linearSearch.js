function linearSearch (arr, value) {

    for (let i = 0; i < arr.length ; i ++){
       if (arr[i] === value){
           console.log('found you');
           return i;
       }
   }
   console.log('I did not find anything buddy');
   return -1

}

linearSearch([2,3,4,5,6,7,11], 11);