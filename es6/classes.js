// There is no differnce between constructor function and classes.
// Class acts as blueprint to create object of same type.
// Constructor is the same method which gets called when we use new keyword.
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        console.log(`first name is ${this.firstName} and last name is ${this.lastName}`)
    }
}

let user1 = new User("John", "Millar");
console.log(user1.fullName());



// Inheritance
// Extend keyword is used for inheritance.
// It inherit all the properties and methods from parent class
class newUser extends User {}

let user2 = new newUser("Chanan", "Mike");
console.log(user2.fullName());

// If we create new method in newly created class with the same name as preset in parent class then when we call
// that method then it checks that method in child class if it is present in child class then it will executes that
// otherwise it will execute parent class method.

class anotherUser extends User{
    constructor(firstName, lastName, petname) {
        super(firstName, lastName, petname);
        this.petname = petname;
    }
    // Method overriding
    fullName(){
        console.log(`Firstname id ${this.firstName} and petname is ${this.petname}`);
    }
}

let user3 = new anotherUser("Rohit", "Tiwari", "Roh");
user3.fullName();