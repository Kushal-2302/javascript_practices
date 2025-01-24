// Create a function that will return an integer number corresponding to the amount of digits in the given integer num. without using length method in js

function countDigits(num) {
    // If the number is negative, make it positive
    // if (num < 0) {
    //     num = -num;
    // }
    
    // Initialize the digit count
    let count = 0;
    
    // Loop until num becomes zero
    while (num > 0) {
        count++;
        num = Math.floor(num / 10); // Remove the last digit
    }
    
    // If the number was 0, it has one digit
    // if (count === 0) {
    //     count = 1;
    // }


    // using for loop (we can also run this code only using this for this loop)
    // for(count=0;count <= num ; count++){
    //     num = Math.floor(num / 10);
    // }
    
    return count;
}

// Example usage
console.log(countDigits(86951)); // Output: 5
// console.log(countDigits(-987));  // Output: 3
// console.log(countDigits(0));     // Output: 1
