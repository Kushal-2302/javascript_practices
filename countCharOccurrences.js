// count occurrence of a char in string using object

function countCharOccurrences(str){
    const charCount = {};    //Initializes an empty object charCount to store the count of each character
    for(const char of str){  // Begins a for...of loop to iterate over each character in the string str
        if(charCount[char]){  // Checks if the character already exists in the charCount object. If it does, increments its count by 1. Otherwise, sets the count to 1
            charCount[char]++;
        }else{
            charCount[char] = 1;
        }
    }
    return charCount;
}
const string = "bengaluru"
const result = countCharOccurrences(string);
console.log(result);
