const myobject = {
    js : "javascript",
    cpp : "c++",
    rp : "ruby",
}
for (const key in myobject) {
    // console.log(`${key} => ${myobject[key]}`)
}

const program = ["js","py","cpp","c","java","html"]
for (const key in program) {
    // console.log(key); array main keys uske index no. hote hain
    console.log(program[key])
}