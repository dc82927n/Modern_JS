//function_101.js
// function - takes in input, code, output




// function syntax below
// 1. when we create a function we beed to call it

let greetUser = function (){
	console.log("welcome user!")

} 

greetUser();
greetUser(); 

// how we pass a number in the parameter we provide a arguement 
// we call the pass the argument in the parameter for example 3 is passing into num and print 3
let square = function (num) {
	console.log(num); 

}

square(3) // print 3 
square(10) // print 10




// 

let powerOf2 = function (num) {
	let result = num * num
	console.log(result)
}


powerOf2(2); 

// create a conversion from fahrenheitToCel and the output is correct.
let fahrenheitToCel = function (temp){
	let CelFromFah = (temp - 32) * (5/9); 
	//console.log(CelFromFah);
	return CelFromFah; 
}


let cel1 = fahrenheitToCel(1); 
console.log(cel1)
fahrenheitToCel (1); 







































