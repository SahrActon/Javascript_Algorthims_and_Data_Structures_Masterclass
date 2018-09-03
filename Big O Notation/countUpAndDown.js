function countUpAndDown(n) {
    console.log('Hell, I will now start counting up')
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log('Hell, I will now start counting down');

    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log('Bye')
}

console.log(countUpAndDown(3));

/*The Big O for the this is  */
/** O(n) **/