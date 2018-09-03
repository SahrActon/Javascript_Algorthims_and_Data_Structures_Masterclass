const {performance} = require('perf_hooks');
/*Exercise

Suppose we want to write a function that calculates the sum of all number from 1 up to (and including) some number n.
e.g from n =3
1,2,3 = 6
* */

function addUpTo(n) {
    let totalSum = 0 ; // setting my total to 0
    for (let i = 1; i <=n ; i++){ // the index (i) is less than n / (including n)
        totalSum += i; //add the current index to the total
    }
    return totalSum // when you have finished the for loop give me the end result of the total sum;
}
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log('Time Spent' + ((t2 - t1) / 1000) + ' second');

/*The Big O for the this is  */
/** O(n) **/