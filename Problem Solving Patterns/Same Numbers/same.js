/*

### An Example

Write a function called *"Same"*, which accepts two arrays.
The function should return true if every value in the array has its corresponding value
squared in the second array. The frequency of values must be the same.

*/
/*My 1st attempt*/
function same(array1,array2){
    let state = false;

    for(let x in array1){

        for(let y in array2){
            let sum  = x * x ;
            if ( sum = array2[y]){
                state = true
            } else{
                state = false
            }
        }
    }
    return state
}

console.log(same([1,2,3],[4,1,9]))// true
console.log(same([1,2,3],[1,9]))// false
console.log(same([1,2,1],[4,4,1]))// false (must be same frequency)
console.log('\n');

function same_solution(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        } else {
            console.log(arr2);
            arr2.splice(correctIndex,1)
        }
    }
    return true;
}


console.log(same_solution([1,2,3],[4,1,9]))// true
console.log('\n');
console.log(same_solution([1,2,3],[1,9]))// false
console.log('\n');
console.log(same_solution([1,2,1],[4,4,1]))// false (must be same frequency)
