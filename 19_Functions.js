// basic function with no parameters
function say(){

  console.log("hello world");
};

say();

// basic function with parameters
function hey(para1){

    console.log(`hello ${para1}`);
}

hey("ezio");        // hello ezio
hey("");            // hello
hey();              // will print -> " hello undefined ", even if we don't pass args, 
                    // jS will execute the function as JS has a loose typing behavior 

// basic function with default parameters
function good(para1 = "user"){

    console.log(`hello ${para1}`);   
}

// even if we don't pass any arg below, the default value is " user " thus, it will print -> " hello user "
good();

// basic function with return 
function greet(para1){

    return `hello ${para1}`;
}

console.log(greet("ezio"));

// basic function with check on passed args
function check(para1){

    if(!para1){     // can also use -> " if(para1 == undefined) or if(para1 === undefined) or if(!para1) "
    
        console.log("Enter a valid username");
        return 
    }
    return `hello ${para1}`;
}

console.log(check("Croma"));