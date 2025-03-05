let obj = {
    name : "Ezio",
    rollNumber : 1
};


// below methods will work but what if you want to short the name of key, then use from line 11
console.log(obj["rollNumber"]);
console.log(obj.rollNumber);

// using directly keyName or making keyName short

// 1. Printing Using KeyName
let {rollNumber} = obj;
console.log(rollNumber);

// 2. Printing After Shorting The KeyName
let {rollNumber : roll} = obj;
console.log(roll);
