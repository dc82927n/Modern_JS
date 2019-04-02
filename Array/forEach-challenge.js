

const todo = ["apple", "orange", "pin", "dog", 1, 3, 6, "cat", "bird", "sing", "bling"];

	console.log(`you have ${todo.length} on the list:`)


todo.forEach(function(list, index){
	console.log(`${index + 1} ${list}`)

})

console.log("_____________________________")

for (let i = 0; i < todo.length; i++){
	console.log(todo[i])
}

console.log("+++++++++++++++++++++++++++++++")

// with the for statement we can go reverse as well unlike the forEach we can only go forward. 


for (let j = todo.length - 1; j >= 0; j--)
{
	//console.log(todo.length -1)
	console.log(todo[j])

}


// indexOf() look for the position of the array and return a number

console.log(todo.indexOf("bird"));


