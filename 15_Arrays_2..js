let Arr1 = [1, 2, 3];
let Arr2 = [4, 5, 6];

// Arr1.push(Arr2)      // adds whole Arr2 at end of Arr1 as a single element, thus affects the main array Arr1
// console.log(Arr1);   // Arr1 + Arr2

Arr1.concat(Arr2)       // Does'nt affects the main array Arr1
console.log(Arr1);      // [1, 2, 3]

// console.log(Arr1[3][2]);    

let Arr3 = Arr1.concat(Arr2);       // [1, 2, 3, 4, 5, 6]
console.log(Arr3);  


// Spread method to merge arrays into one
let Arr4 = [...Arr1, ...Arr2];
console.log(Arr4);

//Direct Array methods()
console.log(Array.isArray("Hello"));            // returns boolean if input is of array datatype
console.log(Array.from("Hello"));               // converts String into Array
console.log(Array.of(Arr1, Arr2));              // concats the 2 arrays as [ [], [] ] a jagged array
console.log(Array.of(...Arr1, ...Arr2));        // Spreads the 2 arrays as [ ] single array 
