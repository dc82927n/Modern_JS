
// create array to array of object -> text, tocmpleted
// cerate a function to remove a todo by text value

const todo = [{
	text: 'Order cat food',
	completed: true  
}, {
	text: 'Clean kitchen',
	completed: false 
}, {
	text: 'Buy food',
	completed: true
}, {
	text: 'do work',
	completed: false
}, {
	text: 'exercise',
	completed: true 
}];


const deltodo = function (todo, item){
	const found = todo.findIndex(function (todo){
		return todo.text.toLowerCase() === item.toLowerCase()


	})

	if (found > -1 ){
		todo.splice(found, 1)
	}

}


notes.filter(functin(note, index){
	 
})



deltodo(todo, "Buy food")
console.log(todo)








