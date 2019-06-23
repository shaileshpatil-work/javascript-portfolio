const message = () => "This is Arrow function";
console.log(message());
//output -> This is Arrow function

let obj = {
    name: "abc",
    sname: "def",
    fullname: function() {
        return `Full name is ${this.name} ${this.sname}`
    }
}
console.log(obj.fullname());
// output Full name is abc def

// this keyword in function
// If this keyword is used inside method then this refers to the object.
// If this keyword is used inside normal function then this keyword refers to window, global object.
// source: https://www.youtube.com/watch?v=gvicrj31JOM

// Don't use arrow functions for the methods. Inside arrow functions this refers to window object.
let objNew = {
    name: "abc",
    sname: "def",
    fullname:  () => {
        return `Full name is ${this.name} ${this.sname}`
    }
}
console.log(objNew.fullname());
// Full name is undefined undefined.


// Constructor function
function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video("Javascript");
//output Video{title: "Javascript"}
