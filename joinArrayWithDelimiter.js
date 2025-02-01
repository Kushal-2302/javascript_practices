// write a function that accepts an array and returns string with given delimeter

// METHOD 1
/*
function arrToString(arr, delimiter) {
    return arr.join(delimiter);
  }
  
  
  const array = ['apple', 'banana', 'cherry'];
  const delimiter = '-';
  const result = arrToString(array, delimiter);
  console.log(result); // Output: "apple, banana, cherry"
*/


  // METHOD 2
  
  // Function that takes an array and a delimiter
function arrToString(arr, delimiter) {
    // Initialize an empty string to store the result
    let result = '';
  
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // Add the current element to the result
      result += arr[i];
  
      // If it's not the last element, add the delimiter
      if (i < arr.length - 1) {
        result += delimiter;
      }
    }
  
    // Return the resulting string
    return result;
  }
  
  // Example usage:
  
  // Define an array of strings
  const array = ['car', 'bus', 'bike'];
  
  // Define a delimiter, in this case, a comma followed by a space
  const delimiter = ', ';
  
  // Call the function with the array and delimiter, and store the result in a variable
  const result = arrToString(array, delimiter);
  
  // Output the resulting string to the console
  console.log(result); // Output: "apple, banana, cherry"


  