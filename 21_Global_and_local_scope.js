// basic ways of declaring and initializing variables
let a = 10;
const b = 10;
var c = 10;

console.log(a);
console.log(b);
console.log(c);


// Why " var " should be avoided
var c = 40;     // it should have been global

if(true){

    var c = 100;    // it should have been local, but will change the value of c to 100
    // c = 100          will also work and will change the same
}

console.log(c);     // but the local variable C whose scope should have ended inside the if() 
                    // block will still change the value of the global C, 
                    // that's why we should avoid Var keyword as it doesn't respect block scope   


// How let and const recognise and respect block scope
let x = 54;
const y = 232;

if(true){

    let x = 25;
    let y = 625;

    console.log(x);     // will print the local x i.e 25     
    console.log(y);     // will print the local y i.e 625
}

console.log(x);     // will print the global x i.e 54
console.log(y);     // will print the global y i.e 232
