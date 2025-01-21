// program with using return function
function rectangleStarPattern(rows) {
    let result = ''; //Initialize an empty string for the entire rectangle
    for (let i = 0; i < rows; i++) {
      let starPattern = ''; // Initialize an empty string for the current row
      for (let j = 0; j < rows-i-1; j++) {
        starPattern += '  '; // Append '* ' to the string
      }
      for (let j = 0; j < 2*i+1; j++) {
        starPattern += '* '; // Append '* ' to the string
      }
      for (let j = 0; j < rows-i-1; j++) {
        starPattern += ' '; // Append '* ' to the string
      }
      result += starPattern + '\n'; // Append the current row to the result with a newline
    }
    return result; // Return the complete star pattern
}
  
  // Example usage
//   const starPatternString = rectangleStarPattern(3);
//   console.log(starPatternString);
console.log(rectangleStarPattern(5));

//   The above program will have O(n^2)(time complexity) and O(n^2)(space complexity)