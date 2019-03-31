let num = 103.941

console.log(num.toFixed(2));
// output 103.94


console.log(Math.round(num));
//output 104
console.log(Math.floor(num));
// 
console.log(Math.ceil(num)); 

let min = 10
let max = 20
 
let randomNum = Math.floor(Math.random(56) * (max - min + 1)) + min 
console.log(randomNum)

//challenge 
// create a function to guest a number
// 1 - 5

let guess = function (num){
	let min = 1
	let max = 5

	if(num == Math.floor(Math.random(56) * (max - min + 1)) + min){
	
		return true;
	} else {
		return false; 
	}

}

console.log(guess(1));





