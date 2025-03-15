// 1. Below is a basic while loop 
let i = 0;
while(i < 12){

    console.log(i);
    i = i + 1;          // or i++;
}


// 2. Below is a Loop to iterate over an Array
let Arr = ["harry", "smith", "conner", "ezio"];

let j = 0;
while(j < Arr.length){          // we have written " Arr.length " and not " Arr.length() " as length is a property and not a method

    console.log(Arr[j]);
    j++;
}


// 3. Below is a Do while loop
let x = 0;
do {

    console.log(x);
    x++;    
} 
while (x < 11);