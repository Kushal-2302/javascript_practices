// write a program to return string with unique values using objects in js

function uniqueCharacters(str) {
    const seenChars = {};  //Initializes an empty object seenChars to keep track of characters that have already been encountered.
    let result = '';      // Initializes an empty string result to build the final string with unique characters.

    for (const char of str) {  //Uses a for...of loop to iterate over each character in the string str
        if (!seenChars[char]) {  //Checks if the character is not already in the seenChars object
            seenChars[char] = true;  //If the character is unique, it adds the character to the seenChars object and appends it to the result string.
            result += char;
        }
    }

    return result;
}
const string = "hello world"; // Assigning string value as "hello world"
const result = uniqueCharacters(string);
console.log(result); // "helo wrd"
