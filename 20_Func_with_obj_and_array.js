// basic function that can handle " n " parameters by using " ' ... ' i.e. Rest operator", returns an array as output
function handle(...para){
    
    return para;
}

console.log(handle(100, 200, 300));         // [100, 200, 300]


// basic function that can handle " n " parameters by using " ' ... ' i.e. Rest operator", returns an array as output
function handle(val1, val2, ...para){
    
    return para;        // this will return para Array and not val1, val2, .... so on
}

console.log(handle(100, 200, 300, 400, 500));       // output is : [ 300, 400, 500 ] only


// Passing object in a function
let user = {
    name : "Ezio",
    salary : 50000
};

function show(anyObj){

    console.log(`Username is ${anyObj.name} and salary is ${anyObj.salary}`);       // here ${this.name} will not work as " this" here doesnt auto point  to any obj. as the user does'nt gurantees to pass an object only in the parameter " anyobj " 
}

show(user);                                 // passing specified oject
show({name : "ezio", salary : 645445});     // passing custom object


// Passing array in a function
let array = [100, 200, 300];

function getFirst(anyArray){

    console.log(anyArray[0]);
}

getFirst(array);                // passing specified array

getFirst([60, 80]);             // passing custom array