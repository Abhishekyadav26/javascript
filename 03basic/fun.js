function sayMyName(){
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("i");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calprice1(num1){ // only return one value
    return num1
}
const number1 = console.log(calprice1(25,526,908));

function calprice2(...num1){ // if we want to return many value ...num1 is used in form of array
    return num1
}
const number2 = console.log(calprice2(25,526,908,23));

// const user ={
//     username: "Abhishek",
//     price: 199   
// }

function handleobject(anyobject){
    console.log(`username ${anyobject.username} price ${anyobject.price}`);
}

// handleobject(user)
handleobject(
    {
        username: "Abhi", // we can directly pass a object into function
        price: 399
    }
)

const array =[100,200,300,400]
function secvalue(array){
    return array[1];
}

console.log(secvalue(array));