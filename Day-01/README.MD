## Overview
This question is intended as an introduction to JavaScript functions. This editorial will cover their syntax and topics like closures and higher-order functions.

Resources for learning JavaScript functions: MDN, W3Schools, Codecademy, Eloquent JavaScript, JavaScript.info, and many more.
  

## Function Syntax 
- A function is a block of code that can be called to perform a specific task. Functions are used to avoid code duplication and to make code easier to read. Functions can be called multiple times, and they can be passed arguments and return values.

-In JavaScript, there are two main ways to declare a function. One of which is to use the function keyword. The other is to use the arrow function syntax. The arrow function syntax is a newer addition to JavaScript, and it is a more concise way to declare functions. The arrow function syntax is also known as a lambda function.

### Basic Syntax
** The syntax is:
```javascript
function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7
```
 - In this example, f is the name of the function. (a, b) are the arguments. You can write any logic in the body and finally return a result. You are allowed to return nothing, and it will instead implicitly return undefined.

 ### Anonymous Function
  - A function can also be declared without a name. This is called an anonymous function. Anonymous functions are often used as callbacks, which are functions that are passed as arguments to other functions. In the example below, the function passed to setTimeout is an anonymous function.
  ```javascript 
  setTimeout(function() {
  console.log('Hello, world!');
}, 1000);
```
- The function above will print Hello, world! to the console after 1000 milliseconds (1 second).

### Immediately Invoked Function Expression (IIFE) 

- An immediately invoked function expression (IIFE) is a function that is called immediately after it is declared. This is done by wrapping the function in parentheses and then calling it with another set of parentheses. This is useful for creating a new scope for your code. This is an example of an IIFE:

```javascript
(function() {
  console.log('Hello, world!');
})();
```

- The function above will print Hello, world! to the console immediately.
- Why would you write code like this?  It gives you the opportunity to encapsulate a variable within a new scope so that it does not pollute the global scope. This is useful for avoiding naming collisions with other code. 
  For example, if you are writing a library, you can use an IIFE to encapsulate your code and avoid naming collisions with other libraries. This is a common pattern in JavaScript libraries. For example, jQuery uses an IIFE to encapsulate its code. This is what jQuery looks like when it is loaded in the browser:

```javascript
(function() {
  // jQuery code here
})();
```
- The code above is wrapped in an IIFE so that it does not pollute the global scope. This is useful for avoiding naming collisions with other libraries.

###  Functions Within Functions 
- A powerful feature of JavaScript is you can actually create functions within other functions and even return them!
  
  ```javascript
   function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7

```
  - In the example above, createFunction returns f, which is a function. This is possible because functions are first-class citizens in JavaScript. This means that functions can be passed around like any other value. In this case, createFunction returns a function, which is then assigned to f. f can then be called like any other function.
  - This is a powerful feature of JavaScript that allows you to create functions within functions. This is useful for creating closures, which are functions that have access to variables from an outer scope. This is a common pattern in JavaScript. For example, the function passed to setTimeout in the example below is a closure.



```javascript
function createFunction() {
  const a = 3;
  return function() {
    console.log(a);
  };
}
const f = createFunction();
setTimeout(f, 1000); // 3

```
  - The function above will print 3 to the console after 1000 milliseconds (1 second). This is because the function passed to setTimeout is a closure that has access to the variable a from the outer scope. This is a common pattern in JavaScript.

 ### Closures 
   - An important topic in JavaScript is the concept of closures. When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.
    
    ```javascript
    function createFunction() {
  const a = 3;
  return function() {
    console.log(a);
  };
}
const f = createFunction();
f(); // 3
```
- In the example above, the function returned by createFunction is a closure that has access to the variable a from the outer scope. This is a common pattern in JavaScript.

 ## Arrow Syntax
    -The other common way to declare functions is with arrow syntax. In fact, on many projects, it is the preferred syntax. Arrow syntax is a newer addition to JavaScript, and it is a more concise way to declare functions. The arrow syntax is also known as a lambda function.
    - The syntax is:
    ```javascript
    const f = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7
```
- In this example, f is the name of the function. (a, b) are the arguments. You can write any logic in the body and finally return a result. You are allowed to return nothing, and it will instead implicitly return undefined.
 
  ### Omit Return Keyword 
  - If you are returning a single expression, you can omit the return keyword and the curly braces. This is called implicit return. This is a common pattern in JavaScript.
  ```javascript
  const f = (a, b) => a + b;
console.log(f(3, 4)); // 7
``` 
- In this example, the function f returns the result of a + b. The return keyword and curly braces are omitted. This is called implicit return. This is a common pattern in JavaScript.


