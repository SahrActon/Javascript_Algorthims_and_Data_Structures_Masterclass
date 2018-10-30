/*
* In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
* 5! = 5x4x3x2x1 = 120
* */

/*function factorial(num) {
    let total = 1 ;
    for (let i = num; i > 1 ; i --){
        total *= i;
    }
    return total;
}*/
// console.log(factorial(3));

// Recursive function 

 function factorialRecursive(num) {
     if (num === 1) {
         return 1; // base case
     }
     return num * factorialRecursive(num-1)
     
 }

 //console.log(factorialRecursive(3));
 factorialRecursive(3);