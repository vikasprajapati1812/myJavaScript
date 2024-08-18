// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(person.fullName());    // This will return "John Doe":

// ............

// With the call() method, you can write a method that can be used on different objects.
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1)); // This will return "John Doe":

// Call method with arguments

const personn = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const personn1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(personn.fullName.call(personn1, "Oslo", "Norway"));

//////////////////////Apply/////////////////////

// With the apply() method, you can write a method that can be used on different objects.
// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

const pperson = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const pperson1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(pperson.fullName.apply(pperson1, ["Oslo", "Norway"]));


////////////////////////////////////////Bind.............

// Sometimes the bind() method has to be used to prevent losing this.

// In the following example, the person object has a display method. In the display method, this refers to the person object:


const peerson = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = peerson.fullName.bind(member);