## Differences Between Function and Arrow Syntax 
  -There are some major differences between arrow syntax and function syntax.
  1 - Arrow syntax does not have its own this keyword. Instead, it uses the this keyword from the outer scope. This is called lexical scoping. This is a common source of confusion for beginners. For example, the code below will print undefined to the console.
  ```javascript 
  const f = () => {
  console.log(this);
};
f(); // undefined
```
- In the example above, the function f uses the this keyword, but it does not have its own this keyword. Instead, it uses the this keyword from the outer scope. This is called lexical scoping. This is a common source of confusion for beginners.

2 - Arrow syntax does not have its own arguments keyword. Instead, it uses the arguments keyword from the outer scope. This is called lexical scoping. This is a common source of confusion for beginners. For example, the code below will print 3 to the console.
```javascript
const f = () => {
  console.log(arguments[0]);
};
f(3); // 3
```
- In the example above, the function f uses the arguments keyword, but it does not have its own arguments keyword. Instead, it uses the arguments keyword from the outer scope. This is called lexical scoping. This is a common source of confusion for beginners.

3 - Arrow syntax does not have its own super keyword. Instead, it uses the super keyword from the outer scope. This is called lexical scoping. This is a common source of confusion for beginners. For example, the code below will print 3 to the console.
```javascript
const f = () => {
  console.log(super.a);
};
const obj = {
  a: 3,
  f: f
};
obj.f(); // 3
```
- In the example above, the function f uses the super keyword, but it does not have its own super keyword. Instead, it uses the super keyword from the outer scope. This is called lexical scoping. 

4 - Arrow syntax does not have its own new.target keyword. Instead, it uses the new.target keyword from the outer scope. This is called lexical scoping. This is a common source of confusion for beginners. For example, the code below will print undefined to the console.
```javascript 
const f = () => {
  console.log(new.target);
};
new f(); // undefined
```
- In the example above, the function f uses the new.target keyword, but it does not have its own new.target keyword. Instead, it uses the new.target keyword from the outer scope. This is called lexical scoping. This is a common source of confusion for beginners.
  


5 - No automatic hoisting. You are only allowed to use the function after it was declared. This is generally considered a good thing for readability. For example, the code below will throw an error.
```javascript 
f(); // ReferenceError: f is not defined
const f = () => {
  console.log("hello");
};
```
- In the example above, the function f is not hoisted. This is generally considered a good thing for readability.

 6 - More minimalistic syntax. This is especially true for anonymous functions and single-line functions. For this reason, this way is generally preferred when passing short functions as arguments to other functions. For example, the code below will print 7 to the console.
 ```javascript
  const arr = [1, 2, 3, 4];
const sum = arr.reduce((a, b) => a + b);
console.log(sum); // 10
```
- In the example above, the function passed to reduce is an arrow function. This is a common pattern in JavaScript.


### Rest Arguments 
- Sometimes you want to pass an unknown number of arguments to a function. This is called a rest argument. The syntax is:
```javascript 
const f = (...args) => {
  console.log(args);
};
f(1, 2, 3); // [1, 2, 3]
```
- In the example above, the function f has a rest argument called args. This is a common pattern in JavaScript. The rest argument is an array that contains all the arguments passed to the function. In this case, the array contains the numbers 1, 2, and 3. 

## higher order functions 
- A higher-order function is a function that takes another function as an argument or returns another function. This is a common pattern in JavaScript. For example, the code below will print 7 to the console.
```javascript
const f = (a, b) => a + b;
const g = (a, b, h) => h(a, b);
console.log(g(3, 4, f)); // 7
```
- In the example above, the function g is a higher-order function because it takes another function as an argument. The function f is passed as an argument to g. The function g then calls the function f and returns the result. 


  ## Solutions to Problem
- Now let's apply these different ways of writing JavaScript functions to solve this problem.

  - Function Syntax :  
  
  ```javascript
   var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};


 - Arrow Syntax : 
 ```javascript
  var createHelloWorld = () => {
      return () => {
          return "Hello World";
      }
  };
  ```

  - Omit Return Keyword : 
  ```javascript
  var createHelloWorld = () => () => "Hello World";
  ```

  - Differences Between Function and Arrow Syntax : 
  ```javascript
  var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};
  ```

  - Rest Arguments : 
  ```javascript
  var createHelloWorld = (...args) => {
    return () => {
        return "Hello World";
    }
};
  ```

  - Higher Order Functions : 
  ```javascript
  var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};
  ```


  ## Conclusion
- In this article, we learned about different ways of writing JavaScript functions. We learned about function syntax, arrow syntax, omitting the return keyword, differences between function and arrow syntax, rest arguments, and higher-order functions. We also applied these different ways of writing JavaScript functions to solve a problem. 