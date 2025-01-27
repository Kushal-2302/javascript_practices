function sumObjectValues(obj) {
    let sum = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') { //Checks if the property is a direct property of the object (not inherited) and if its value is a number.
            sum += obj[key]; //Adds the value of the property to the sum if it passes the checks
        }
    }
    return sum;
}

const studentMarks = { 
    math: 85, 
    english: 78, 
    science: 92, 
    sports: "A" 
};
console.log(sumObjectValues(studentMarks)); // Output will be 255
