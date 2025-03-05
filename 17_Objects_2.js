// creating a literal object
let obj = new Object();

obj.id = 101;
obj.name = "Ezio";
obj.marks = 100;

console.log(obj);

// creating a nested object
let user = {
    name : {
        fullName : {
            firstName : "Afaq",
            lastName : "Alam"
        }    
    }
};

console.log(user);
console.log(user.name);
console.log(user.name.fullName);
console.log(user.name.fullName.firstName);

// Merging arrays below
let obj1 = {1 : "a", 2 : "b"};
let obj2 = {3 : "a", 4 : "b"};
let obj3 = {5 : "a", 6 : "b"};

let obj4 = {obj1, obj2, obj3};

console.log(obj4);  

/* 
    output is like collection of objects :
  {
    obj1: { '1': 'a', '2': 'b' },
    obj2: { '3': 'a', '4': 'b' },
    obj3: { '5': 'a', '6': 'b' }
  } 
    
*/


console.log(Object.assign({}, obj1, obj2, obj3));

/*
    output is :

    { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

*/

let obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);

/*
    output is :

    { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

*/


// Getting Keys and Values :

console.log(Object.keys(obj5));         // [ '1', '2', '3', '4', '5', '6' ]

console.log(Object.values(obj5));       // [ 'a', 'b', 'a', 'b', 'a', 'b' ]

console.log(Object.entries(obj5));      /* [
                                                [ '1', 'a' ],
                                                [ '2', 'b' ],
                                                [ '3', 'a' ],
                                                [ '4', 'b' ],
                                                [ '5', 'a' ],
                                                [ '6', 'b' ]
                                            ]
                                        */


console.log(user.hasOwnProperty("name"));       // checks for presence of a " Key "
