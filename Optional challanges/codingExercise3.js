/*

Write a function called 'sameFrequency'.
Given two positive integers,
find out if the two numbers have the same frequency of digits.

* */
function sameFrequency(valueA, valueB) {
    // if the number (aka the length) of characters of valueA or valueB isn't the same count then return false
    // if they do have the same char counts then check if one value exist in another
    let numberStringA = valueA.toString();
    let numberStringB = valueB.toString();

    if (numberStringA.length !== numberStringB.length) {
        return false;
    }

    let counterNumber1 = {};
    let counterNumber2 = {};

    for (let i = 0; i < numberStringA.length; i++) {
        counterNumber1[numberStringA[i]] = (counterNumber1[numberStringA[i]] || 0) + 1;
    }

    for (let j = 0; j < numberStringB.length; j++) {
        counterNumber2[numberStringB[j]] = (counterNumber2[numberStringB[j]] || 0) + 1;
    }

    // Check if the char exisit in the other array.
    for (let key in counterNumber1) {
        if (counterNumber1[key] !== counterNumber2[key]) {
            return false
        }
    }
    return true;
}

console.log('1', sameFrequency(22, 222));
console.log('2', sameFrequency(182, 281));
console.log('3', sameFrequency(34, 14));
