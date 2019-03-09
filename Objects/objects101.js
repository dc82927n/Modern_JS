



// this i an object
let myBook = {
 	title: '1984',
 	author: "george orwell",
 	pageCount: 326
}

console.log(myBook)


// in the object tile is the property it have a value 1984 in the object. 
// to access the value on the property

console.log(myBook.title)

// we can use a temple string or backtic string
// we can also change the name of the book
myBook.title = "hello my book tile name changed"
console.log(`${myBook.title} by ${myBook.author}`)

// we created an name, age, and location. then we want to + 1 to age. 

let me = {
	name: "David",
	age: 27,
	location: "new york"
}


console.log(`my name is ${me.name} and age ${me.age} and live at ${me.location}`);
me.age = me.age + 1

console.log(`my name is ${me.name} and age ${me.age} and live at ${me.location}`);


