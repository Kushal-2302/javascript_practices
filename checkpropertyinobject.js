// function to check if given property exists in the passed obj or not

function checkProperty(obj, property) {
   let  hasproperty = obj.hasOwnProperty(property);
    return hasproperty  
}

// Example usage:
const obj = { 
    place: "bengaluru", 
    country: "India"
};

console.log(checkProperty(obj, 'place')); // true
console.log(checkProperty(obj, 'name')); // false
