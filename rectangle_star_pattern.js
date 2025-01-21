// function rectangleStarPattern(rows){
//     // let rows = 5;
//     for(i=0;i<rows;i++){
//         for(j=0;j<rows;i++){
//             console.log("* ");
//         }
//     }
// }
// rectangleStarPattern(5)


// program without using return function
// function rectangleStarPattern(rows) {
//     for (let i = 0; i < rows; i++) {
//         let starPattern = '';
//       for (let j = 0; j < rows; j++) {
//         starPattern += '* ';
//       }
//       console.log(starPattern);
//     }
//   } 
//   rectangleStarPattern(7);

// The above program will have O(n^2)(time complexity) and O(n)(space complexity)



// program with using return function
  function rectangleStarPattern(rows) {
    let result = ''; //Initialize an empty string for the entire rectangle
    for (let i = 0; i < rows; i++) {
      let starPattern = ''; // Initialize an empty string for the current row
      for (let j = 0; j < 6; j++) {
        starPattern += '* '; // Append '* ' to the string
      }
      result += starPattern + '\n'; // Append the current row to the result with a newline
    }
    return result; // Return the complete star pattern
  }
  
  // Example usage
//   const starPatternString = rectangleStarPattern(3);
//   console.log(starPatternString);
  console.log(rectangleStarPattern(4));

//   The above program will have O(n^2)(time complexity) and O(n^2)(space complexity)
  
  