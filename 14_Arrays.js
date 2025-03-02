// ARRAY BASICS
let myArr = [1, 2, 3, 4];
// console.log(myArr);
// console.log(myArr[2]);

let myArr1 = new Array(2, 5, "hello", 3.14, true);
// console.log(myArr1);

// Below myArr2 is a variable of string datatype and not an array, simply the join() converts the array into a 
// string with the specified seperator e.g. here "," is used thus seperated by ","
let myArr2 = myArr1.join();
// console.log(myArr2);
// console.log(typeof(myArr2));

// ARRAY METHODS
// console.log(myArr.push(6));     // new element 6 is added at end
// console.log(myArr);

// console.log(myArr.pop());    // element at end is popped out
// console.log(myArr);

// IMP : there are functions named as 
//                      1) unshift(x) -> adds element
//                      2) shift()    -> removes element
//                      and both corresponds to push() and pop() respectively.

// But they work just opposite :
//                      1) adds element at start 
//                      2) removes element from start

console.log(myArr);


console.log(myArr.unshift(3));      // it will return new length of array that's why O/P is 5
console.log(myArr);

console.log(myArr.unshift(97));     // it will return new length of array that's why O/P is 6
console.log(myArr);

console.log(myArr.shift());         // it will pop ut front element and return popped out element, that's why O/P is 97
console.log(myArr);

let myArr3 = myArr.join();          // myArr3 is a String datatype variable
console.log(myArr3);

console.log(myArr);
console.log(myArr.includes(3));
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(36));     // returns -1 as element is not found inside array

console.log(myArr.slice(1, 3));     // will return from mentioned start index i.e. 1 till behind one step of end index i.e. 2, element at index 3 will be not included, will not change the base array 
console.log(myArr);

console.log(myArr.splice(1, 3));    // will return from mentioned start index i.e. 1 till end index i.e. 3, it  will change the base array by removing the provided range elements inside splice()
console.log(myArr);


