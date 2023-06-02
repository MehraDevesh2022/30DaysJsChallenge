## Overview

- This question is intended as an introduction to closures. In JavaScript, functions have a reference to all variables declared in the same scope as well as any outer scopes. These scopes are known as the function's lexical environment. The combination of the function and it's environment is known as a closure. Closures are useful for many things, including partial application, currying, and data hiding.

  

### Closure Example

- In Javascript, you can declare functions within other functions and return them. The inner function has access to any variables declared above it. This is an example of a closure.

  

```javascript

function createAdder(a) {

return function add(b) {

const sum = a + b;

return sum;

}

}

addTo2(5); // 7

addTo2(10); // 12

```

- In the above example, the inner function add has access to the variable a, which was declared in the outer function. This is a closure. The inner function add is returned from the outer function createAdder. The variable addTo2 is assigned to the inner function add. The variable addTo2 is a closure. It has a reference to the function add and the variable a, which was declared in the outer function createAdder.

  

## Closures Versus Classes

- Closures are often used in place of classes in JavaScript. Classes are a relatively new addition to JavaScript, and they are syntactic sugar over JavaScript's prototypal inheritance. Closures are more flexible than classes, and they can be used to implement many of the same patterns as classes. Closures are also more efficient than classes, because they do not require the use of the new keyword. The new keyword is a relatively expensive operation in JavaScript.

- You may notice that in the above example createAdder is very similar to a class constructor .

  

```javascript
class Adder {
constructor(a) {
this.a = a;
}
add(b) {
const sum = this.a + b;
return sum;
}
}
const addTo2 = new Adder(2);
addTo2.add(5); // 7
addTo2.add(10); // 12
```


- The above example is equivalent to the closure example. The class Adder is a constructor function. The constructor function is called with the new keyword to create an instance of the class. The instance of the class is assigned to the variable addTo2. The instance of the class has a reference to the function add and the variable a, which was declared in the constructor function.

-Besides differences in syntax, both code examples essentially serve the same purpose. They both allow you to pass in some state in a "constructor" and have "methods" that access this state.

- One key difference is that closures allow for true encapsulation. In the class example, there is nothing stopping you from writing addTo2.a = 3; and breaking it's expected behavior. However, in the closure example, it is theoretically impossible to access a. This is because a is not a property of the closure, it is a variable declared in the closure's lexical environment. The only way to access a is to call the closure, which will return the sum of a and b. This is known as data hiding. Data hiding is a key feature of object oriented programming, and it is a feature that closures provide.

- Another key difference is that closures are more flexible than classes. In the closure example, you can create multiple closures with different values for a. In the class example, you can only create one instance of the class with a given value for a. This is because the class example uses the this keyword, which is bound to the instance of the class. The closure example uses a variable declared in the closure's lexical environment, which is not bound to any particular instance of the closure.

- Closures are also more efficient than classes. The class example uses the new keyword, which is a relatively expensive operation in JavaScript. The closure example does not use the new keyword, so it is more efficient.

<<<<<<< HEAD
- Another difference is how the functions are stored in memory. If you create many instances of a class, each instance stores a single reference to the prototype object where all the methods are stored. Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. For this reason, classes can be more efficient, particularly in the case where there are many methods. However, this is not always the case. If you only need one instance of a class, then closures are more efficient. This is because the closure example does not use the new keyword, which is a relatively expensive operation in JavaScript.
=======
-Another difference is how the functions are stored in memory. If you create many instances of a class, each instance stores a single reference to the prototype object where all the methods are stored. Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. For this reason, classes can be more efficient, particularly in the case where there are many methods. However, this is not always the case. If you only need one instance of a class, then closures are more efficient. This is because the closure example does not use the new keyword, which is a relatively expensive operation in JavaScript.
>>>>>>> a7dc564fe113481a9a63ff42ce855bb20b138a4d

  
  

## Approach 1: Increment Then Return

- We declare a variable currentCount and set it equal to n - 1. Then inside the counter function, increment currentCount and return the value. Note that since currentCount is modified, it should be declared with let rather than const.

  
```javascript
var createCounter = function(n) {
let currentCount = n - 1;
return function() {
currentCount += 1;
return currentCount;
};
};
```

  

## Approach 2: Postfix Increment Syntax

-JavaScript provides convenient syntax that returns a value and then increments it. This allows us to avoid having to initially set a variable to n - 1.

```javascript
var createCounter = function(n) {
return function() {
return n++;
};
};
```

  

## Approach 3: Prefix Decrement and Increment Syntax

-JavaScript provides convenient syntax that decrements a value and then returns it, as well as increments a value and then returns it. This allows us to avoid having to initially set a variable to n + 1.

```javascript
var createCounter = function(n) {
--n;
return function() {
return ++n;
};
};
```

  

## Approach 4: Postfix Increment Syntax With Arrow Function

  

-We can use the postfix increment syntax with an arrow function to make the code more concise.

  

```javascript
var createCounter = function(n) {
return () => n++;
};
```

  
  

## conclusion

- Closures are a powerful feature of JavaScript. They allow you to create functions that have access to variables declared in an outer scope. This is useful for many things, including partial application, currying, and data hiding. Closures are often used in place of classes in JavaScript. Closures are more flexible than classes, and they can be used to implement many of the same patterns as classes. Closures are also more efficient than classes, because they do not require the use of the new keyword. The new keyword is a relatively expensive operation in JavaScript.

  

## Reference

- Leetcode question : https://leetcode.com/problems/counter/?utm_campaign=PostD2&utm_medium=Post&utm_source=Post&gio_link_id=xogkVqBo

- https://www.freecodecamp.org/news/learn-javascript-closures-in-n-minutes/