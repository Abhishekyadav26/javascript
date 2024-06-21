// arr = [{} , {} ,{}] array can also contains objects

const arr = [1,2,3,4]

// for (let i =0 ;i< arr.length ;i++) {
//     console.log(arr[i]);
// }
// for (const num of arr) {
//     console.log(num)
// }


// const greetings ="hello world"
// for (const i of greetings) {
//     console.log(i)
// }

const map = new Map()
map.set('In','India')
map.set('US','America')
map.set('RU','russia')
map.set('In','India')

// console.log(map) This will print same as map format

// for (const Key of map) { this will print inthe form in array
//     console.log(Key)
// } 

for (const [Key ,Value] of map) {
    console.log(Key ,Value) 
} // this will print in the form of
// In India
// US America
// RU russia
// objects are non iterable