function sumZero(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i]], arr[j];
            }
        }
    }
}

/* Time Complexity -  0(N^2)
*  Space Complexity - 0(1)
* */

sumZero([1,3,4,6,1,3]);