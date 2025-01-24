
function createAdder(n) {
    return function(x) {
        return x + n;
    };
}

const add5 = createAdder(5);
console.log(add5(10)); // Output: 15

const add10 = createAdder(10);
console.log(add10(10)); // Output: 20
