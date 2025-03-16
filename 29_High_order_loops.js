// 1. Below is basic " forof " loop on a string
let x1 = "hello";
for(let s of x1){

    console.log(s);
}


// 2. Below is basic " forof " loop on an array having numbers
let x2 = [1, 2, 3, 4, 5];
for(let s of x2){

    console.log(s);
}


// 3. Below is basic " forof " loop having Strings 
let x3 = ["hello", "bye", "welcome", "text"];
for(let s of x3){

    console.log(s);
}


// 4. Below is " forof " loop on a MAP
let myMap = new Map([[1, "a"], [2, "b"], [3, "c"]]);

// inserting values in a MAP below
myMap.set(4, "rizz");
console.log(myMap);             // normal view of MAP

//below is printing according to conventional c.log()
for (let s of myMap){
    
    console.log(`key is ${s[0]} and value is ${s[1]}`);
}

// below is for proper structured printing using both " key and value " at same time
for (let [key, val] of myMap){

    console.log(key , ":", val);
}


// IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP BELOW : 

// " forOf " loop will not work on objects


// 5. Below is a " forIn " loop for Objects
let x4 = {
    1 : "hello",
    2 : "bye",
    3 : "citadel"
};

for (let s in x4){
    
    console.log(`key is ${s[0]} and value is ${x4[s]}`);
}