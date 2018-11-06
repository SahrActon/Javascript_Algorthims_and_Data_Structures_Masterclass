function binarySearch(sortedArray, element) {

    let start = 0;
    let end = sortedArray.slice(-1)[0];
    let middle = Math.floor((start + end) / 2);

    while(middle !== element){
        if (element < sortedArray[middle]){
                end = middle-1;
        } else {
            start = middle +1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start,middle,end);
    if(sortedArray[middle] === element) {
        return middle;
    }
    return -1;
}


console.log(binarySearch([1,2,3,4,5],42));