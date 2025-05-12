const user = {
  username: "albert",
  email: "albert@eldohub.co.ke",
  age: 23,
  role: "admin",
  login: function () {
    console.log("User logged in");
  },
  logout: function () {
    console.log("User logged out");
  },
  getProfile: function () {
    return `${this.username} is ${this.age} years old and has the email ${this.email}`;
  },
};

const manager = Object.create(user); // create a new object that inherits from the user object

console.log(user.getProfile());

console.log(manager.getProfile());
console.log(manager.role);
manager.role = "manager"; // add a new property to the manager object
manager.username = "caroline";
manager.email = "caroline@gmail.com";

console.log(manager.getProfile());

const receptionist = Object.create(user); // create a new object that inherits from the user object
console.log(receptionist.getProfile());
receptionist.role = "receptionist"; // add a new property to the receptionist object
receptionist.username = "lydia";
receptionist.email = "lydia@gmail.com";
console.log(receptionist.getProfile());
receptionist.login();

console.log(user);

const colors = ["red", "green", "blue", "yellow"]; // by default an array inherits from the built in Array object

console.log(typeof Array);

const newList = new Array("jane", "joe", "james"); // create a new array using the Array constructor
console.log(newList);

console.log(newList.length);

newList.sort(); // sort the array in ascending order
console.log(newList);

// prototype chaining - the process of creating a new object that inherits from an existing object