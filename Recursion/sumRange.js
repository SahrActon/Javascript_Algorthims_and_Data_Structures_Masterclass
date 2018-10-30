function sumRange(num) {
    if (num === 1) {
        return 1; // Base case
    }
    return num + sumRange(num - 1); // Different inputs
}

console.log(sumRange(3));

// What would happen if we didnt return?
// If we dont return in this case the loop will keep on going down

// Within the code all sum(num - 1) is waiting from the child was.