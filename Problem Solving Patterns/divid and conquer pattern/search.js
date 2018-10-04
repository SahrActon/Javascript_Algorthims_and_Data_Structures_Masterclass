function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            console.log('Found the value that you want: ', i)
            return i;
        }

    }
    console.log('could not find the value')
    return -1;
}

search([2, 1, 3, 45, 4], 43)