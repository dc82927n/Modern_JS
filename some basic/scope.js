// scope.js
// javascrip is lexical scope (static scope)
// Global scope - defined outside of all code block
// local scope - define inside a code block


// Global SCope (varone)
// local scope (vartwo)
// local scope (varThree)

let varOne = "varOne"

if(true){
	console.log(varOne);
	let varTwo = "varTwo"; 
	console.log(varTwo);

	if(true){
		let varFour = "varFour"
		console.log(varFour)
	}

} 

if (true) {
	let varThree = "varThree";
	console.log(varThree) 
}

//console.log(varTwo);










