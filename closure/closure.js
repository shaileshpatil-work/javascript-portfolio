// https://www.w3schools.com/js/js_function_closures.asp

let add = (function() {
    let counter = 0;
    return function(){
        return counter + 1;
    }
}());

console.log(add());
