// Write a function to print all values of a given object

function printObjectValues(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { //meaning obj has its own property key
            console.log(obj[key]);  //obj[key] is the syntax used to access the value of the property named key on the object obj
        }
    }
}

// student details in the objects
const student = { 
    name: "kushal", 
    age: 22, 
    class: "MCA" 
};
printObjectValues(student);
