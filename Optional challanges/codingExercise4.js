/*
Implement a function called,
areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
* */
/** To note
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 * **/

/* Solution 1 */
function areThereDuplicates() {
    let collections = {};

    for (let val in arguments){
        collections[arguments[val]] = (collections[arguments[val]] || 0) + 1;
    }
    for (let key in collections){
        if (collections[key] > 1) { // checking if the key appears more than once then do something
            return true;
        }
    }
    return false
}


/* Solution 2 */


function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}


/* Solution 3 */

console.log(areThereDuplicates(2,4,43));