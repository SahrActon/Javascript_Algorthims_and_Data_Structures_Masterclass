function sumZero(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i +1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

/* Time Complexity -  0(N^2)
*  Space Complexity - 0(1)
* */

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));
// sumZero([1,3,4,6,1,3]);