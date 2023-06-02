## Overview

- This question is intended as an introduction to callbacks. A callback is defined as a function passed as an argument to another function. They are critical to understand as they are used frequently in almost any JavaScript codebase and are essential to writing reusable code.

### What is a Callback

- A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

### Why Use Callbacks

- The simple answer is they allow you to write code that can be reused across different use-cases.

- For example, if you have a function that adds two numbers together, you can use that function to add two numbers together, or you can use it to add two strings together.

- Imagine you created an algorithm that sorts an array of numbers. Then you encounter a situation where you want to sort an array of people by their age. One option is to re-write the algorithm to handle arrays of people. However, a far better way is to have this function accept a callback that is expected to return a number. Then you can keep the core algorithm the same, and the user of the function simply passes person => person.age as the 2nd parameter.

- Just about any generic algorithm can benefit from accepting callbacks. The standard JavaScript library and many 3rd party packages rely heavily on them. This particular question asks to reimplement the Array.map method, which is one of the most heavily used array methods in JavaScript. However, there are four small differences.

 1 - Array.map is a method on the Array prototype. This implementation accepts the array as the 1st argument.

 2 - The callback provided to Array.map passes a reference to the original array as the 3rd argument. This implementation's callback only accepts two arguments.

 3 - Array.map optionally allows you pass a thisArg as the 2nd parameter. If provided, the passed callback will be bound to that context (assuming the callback isn't an arrow function as they can't be bound).

 4 - Array.map is required to handle sparse arrays. For example, if you write code let arr = Array(100); arr[1] = 1;, Array.map will only look at index 1.

  
  

## Approach 1: Write Values onto Initially Empty Array

  

- In JavaScript, you can read and write to indices that aren't in the range [0, arr.length). Just like with normal objects, accessing an index that doesn't exist returns undefined. Writing to an index that doesn't exist is generally discouraged because, besides being confusing, it can result in slow and unpredictable performance.

- This approach takes ~250ms for 5M elements.

```js
var map = function(arr, fn) {
const newArr = [];
for (let i = 0; i < arr.length; ++i) {
newArr[i] = fn(arr[i], i);
}
return newArr;
};
```
  

## Approach 2: For...in Loop

- For...in loops are more commonly used to iterate over the keys on an object. However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays. For example, if you wrote let arr = Array(100); arr[1] = 10;, this approach would only transform the single element.

- This approach takes ~1000ms for 5M elements. An interesting thing to note is that this is the most similar to how the built-in Array.map works. Because Array.map needs to handle sparse arrays, it is usually several times slower than an optimal custom implementation that assumes arrays aren't sparse.


```js
var map = function(arr, fn) {
const newArr = new Array(arr.length);
for (const i in arr) {
newArr[i] = fn(arr[i], Number(i));
}
return newArr;

};

```

## Approach 4: Preallocate Memory

- This approach is similar to the first approach, but it preallocates the memory for the new array. This is a common optimization technique in languages like C++ and Java. However, it is rarely used in JavaScript because it is usually not worth the extra code complexity. In this case, it is slightly faster than the first approach, but it is also slightly more complex.
- This approach takes ~200ms for 5M elements.
- You can create an empty array with some length using the new Array(len) constructor. Note that the memory is allocated but the array doesn't actually contain any elements.


```js
var map = function(arr, fn) {
const newArr = new Array(arr.length);
for (let i = 0; i < arr.length; ++i) {
newArr[i] = fn(arr[i], i);
}
return newArr;

};

```

## Approach 5: In-Memory Transformation

- This approach is similar to the first approach, but it transforms the original array instead of creating a new one. This is a common optimization technique in languages like C++ and Java. However, it is rarely used in JavaScript because it is usually not worth the extra code complexity. In this case, it is slightly faster than the first approach, but it is also slightly more complex.

- This approach takes ~200ms for 5M elements.

```js

var map = function(arr, fn) {
for (let i = 0; i < arr.length; ++i) {
arr[i] = fn(arr[i], i);
}
return arr;
};

```


## resources

- Leetcode 2635 : https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9

- https://www.youtube.com/watch?v=PoRJizFvM7s