let mydate = new Date()
// console.log(mydate); not readable form
console.log(mydate.toDateString()); // readable form hai
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toString());

let mytimestamp = Date.now()
console.log(mytimestamp); // unique every second
console.log();
