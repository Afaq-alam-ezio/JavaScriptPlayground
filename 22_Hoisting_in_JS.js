// Below is a nested function
function show1(para){

    let age = 10;
    function show2(){

        let sal = 154200;
        console.log(`Name is ${para} and age is ${age} and salary is ${sal}`);
    }

    show2();        // we should call it here
}

show1("user");
// show2();     this will say show2() is not defined as already its scope is inside show1() thus it ended there


// basic Scope of variables in a nested function
function addOne(para1){

    // return para1 + 1;        this will make below code unreachable 

    console.log(para1 + 1);
    function addtwo(para2){

        return para2 + 1;
    }

    console.log(addtwo(6));
}

console.log(addOne(5));
// console.log(addtwo(6));      will not work as its scope ended on line 25 


// HOISTING IN JS

// below Hoisting a function i.e. fun1() will work as the function is not under any variable
fun1(50);

function fun1(para){

    console.log(para * 2);
}

// below will NOT work as the function is under a variable

fun2(50);       // this will throw error that fun2(para) is not declared       

let fun2 = function(para){

    console.log(para * 2);
}