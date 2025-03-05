let sym = Symbol("empty");

// Object below will have values in " Key : Value " pairs
let Js = {
    name : "Ezio",
    roll : 1,
    [sym] : "symbolString",
    loggedIn : true,
    fav : ["gaming", "Coding"] // , uncomment this line if uncommenting below "say1()" 

//           -- say1() below --

    // say1() {

    //     console.log("Hello world");
        
    // }

//           -- say2() below --

    // say2(){  

    //     console.log(`hello my name is ${this.name}`);
        
    // }

}

console.log(Js.name);       // correct but not recommended
console.log(Js["name"]);    // correct and recommended
console.log(Js[sym]);       // as symbol is mentioned above like { [sym] : "symbolString" } thus console.log(Js); will give returnType as " Symbol "

console.log(Js);


// Object.freeze(Js);

// Js.name = "hello";  // will not work as Object is locked in above statement

// look above in the object you'll see how this statement lies there
Js.say1 = function() {

    console.log("Hello world");
    
}

// look above in the object you'll see how this statement lies there
Js.say2 = function (){  

    console.log(`hello my name is ${this.name}`);

};


console.log(Js.say1);        // this will return the "returnType" of the "say1()"
console.log(Js.say1());      // this will return the output of the "say1()"

console.log(Js.say2);        // this will return the "returnType" of the "say2()"
console.log(Js.say2());      // this will return the output of the "say2()"
