// singleton
// object.create isme singleton 

// two ways to create a object 1. object.create 2. object literals

// object literals

const mysym =Symbol("key1") // declaration of symbol

const jsUser = {
    name: "Abhishek", // in object name is key And abhishek is value 
    age: 18,
    [mysym]:"key1", // use of symbol datatype in object 
    location: "jaipur",
    email: "abhishek@google.com" ,
    islogged: false,
    lastlogindays: ["monday","sunday"] // 
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mysym]); // 

// Object.freeze(jsUser) // when we need not to add any data into object we use freeze
// jsUser.email = "hero@gmail.com"

// console.log(jsUser.email);

jsUser.greeting= function(){
    console.log(`hello world myself ${this.name}`);
}
console.log(jsUser.greeting()); 