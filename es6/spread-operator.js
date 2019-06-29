//Spread operator is used to spread array.
let a = [1, 2, 3, 4];
console.log(...a);

//Spread Operator is used to concatination
console.log([5, 6, 7, ...a]);


//Spread Arguments
const sum = (a, b, c) => a + b + c;
console.log(sum(...a))