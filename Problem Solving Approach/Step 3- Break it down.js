/*
Write a function which takes in a string and returns counts of each character in the String
* */

charCount("aaaa"); // {a:4}

charCount("hello"); // {h:1, e:1, l:2, 0:1}

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

function charCount(str) {
    // Make object to return at end
    // Loop over string, for each character....
        // if the char is a number/letter AND key in the object then add 1 to it
        // if the char is a number/letter AND not in the object , add it and set value to 1
        // if the char is something else (space, period, etc.) don'st do anything
    // return object at end
    return 'something'
}