// Two Essentials parts of a recursive function

/** Base case - This is where the recursion should stop **/
/** Different Input - The inputs values that need to change **/


function  countDown(number) {
    if(number <=0 ) {
        console.log('All done!');
        return; // This return allows you to stop the loop/ exit the program
    }
    console.log(number)
    number--;
    countDown(number)
}

countDown(10);

/*
Question 1:
What tool does JavaScript use to manage function invocations?
Answer - The call stack

*/

/*
* Question 2:
What is a base case?

Answer - A situation when the recursion ends
* */