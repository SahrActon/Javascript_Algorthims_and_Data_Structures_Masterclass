function naiveSearch(long, short) {
    var counter = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                console.log('Found- ' + counter);
                counter ++;
            }
        }
    }
    return counter;
}

console.log(naiveSearch('lorie loled', 'lo'));