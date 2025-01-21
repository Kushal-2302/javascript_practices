//

function palindrom(num){
    let num1 = '';
    let num2 = num.toString();
    for(i=num.length-1;i>=0;i--){
        num1 += num[i];
    }
    if(num2 == num1){
        console.log(num," is palindrom ");
    }else{
        console.log(num," is not palindrom ")
    }
    return num;
}
console.log(palindrom(151));