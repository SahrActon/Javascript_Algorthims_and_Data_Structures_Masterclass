// Write a function called productOfArray
// which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// In mathematics, a product is a number or a quantity obtained by multiplying two or more numbers together.
// For example: 4 × 7 = 28 Here, the number 28 is called the product of 4 and 7.

function productOfArray(arr) {

    if(arr === null || arr === undefined || arr.length === 0 ){
        console.log('There is nothing in the array');
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3]));