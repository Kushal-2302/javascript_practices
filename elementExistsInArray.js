// write a function to find if given element exists in array or not 

function isExists(arr, element) {
    // Use the includes() method to check if the element exists in the array
    return arr.includes(element);
  }
  
  
  const array = ['apple', 'banana', 'cherry'];
  const findElement = 'banana';
  
  const result = isExists(array, findElement);
  console.log(result); // Output: true
  
  