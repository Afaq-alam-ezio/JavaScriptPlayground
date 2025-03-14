// 1. Basic condtional statement below
if(true){

    console.log("hello");
}


// 2. Basic condtional statement with else below
if(true){

    console.log("hello");
}
else{

    console.log("hii");
}


// 3. Basic condtional statement with loose checking below
if(2 == "2"){

    console.log("executed");
}


// 4. Basic condtional statement with tight checking below
if(2 === "2"){

    console.log("executed");
}


// 5. Basic condtional statement with multiple if using else if below
if(5 > 1){

    console.log("hii");
}
else if(6 < 5){

    console.log("bye");
}
else{

    console.log("ff");
}


// 6. Implicit condtional statement below, better avoid it
if(true) console.log("hii");

// if(true) console.log("hello"), console.log("byee");          this one is correct but avoid it 


// 7. Switch case condtional statement below
// if any one " break " keyword missed then all cases below with matched case will get executed
let price = 100;

switch (price){

    case 100 :
        console.log(`price is ${price}`);
        break;
    case 300 :
        console.log(`price is ${price}`);
        break;
    case 400 :
        console.log(`price is ${price}`);
        break;
    case 500 :
        console.log(`price is ${price}`);
        break;

    // case default :       no need to write case here
        default:
        console.log(`price is ${price}`);
        // break;           also no need to write break here
}


// 8. Nullish Coalescing operator : " ? "
// it simply assigns the true value to a variable, basically opreates on " null " and " undefined "
let val;

// val = null ?? undefined;     undefined
// val = undefined ?? null;     undefined     
// val = undefined ?? 10;          10           same for null
// val = 10 ?? undefined           10           same for null
// val = 10 ?? 50                  50           first true value is assgned
// val = true ?? 20 ?? 50 ?? null  true         true is assigned as it a " true " value

// val = 50 ?? 100 ?? 80            50          as the first true value found is 50

console.log(val);


// 9. Basic ternary operator below
let num = 100;

// no need to mention if below, will give error
// if (num < 1000) ? console.log("yes num is smaller") : console.log("no, num is greater");

// instead use :
(num < 1000) ? console.log("yes num is smaller") : console.log("no, num is greater");
