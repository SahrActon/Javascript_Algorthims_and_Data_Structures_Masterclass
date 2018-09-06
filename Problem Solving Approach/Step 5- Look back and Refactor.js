/*
Write a function which takes in a string and returns counts of each character in the String
* */


// checking / advanced questions

// "my phone number is 182763. My skill's" -
/**
 * 1. Should the function be able to handle numbers/ how should it handle it
 * 2. How do you handle spaces
 * 3. How do you handle special characters
 * 4. How to count for lower and upper cases
 * */

/*The interviewer said that we only care about the following */

/**
 * We take numbers into consideration
 * We take all lowercase alphabets into consideration
 */

/** Version 1 */

function charCount_v1(str) {
    // Make object to return at end
    let result = {};
    // Loop over string, for each character....
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND key in the object then add 1 to it
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) { // meaning the character is in the object
                result[char]++;

                // if the char is a number/letter AND not in the object , add it and set value to 1
            } else {
                result[char] = 1;
            }
        }
    }

    // if the char is something else (space, period, etc.) don'st do anything
    // return object at end
    return result;
}


/** Version 2 */
function charCount_v2(str) {
    // Make object to return at end
    let result = {};
    // Loop over string, for each character....
    for (var char of str) {
        char.toLowerCase();
        // if the char is a number/letter AND key in the object then add 1 to it
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) { // meaning the character is in the object
                result[char]++;

                // if the char is a number/letter AND not in the object , add it and set value to 1
            } else {
                result[char] = 1;
            }
        }
    }

    // if the char is something else (space, period, etc.) don'st do anything
    // return object at end
    return result;
}

/** Version 3 */

function charCount_v3(str) {
    // Make object to return at end
    let result = {};
    // Loop over string, for each character....
    for (var char of str) {
        char.toLowerCase();
        // if the char is a number/letter AND key in the object then add 1 to it
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    // if the char is something else (space, period, etc.) don'st do anything
    // return object at end
    return result;
}


function charCount(str) {
    // Make object to return at end
    let result = {};
    // Loop over string, for each character....
    for (var char of str) {
        // if the char is a number/letter AND key in the object then add 1 to it
        if (isAlphaNumeric(char)) {
            char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    // if the char is something else (space, period, etc.) don'st do anything
    // return object at end
    return result;
}


function isAlphaNumeric(str) {
    var code;

    for (var i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(0);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
}


console.log(charCount("booomMMMM!")); // {a:4}

console.log(charCount("hello")); // {h:1, e:1, l:2, 0:1}