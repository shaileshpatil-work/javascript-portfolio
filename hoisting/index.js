// JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined.

console.log(var1);
var var1;
var1 = 6;
// output -> undefined


num = 5; //variable initalize
console.log(num);
var num; //vaariable declare
// output -> 5

var2 = 6;
console.log(var2);
let var2;
// output -> var2 is not defined. let and const doesn't hoist


// functions are hoisted.
add(4, 5);
function add(a, b) {
    console.log(a + b);
}

// function expressions are not hoisted.
subs(6, 4);
var subs = function (a, b) {
    console.log(a - b);
}