### Multiple pointers
    Creating pointers or values that correspond to an index or position and move towards the
    beginning, end or middle based on a certain condition

    * Very efficient for solving problems with minimal space complexity as well. *

    @Author
    Sahr Thomas Acton

E.g.
- [-4,-3,-2-,1,0,1,2,5]
- "alsjdalkjdlkas"

An Example

Write a function called sumZero which accepts a sorted array of integers. The function
should find the first pair where the sum is 0. Return an array that includes both values
that sum to zero or undefined if a pair does not exist.

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined