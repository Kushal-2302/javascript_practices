// function to calculate average of two numbers and also the product and return as an object

function calculateAverageAndProduct(num1, num2) {
    const avg = (num1 + num2) / 2;
    const prod = num1 * num2;
    return {                
        average: avg,
        product: prod
    };
}
const result = calculateAverageAndProduct(5, 10);
console.log(result); 
