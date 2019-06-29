// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

//The rest parameter syntax allow us to represent an infinite number of arguments as an array.

const add = (...args) => {
    return args.reduce((total, current) => total + current);
}

console.log(add(1, 2, 3));
console.log(add(40, 50, 60));