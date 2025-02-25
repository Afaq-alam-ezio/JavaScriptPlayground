let x = "apple";
let y = x;

x = "ball";     // as changing x will never change value of y

console.log(x);
console.log(y);


// CAN'T USE BELOW METHOD 

// let objOne = {

//     let name : "Afaq",
//     let roll : 1,
//     let email : "Ezio@gmail.com"
// }

let objOne = {
    name : "Ezio",
    sem : 6,
    Email : "Ezio@gmail.com"
}

let objTwo = objOne;

// NEVER USE BELOW METHOD TO PRINT, ONLY WORKS IN JAVA 

// console.log("Value of objOne = " + objOne);
// console.log("Value of objOne = " + objTwo);

console.log("Value of objOne = " , objOne);
console.log("Value of objOne = " , objTwo);

objOne.name = "Afaq";       // as same reference is given to objOne and objtwo thus change in any 
                            // one object will reflect to other object as well 

console.log(objOne);
console.log(objTwo);
