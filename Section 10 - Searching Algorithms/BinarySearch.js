function binarySearch(sortedArray, element) {

    let start = 0;
    let end = sortedArray.length -1;
    let middle = Math.floor((start + end) / 2);

    while(sortedArray[middle] !== element && start <= end){
        if (element < sortedArray[middle]){
                end = middle - 1;
        } else {
            start = middle +1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(sortedArray[middle] === element) {
        return middle;
    }
    return -1;
}


console.log(binarySearch([5,10,12,30,43,55,77,78,83,84],55));