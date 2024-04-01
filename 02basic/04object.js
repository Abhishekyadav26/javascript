// const tinderuser = new Object() singleton

const tinderuser = {} 

tinderuser.id = 2311029
tinderuser.name = "Abhi"
tinderuser.isloginin = false

// console.log(tinderuser);
// nested Object
const regularuser = {
    email: "abc@google.com",
    fullname:{
        firstname: "Abhishek",
        lastname: "yadav"
    }
}

// console.log(regularuser.fullname.lastname);

// merging of object..

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}
const obj3 = {5:"E",5:"F"}

// const objmerge ={obj1,obj2,obj3}
// const objmerge = Object.assign({},obj1,obj2,obj3)
// const objmerge ={...obj1,...obj2,...obj3}
// console.log(objmerge);
// console.log(Object.keys(tinderuser));
console.log(tinderuser.hasownproperty('eve'));

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]