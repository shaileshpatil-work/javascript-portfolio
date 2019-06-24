// If you want to create objects of the same type(same properties and methods) then use constructor function.
// Constructor function name should start with Capital.
// Constructor function will act as blueprint for other objects.
function Person(name, sname) {
    this.name = name;
    this.sname = sname;
}

// Created Person1 object from Person function using new keyword.
// new keyword use to create Object.
let Person1 = new Person("Amol", "Rai");
Person1.name //Amol
Person1.sname //Rai

//This will add location property to Person1 Object not to Person constructor function.
Person1.location = "pune";

// If we want to add location property to constructor function then we have to use prototype.
Person1.prototype.location = "Mumbai";

//Prototype gives us things(Properties and Methods) those are written in constructor function.
Date.prototype
//output

// { constructor: ƒ, toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, … }
// constructor: ƒ Date()
// getDate: ƒ getDate()
// getDay: ƒ getDay()
// getFullYear: ƒ getFullYear()
// getHours: ƒ getHours()
// getMilliseconds: ƒ getMilliseconds()
// getMinutes: ƒ getMinutes()
// getMonth: ƒ getMonth()
// getSeconds: ƒ getSeconds()
// getTime: ƒ getTime()
// getTimezoneOffset: ƒ getTimezoneOffset()
// getUTCDate: ƒ getUTCDate()
// getUTCDay: ƒ getUTCDay()
// getUTCFullYear: ƒ getUTCFullYear()
// getUTCHours: ƒ getUTCHours()
// getUTCMilliseconds: ƒ getUTCMilliseconds()
// getUTCMinutes: ƒ getUTCMinutes()
// getUTCMonth: ƒ getUTCMonth()
// getUTCSeconds: ƒ getUTCSeconds()
// getYear: ƒ getYear()
// setDate: ƒ setDate()
// setFullYear: ƒ setFullYear()
// setHours: ƒ setHours()
// setMilliseconds: ƒ setMilliseconds()
// setMinutes: ƒ setMinutes()
// setMonth: ƒ setMonth()
// setSeconds: ƒ setSeconds()
// setTime: ƒ setTime()
// setUTCDate: ƒ setUTCDate()
// setUTCFullYear: ƒ setUTCFullYear()
// setUTCHours: ƒ setUTCHours()
// setUTCMilliseconds: ƒ setUTCMilliseconds()
// setUTCMinutes: ƒ setUTCMinutes()
// setUTCMonth: ƒ setUTCMonth()
// setUTCSeconds: ƒ setUTCSeconds()
// setYear: ƒ setYear()
// toDateString: ƒ toDateString()
// toGMTString: ƒ toUTCString()
// toISOString: ƒ toISOString()
// toJSON: ƒ toJSON()
// toLocaleDateString: ƒ toLocaleDateString()
// toLocaleString: ƒ toLocaleString()
// toLocaleTimeString: ƒ toLocaleTimeString()
// toString: ƒ toString()
// toTimeString: ƒ toTimeString()
// toUTCString: ƒ toUTCString()
// valueOf: ƒ valueOf()
// Symbol(Symbol.toPrimitive): ƒ[Symbol.toPrimitive]()
// __proto__: Object

//We can use these methods in following way.
let month = new Date();
month.getDate();
//Explanation
// We created variable month using inbuilt Date() constructor function.
// getDate() is method which is written in Date() constructor function.
// we can access it by using variablename.getDate()



// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype