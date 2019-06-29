//https://www.w3schools.com/jsref/jsref_reduce.asp

//It works on array only
//Reduce method reduces array into single value.
//Reduce method executes a provided function for each value of the array(from left to right).
//Return value of the variable is stored in accumulator(result/total).
//This method does not change original array.

let a = [10, 20, 30, 40];

let b = a.reduce((total, current) => total + current);
console.log(b)

let c = a.reduce((total, current) => total - current);
console.log(c);