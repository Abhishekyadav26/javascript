const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 200,
    isAvaiable: true,

    chainhi: function(){
        console.log("kire");
        
    } // issa nhi jaegekarna hai code l lag 
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    Writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
