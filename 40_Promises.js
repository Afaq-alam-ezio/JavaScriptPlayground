// 1. First basic Promise() below
let pro1 = new Promise(function(resolve, reject){

    // All asyc tasks to be done here

    setTimeout(function(){

        console.log("promise1 called");
        resolve();
    }, 1000)
})

pro1.then(function(){

    console.log("Resolve called");
})


// 2. second basic Promise() below
new Promise(function(resolve, reject){

    setTimeout(function(){
 
        console.log("promise2  done");
        // reject();            this will call the catch(), it is a explicit call;
    }, 1000)
}).then(function(){

    console.log("promise2 resolved");
    
}).catch(function(){

    console.log("error2");
})


// 3. third basic Promise() with Async await below
let pro3 = new Promise(function(resolve, reject){

    setTimeout(function(){

        console.log("Promise3 resolved");
        resolve({name : "ezio", roll : 3});
    }, 1000)
})

async function callPro3(){

    try {
        
        let response1 = await pro3;
        console.log(response1);
    } 
    catch (error) {
        
        console.log(error);
    }
}

callPro3();


// 4. fourth basic Promise() with alternate of Async await below, chaining or say thening is used

// let pro4 = new Promise(function(resolve, reject){

//     setTimeout(function(){

//         setTimeout(function(){

//             console.log("promise4 called");
//         }, 1000)
//     })
// })

// in async we need to add await
async function independentAsyncFunction(){

    try{

        let response2 = await fetch("https://api.github.com/users/Afaq-alam-ezio");
        let data = await response2.json();
        
        console.log(data);
    }
    catch(error){

        console.log("error : " + error);
    }
    finally{

        console.log("Everything done for ezio");
        
    }
}

independentAsyncFunction();


// totally indepenedent thenable and catch for fetch, no need to add await in direct fetch
fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(response){

    return response.json();
})
.then(function(response){

    console.log(response);
})
.catch(function(error){

    console.log("Error :" + error);
})
.finally(function(){

    console.log("Everything done for hitesh sir");
})
