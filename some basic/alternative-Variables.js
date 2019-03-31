// const can't be changed


const isRaining = true; 


// 


const person = {
	age: 27
}
const set = person.age = 26;
person.age = 28;

console.log(set) // output is 26
console.log(person.age) // output is 28





// this is discussed on Modern JS in episode 36 var and le t
// the difference between var and let
// var is function scope. 
// let are block scope

let firstName = "david"; 
 firstName = "jen";

// this works 
console.log(firstName);


// this doesn't work because it's let is a block scope
if (10 === 10){
	let name = "hello"
	return name = "hey";
	 name = "helo"
}

console.log(name)

















