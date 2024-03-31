const myarr=[1,2,3,4,true,"hello"]
// console.log(myarr[5]);

const newarr= new Array(1,2,3,4,5,6,7)
// console.log(newarr);

// Array methods 
// newarr.push(4)  
// newarr.pop() 
// newarr.unshift(9) // add 9 to 0 index 
// newarr.shift()  
// console.log(newarr.includes(4)); // 
// console.log(newarr.includes(100)); // 
// console.log(newarr.indexOf(2)); 
// const newArr1 = newarr.join() // convert array into string

// console.log(newarr);
// console.log(typeof newArr1

// SLICE , SPLICE
console.log("orginal:",newarr);

const myn1 = newarr.slice(1,3)
console.log("after slice:",myn1);
console.log(newarr);


const myn2 = newarr.splice(1,3)
console.log("after splice:",myn2);
console.log(newarr);
