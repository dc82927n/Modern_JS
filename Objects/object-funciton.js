//object-funciton.js
// object work with functin and pass argument and return argment. 

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

// going to pass a single argument because we going to pass in the object that contain
/*this contain all the information in object*/

let getSummary = function () {

	return {
		Summary: `${myBook.title} by`,
		sumpageCount: `${myBook.title} will have ${otherBook.pageCount}`
	}
	//console.log(`${myBook.title} by ${otherBook.author}`); 

}


/*getSummary(myBook)
getSummary(otherBook)*/

// second option below

let bookSummary = getSummary(myBook)
let otherBooksummary = getSummary(otherBook)

console.log(bookSummary.sumpageCount)





