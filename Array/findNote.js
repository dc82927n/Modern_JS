// using the findIndex method below to find the index of the array this is good because we may need to return the 
// or find the index value

/*const notes = [ {
	title: 'my next trip',
	body: 'i would like to go to spain'
}, {
	title: 'habbits ot work on',
	body: 'i coding everyday'
}, {
	title: "Office Modification",
	body: "warcross by marie chan"
}]



// we using findIndex because it's more flexable with object and 
// comparision equality operator in telling us either it's 
// true or false. 



const findNote = function (notes, noteTitle) {
	const index = notes.findIndex (function(note, index) {
			return note.title.toLowerCase() === noteTitle.toLowerCase()

	})

	return notes[index]
}


const note = findNote(notes, "Office modification")

console.log(note)
*/



const notes = [ {
	title: 'my next trip',
	body: 'i would like to go to spain'
}, {
	title: 'habbits ot work on',
	body: 'i coding everyday'
}, {
	title: "Office Modification",
	body: "warcross by marie chan"
}]



// we using findIndex because it's more flexable with object and 
// comparision equality operator in telling us either it's 
// true or false. 


// using the find method below. this does not return an index value instad it find what your look for and return it. 



const findNote = function (notes, noteTitle) {
	const note = notes.find (function(note, index) {
			return note.title.toLowerCase() === noteTitle.toLowerCase()

	})

	return note
}


const note = findNote(notes, "Office modification")

console.log(note)






