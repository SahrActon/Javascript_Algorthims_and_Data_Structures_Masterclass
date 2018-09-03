const {performance} = require('perf_hooks');
/*Exercise

Suppose we want to write a function that calculates the sum of all number from 1 up to (and including) some number n.
e.g from n =3
1,2,3 = 6
* */

function addUpTo(n) {
 return n * (n + 1) /2;
}

console.log(addUpTo(1000000000));
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log('Time Spent' + ((t2 - t1) / 1000) + ' second');


/*The Big O for the this is  */
/** O(1) **/