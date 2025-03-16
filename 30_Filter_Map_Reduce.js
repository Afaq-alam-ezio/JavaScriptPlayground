// 1. Below is a " FILTER() " applied on an array[]
console.log("Code 1 below :");
let x1 = [1, 2, 3, 4, 5, 6];
let x2 = x1.filter(num => num > 3);     // remember, in (num => " IS A CONDITION ")
console.log(x2);


// 2. Below is a " forEach " approach for same as above
console.log("\nCode 2 below :");
let x3 = [1, 2, 3, 4, 5, 6];
let x4 = [];
x3.forEach(num => {
    if(num > 3){
        x4.push(num)
    }
});

console.log(x4);


// 3. Below we'll learn " MAP() " applied on an array[]
console.log("\nCode 3 below :");
let x5 = [1, 2, 4, 5, 6, 3, 7];
let x6 = [];
// condition we have to mention is optional but in filter it was necessary, this necesscity make filter() great
x6 = x5.map(num => {
    if(num > 3){        // will return undefined when condition fails

        return num;
    }
});

// SHORTCUT BELOW
// x6 = x5.map(num => {
//     return num > 3 ? num : null;
// });

console.log(x6);

// 4. CHAINING BELOW
console.log("\nCode 4 below :");
let x7 = [1, 2, 4, 5, 6, 3, 4, 7];
let x8 = x7.map(s => s * 10)
           .filter(s => s > 30)
           .map(s => s * 0.5)
           .filter(s => s > 20);

console.log(x8);


// 5. Below is " Reduce " :
console.log("\nCode 5 below :");
let x9 = [1, 2, 3, 4, 5];
let x10 = x9.reduce((acc, currVal) => {

    return acc + currVal;
}, 0);
// this 0 is value of accumulator assigned to acc above in parameter
console.log(x10);
 