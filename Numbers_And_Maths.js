const num = 1000000;
console.log(num);

const nums = new Number(100.3654644);
console.log(nums);

console.log(nums.toFixed(2));
console.log(nums.toPrecision(4));

// conversion is into Indian format
console.log(num.toLocaleString()); 

// consversion is into US format
console.log(num.toLocaleString("En-us"));

// Exploring Math library
console.log(Math.abs(-654));
console.log(Math.round(564.24));
console.log(Math.ceil(564.24));
console.log(Math.floor(564.24));
console.log(Math.min(564, 24, 5));
console.log(Math.max(564, 24, 7));

