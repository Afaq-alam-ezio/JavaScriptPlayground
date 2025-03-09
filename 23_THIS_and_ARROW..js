// basic use of " this " keyword
let obj = {

    userName : "ezio",

    // func : function() { console.log(`name is ${userName}`); }
    show : function() { 

        // console.log(`name is ${userName}`);      // only username will also work but see below 
        console.log(`name is ${this.userName}`);    // " this " is pointing to the  current  object that's why
                                                    // it also has the property " userName ", therefore we used it 
    
        console.log(this);                  // { userName: 'ezio', show: [Function: show] }, it points to whole data in obj
        
    }
}

obj.show();


// Can't use " this " inside a function as " this " never points to any function but only " Objects "
let greet = function(){

    let name = "ez";
    console.log(this.name);     // undefined
 
    console.log(this);     // will give various properties as output as " greet() " is in a global scope
}

greet();


// Basic Arrow function

// 1. below " Arrow() " will not run as it is not called by anyone also, code on line 39 will give properties of global scope
() => {

    console.log("hello");
    // console.log(this);       
    
}

// 2. " Arrow() " assigned to a variable, Basically " Arrow() " doesn't have their own " this " thus they inherit from global scope
let user = () =>{

    console.log("hello");
    console.log(this);      // output is {} in nodejs but  " window.properties " in browser console
}

user();


// How to write and make an " Arrow() " short

// 1. Normal " Arrow() " below
let code = (para1, para2) => {

    return para1 + para2;
}
console.log(code(5, 6));

// 2. Shortening above " Arrow() " below by removing " return " keyword that is also called " Implicit return "
let code1 = (para1, para2) => para1 + para2;
console.log(code1(3, 6));

// 3. Some changes in above " Arrow() " 
let code2 = (para1, para2) => (para1 + para2);       // just enclosed returning value in parenthesis
console.log(code2(5, 7));


// How to properly return an Object

// 1. just a sample object below :

 let retObj = () =>{

    return {name : "ez", sal : 121213};       // output will be { name: 'ez', sal: 121213 } but same will be undefined check below
}

console.log(retObj());   


// 2. shortened version of above that returns " undefined "

let retObj2 = () => {name : "ez", sal : 12121};      //  will be undefined instead write by wrapping the return obj in a () like in below code 

console.log(retObj2());


// 3. corrected the above code
let retObj3 = () => ({name : "ez", sal : 121213});

console.log(retObj3());
