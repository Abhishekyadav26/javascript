// immediately invoked function expressions (iife)
// they are the function which we need to run immediatly 

// 
(function chai() {
    console.log(`Db connected`);
})();
// this is called iife which help us to maintain clean global scope.
// at the end of the function () represent call statement of the functon.

(
    (name ) => {
        console.log(`hello ${name}`);
    }
)("world")
//  passing paramerter to iife function