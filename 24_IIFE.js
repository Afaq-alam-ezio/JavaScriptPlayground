// IIFE : immediately invoked function expressions

// 1. Basic IIFE 
(function (){

    console.log("hello, IIFE called");
})();                                           // " ; " at the end is very necessary, as without it rest next IIFE will only give ERROR


// 2. IIFE which is also called " SIMPLE IIFE"

// 1. Below is normal function 
(function (para1){

    console.log(`hello ${para1}`);
})("ezio");

// 2. Below is Arrow function
(() => {
    console.log("Arrow hello");
})();

// 3. Below is shortened Arrow function will not work 
// (() => console.log("hello");
// )();


// 3. IIFE which is also called " NAMED IIFE" as the function below has name i.e. " greet() "
(function greet(){
    
    console.log("hello Named IIFE");
})();