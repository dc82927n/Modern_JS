// array.js


let input = [1,2,3];
let add = 0;  

let sum = function (){
	for (i = 0; i < input.length; i++){
		//console.log(input[i]); 
		add += input[i]; 
	}

	return add
}

//console.log(input)
let plus = sum();

console.log(plus)








