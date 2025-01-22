// write a function to extract all numbers in a given string

function extractNumbers(inputString) {
    let numbers = [];
    let currentNumber = "";
  
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] >= '0' && inputString[i] <= '9') {     // checking whether string is a number or not
        currentNumber += inputString[i];                        
      } else {
        if (currentNumber.length > 0) {
          numbers.push(parseInt(currentNumber));
          currentNumber = "";
        }
      }
    }
  
    // Add the last number if there is one
    if (currentNumber.length > 0) {
      numbers.push(parseInt(currentNumber));
    }
  
    return numbers;
  }
  
  // Example usage:
  const exampleString = "The house number is 1234 and my phone number is 56789.";
  const numbers = extractNumbers(exampleString);
  console.log(numbers); // Output: [1234, 56789]
  