let obj = {

    userName : "ezio",

    // func : function() { console.log(`name is ${userName}`); }
    show : function() { 

        // console.log(`name is ${userName}`);      // only username will also work but see below 
        console.log(`name is ${this.userName}`);    // " this " is pointing to the  current  object that's why
                                                    // it also has the property " userName ", therefore we used it 
    
        console.log(this);
        
    }
}