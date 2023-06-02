  

## Overview

  

- This question asks you to write a function that filters elements from an array based on the output of a callback function. Alongside map and reduce, it is one of the most commonly used and important functions in JavaScript.

  

### Truthy and Falsy

  

- In this question, you are asked to remove all values from an array that aren't truthy (i.e. remove all falsy values). But what does that mean? JavaScript has true boolean values of true and false. But you are actually allowed to put any value inside an if statement. That value will be coerced into a boolean based on it's "truthiness". The following values are considered falsy:

 
- All values are considered truthy except the following:

 
- false
- null
- undefined
- 0
- NaN
- "" (empty string)

  
  

### Why does this language feature exist?

- The short answer is it can be convenient. Imagine you have a textfield which edits a variable userInput which is initially null.

  

- Rather than writing:

```js

if (userInput !== null && userInput !== "") {
// uploadToDatabase(userInput)
}
```

- You can write:

```js
if (userInput) {
// uploadToDatabase(userInput)
}

```

- However, it is easy to not think carefully about your code and create bugs by not being explicit about what values are valid. For example, zero or an empty string might be completely valid inputs and the above code will result in a bug.

  

### Truthiness and Logical Operators

- It is not uncommon to see code like this in a JavaScript codebase:

```js
const stringVal = textInput || "Default Value";
```

- This is a shorthand way of writing:

```js
let stringVal;
if (textInput) {
stringVal = textInput;
} else {
stringVal = "Default Value";
}

```

- To an experienced JavaScript developer, this makes perfect sense. But developers from other backgrounds might find this very confusing. Why is a logical operator returning a string?

- This is because, in JavaScript, logical operators don't return booleans; they return one of the two operands provided to them. At first this is confusing, but it is actually quite elegant and allows you to write very terse code.

  

1. The OR operator || returns the first value if the first value is truthy (without evaluating the 2nd value). Otherwise it returns the second value.

2. The AND operator && returns the first value if the first value is falsy (without evaluating the 2nd value). Otherwise it returns the second value.

3. The Nullish Coalescing operator ?? is identical to || except it only treats null and undefined as falsy. This is a new operator introduced in ES2020. It is not supported in Internet Explorer. It is supported in all other major browsers and Node.js 14.0.0 and above.
  

- An easy way to remember this is by knowing the logical operator will return the last value it needed to evaluate. For example, OR is immediately true if the first value is true, thus it will return the first value iff it is truthy.

- The reason this is elegant is because for true booleans, this algorithm actually works exactly as you would expect. Try it out for yourself! However you can also use them to write short code for non-boolean operations. And even if you don't use these operators for that purpose yourself, it's important to understand them for reading other's code.

  

- A common use-case is for choosing the first truthy value from a list:

```js
let val;
if (a) {
val = a;
} else if (b) {
val = b;
} else {
val = c;
}
```

- This can be written as:

```js
const val = a || b || c;
```

  

- You could also conditionally execute some code:

```js
if (a && b) {
func();
}
```

- This can be written as:

```js
(a && b) && func();
```

  
  

## Built-in Array.filter

This question asks you to reimplement the Array.filter method, which is one of the most heavily used array methods in JavaScript. However there are four small differences between your implementation and the standard library.

- Array.filter is a method on the Array prototype. This implementation is a function that accepts the array as the 1st argument.

- The callback passed to Array.filter has a reference to the original array passed as the 3rd argument. This implementation's callback only accepts two arguments.

- Array.filter optionally allows you pass a thisArg as the 2nd parameter. If provided, the passed callback will be bound to that context (assuming the callback isn't an arrow function as they can't be bound). This implementation does not have this functionality.

- Array.filter handles sparse arrays. For example, if you write code let arr = Array(100); arr[1] = 10;, Array.filter will only look at index 1 and the empty indices will automatically be filtered out.

  

## Approach 1: Push Values onto New Array

  
You can create a new array and push all values where fn(arr[i], i) returns a truthy value. This is done by iterating over each element in the original array.

```js

var filter = function(arr, fn) {
const newArr = [];
for (let i = 0; i < arr.length; ++i) {
if (fn(arr[i], i)) {
newArr.push(arr[i]);
}
}
return newArr;
};
```
  

## Approach 2: For...in Loop

- For...in loops are more commonly used to iterate over the keys on an object. However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays by omitting empty indices. For example, if you wrote let arr = Array(100); arr[1] = 10;, this approach would only apply a filter on the single element and it will automatically remove all the empty values.
- This approach is also notable because it is the only approach that can be used to iterate over the keys of an object. For example, if you wrote let obj = {a: 1, b: 2};, this approach would iterate over the keys a and b. The other approaches would iterate over the values 1 and 2.
- 
```js
var filter = function(arr, fn) {
const newArr = [];
for (let i in arr) {
if (fn(arr[i], i)) {
newArr.push(arr[i]);
}
}
return newArr;
};

```

## Approach 3: Preallocate Memory
- Pushing elements onto an array can be a slow operation. This is because the array may not have space for the new element and will need to be resized. Initializing the array with new Array(size) can avoid these expensive resizing operations.
- At the end, we will remove empty elements by popping them from the end of the array. Note that this algorithm will perform the fastest in the case where few elements are removed from the original array.
  
```js
var filter = function(arr, fn) {
let size = 0;
const newArr = new Array(arr.length);
for (let i = 0; i < arr.length; ++i) {
if (fn(arr[i], i)) {
newArr[size] = arr[i];
size++;
}
}
// Ensure new array is of length size
while (newArr.length > size) {
newArr.pop();
}
return newArr
};

```

## Approach 4: Perform Operations In-Place

- This approach is similar to Approach 3, but utilizes the memory of the input array, avoiding the cost of creating a new array.

- Note that this solution is efficient, but it generally is not a good idea to mutate arguments passed into a function. This is because the user of the function may not expect their array to be modified and this could result in bugs. Note that the built-in Array.filter does not mutate the input array.
```js
var filter = function(arr, fn) {
let size = 0;
for (let i = 0; i < arr.length; ++i) {
if (fn(arr[i], i)) {
arr[size] = arr[i];
size++;
}
}
// Ensure array is of length size
while (arr.length > size) {
arr.pop();
}
return arr
};

  

```


## reference 
 - Leetcode : 2634.  https://leetcode.com/problems/filter-elements-from-array/description/?utm_campaign=PostD5&utm_medium=Post&utm_source=Post&gio_link_id=a9a5VZr9
   