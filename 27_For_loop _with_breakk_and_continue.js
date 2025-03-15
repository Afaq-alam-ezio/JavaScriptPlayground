// 1. Below   a basic for loop 
console.log("Code 1 below : ")
for (let i = 0; i < 10; i++) {
    
    console.log("the current element has value = " + i);
}
console.log("\n");


// 2. Below   a basic for loop that prints Table
console.log("Code 2 below : ")
console.log("Below   the table of 5");
for (let i = 1; i < 11; i++){

    console.log("5 * " + i + " = " + 5*i);
}
console.log("\n");


// 3. below  table from 1 to 10 using nested for loop
console.log("Code 3 below : ")
for (let i = 0; i < 11; i++) {

    console.log("Below  the Table of " + i);
    for (let j = 0; j < 11; j++) {
        
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log("\n");
}


// 4. Below we will be Breaking the loop when " i == 5 " 
console.log("Code 4 below : ")
for (let i = 0; i < 10; i++) {
    
    if(i == 5){
        console.log("Loop terminated as i == 5"); 
        console.log("\n");
        break;
    }
    console.log(i);
}


// 5. Below we will be skipping the loop when " i == 5 "
console.log("Code 5 below : ")
for (let i = 0; i < 11; i++) {
    
    if (i == "5"){              // here we could have used " i == 5" simply, but " i == "5" " means that string of 5 was converted to number of 5 internally

        console.log("Loop skipped an iteration as i == 5");
        continue;
    }
    console.log(i);
}