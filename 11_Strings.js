let name = "Afaq";
let score = 50;

// below method is old and depriciated
console.log(name + " is name and score is " +  score);

// below method is new and modern, symbol -> `` is on button below esc button
console.log(`hello my name is ${name} and score is ${score}`);

let value = new String("Hello");
let newValue = new String("  Apple  ");

console.log(value);
console.log(value.indexOf("z"));
console.log(value.charAt(1));
console.log(value[2]);
console.log(value.substring(0, 4));
console.log(value.slice(-1, -8));       // return empty string
console.log(newValue.trim());
console.log(newValue.trimStart());
console.log(newValue.trimEnd());
console.log(newValue.replace("App", "Happ"));
console.log(newValue.replace(" ", "*"));        // replaces the first space only as you mentioned there only the first space but would'nt have worked for any other space even if was provided like -> console.log(newValue.replace("   ", "*")); only the first space is taken into account
console.log(newValue.includes("le"));
console.log(newValue.split("l"));       // splitted into array with values ["app", " e"]  "l" is the seperator
console.log(newValue.split("l", 2));       // splitted into array with values ["app", " e"]  "l" is the seperator and only 2 elements are taken
console.log(newValue.split("l", 1));       // splitted into array with values ["app", " e"]  "l" is the seperator and only 1 elements is taken
