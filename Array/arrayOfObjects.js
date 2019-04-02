const notes = [ {}, {
	title: 'my next trip',
	body: 'i would like to go to spain'
}, {
	tile: 'habbits ot work on',
	body: 'i coding everyday'
}, {
	title: "books i'm reading"
	body: "warcross by marie chan"
}]

//  findIndex gives more flexability compare to indexOf because index uses === but when comparing
// object it's not the same when ==== comparing with another object because it's refer to the 
// variable in memory of space. 

const index = notes.findIndex(function (note, index){
    return note.title === 'Habbits to work on'
})

console.log(index); 





