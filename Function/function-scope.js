//function-scope.js	
// global scope (convertFahrenheitToCelius, tempOne, tempTwo)
	// local scope (fahrenheit, celsius)
	// local scoe (is freezing)



let converFahrenheitToCelius = function (fahrenheit) {
	let celsius = (fahrenheit - 32) * 5 / 9 

	if (celsius <= 0){
		let isFreezing = true
	}

	return celsius
}

let tempOne = converFahrenheitToCelius(32)
let tempTwo = converFahrenheitToCelius(68)

console.log(tempOne);
console.log(tempTwo);
















