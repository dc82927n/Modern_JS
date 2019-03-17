//argumentpassobject.js



let myBook = {
 	title: '1984',
 	author: "george orwell",
 	pageCount: 326
}


let otherBook = {
	title: 'a people history',
	author: 'howard zinn',
	pageCount: 723 
}

// why we passing the argument because we accessing the objects. 

let getSummary = function(book) {
 	console.log(`${book.title} by ${book.author}`)
}


getSummary(myBook)

let convertTemp = function (fahrenheit){
	return {
	fahrenheit: fahrenheit,
	kelvin: (fahrenheit + 459.67) * (5/9), 
	celsius: (fahrenheit - 32) * (5 / 9)


	}
}

let fahrenheitConversion = convertTemp(74)
console.log(fahrenheitConversion)



