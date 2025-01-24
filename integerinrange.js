function intWithinBounds(n, lower, upper) {
    // Check if n is an integer
    // if (!Number.isInteger(n)) {
    //     return false;
    // }
    let num = Number.isInteger(n);

    // Check if n is within the bounds of lower and upper
	if(num > lower && num < upper){
        return true;
    }else{
        return false;
    }
   
}
console.log(intWithinBounds(4.5,3,8))