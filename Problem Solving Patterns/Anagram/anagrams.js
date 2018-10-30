/*
Given two string write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase or name formed by rearranging the letters of another,
such as cinema, formed from iceman.
* */

function validAnagram(word1, word2) {
    /*Checking for valid frequency only
    * If the two words dont have the same amounts of letters/char exit0
    * */

    if (word1.length !== word2.length) {
        return false;
    }

    const lookup = {};

    for (let val = 0; val < word1.length; val++) {
        let letter = word1[val];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let val = 0; val < word2.length; val++) {
        let letter = word2[val];

        // Cant find the letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

/* This is very nice and slick code! :) */

console.log(validAnagram('', ''));
console.log(validAnagram('tac', 'cat'));
console.log(validAnagram('zaaz', 'zzaa'));
console.log(validAnagram('anagram', 'nagarm'));
console.log(validAnagram('ghj', 'nagarm'));



