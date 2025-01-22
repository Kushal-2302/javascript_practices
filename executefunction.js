// - write a function to accept a function as input and return the result of passed function

function executeFunction(fn) {   // first function 
    return fn();                 // returning second function
  }
  

  function sayHello() {   // second function
    return "Hello world!";
  }
  
  console.log(executeFunction(sayHello)); 
  // Output: Hello, world! 