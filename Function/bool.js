
// testing a quick bool. 

let testBool = function (){
	let a =	1
	let b = 1
	let c = 1
	let d = ((a === b) && (b === c) && (c === a))

	if (d) {
		console.log(d)
	} else {
		console.log(d)
	}


	if (((a === b) || (b === c) || (a == c)) && !d){
		console.log(true)
	} else {
		console.log(false)
	}	

}

testBool();

/*

let a = Boolean();
console.log( "this is a" + a)
testBool ()


let testBool1 = function (){
	let a =	1
	let b = 2
	let c = 3

	if ((a == b) && (b == c) && (c == a) ){
		console.log(true)
	} else {
		console.log(false)
	}	

}

*/
//testBool1();