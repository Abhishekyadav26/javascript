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
    console.log(userdetails);
})
// -------------------------------------------------

const promisesfour = Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"abhishek26",email:"abcd@example.com"})
        }else{
            reject('ERROR : something went wrong')
        }
    },1000)
})