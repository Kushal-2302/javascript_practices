//write a function to calculate product of all the elements in the array

function calProduct(arr){
  
    let product = 1;
    for(let i=0;i<arr.length;i++){
        product *= arr[i];
    }
    return product;
}
const array = [5,4,7,1,3,2];
const result = calProduct(array);
console.log(result); //output : 840