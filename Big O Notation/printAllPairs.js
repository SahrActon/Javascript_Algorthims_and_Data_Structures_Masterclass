function printAllPairs(n) {
    // First O(N)
    for (let i = 0; i <= n; i++){
        for (let j =0; j <= n; j++){
            console.log(i,j)
        }
    }
}
console.log(printAllPairs(5000))

/*The Big O for the this is  */
/** O(n^2)) **/