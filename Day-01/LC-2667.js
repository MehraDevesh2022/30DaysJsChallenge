/*
2667. Create Hello World Function
Easy
459
46
Companies

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10

*/

/**
 * @param {any[]} args
 * @return {() => string}
 *  Runtime: 76 ms
 * Memory Usage: 38.8 MB
 *  
 * https://leetcode.com/problems/create-hello-world-function/discuss/677703/JavaScript-1-liner
 * 
 */


 // Solution 1 : Function Syntax
var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

// Solution 2 : Arrow Function Syntax
var createHelloWorld = () => () => "Hello World";

// Solution 3 : Arrow Syntax + Rest Arguments
var createHelloWorld = (...args) => () => "Hello World";

