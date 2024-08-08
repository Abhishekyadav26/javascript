// ways to declare promises in js
const promisesone = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("async task is compelete")
        resolve()
    },1000)
})
promisesone.then(function(){
    // console.log('consumed');
})
// ------------------------------------------------
new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log('async 2 resolved');
})

// ------------------------------------------------

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"abhishek",password:"1234"}) // we can pass any data in resolve
    },1000)
})
promisethree.then(function(userdetails){
    // console.log(userdetails);
})
// -------------------------------------------------


const promisesfour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"abhishek26",email:"abcd@example.com"})
        }else{
            reject('ERROR : something went wrong')
        }
    },1000)
})
// promisesfour.then().catch()
promisesfour
.then(function(user){
    // console.log(user);
    return user.username
},1000)
.then((username)=>{
    // console.log(username);
})
.catch((error)=>{
    // console.log(error);
})
.finally(()=>{
    // console.log("promises is resolved");
})
// ---------------------------------------------------------

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",email:"js@example.com"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumefive(){
    try{
        const response = await promisefive
        // console.log(response);
    }catch(error){
        // console.log(error);
    } 
}

consumefive()

//------------------------------------------------------------

// async function getalluserdata(){
//     try {
//         const response = await fetch('https://api.github.com/users/abhishekyadav26')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: error");
//     }
// }
// ---------------------------------------------------------------------------

fetch('https://api.github.com/users/abhishekyadav26')
.then(function(response){
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
