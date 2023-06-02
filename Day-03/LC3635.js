/*
2635. Apply Transform Over Each Element in Array
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number

*/

/**
 * @param {number[]} arr
 * @param {function} fn
 * @return {number[]}
 * Runtime: 72 ms
 * Memory Usage: 38.8 MB
 */


// Solution 1 : Function Syntax
var map = function (arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
} 

// Solution 2 : Arrow Function Syntax
var map = (arr, fn) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}


// Solution 3 : Arrow Syntax + Rest Arguments

var map = (...args) => {
    let result = [];
    for (let i = 0; i < args[0].length; i++) {
        result.push(args[1](args[0][i], i));
    }
    return result;
}


// Solution 4 :  Function Syntax + Closure
  
var map = function (arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}