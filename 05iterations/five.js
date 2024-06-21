const coding =["js","cpp","ruby","python"]

// coding.forEach(function (item) {
//     console.log(item)
// }) // foreach is high order loop in which we have to define a function (without function name) in it

//arrow function
// coding.forEach( (item) => {
//     console.log(item)
// })


// function print(item) {
//     console.log(item)
// }

// coding.forEach(print) // we can use foreach in another function (it's just refrence of a function)

// coding.forEach((item ,index, Arr) => {
//     console.log(item , index ,Arr);
// }) // foreach contain information of index,full array,data

// array in objects using foreach
const mycoding = [
    {
        langname : "javascript",
        langfilename : "js"
    },
    {
        langname : "python",
        langfilename : "py"
    },
    {
        langname : "c++",
        langfilename : "cp"
    }
]
mycoding.forEach( (item) => {
    console.log(item.langname);
} )
