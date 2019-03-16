//arguments.js

// exploring multi arguments 
let add = function (a, b){
	return a;
}


let result = add (10)
console.log(result)


// deafult arguments

let getScoreText = function (name, score = 0 ){
	console.log(name)
	//console.log(score) can be used if no argumetn is created

}

//console.log(name);
getScoreText()

let getScoreText1 = function (name = "annonymous", score = 0){
	console.log(name);
	console.log(score);

}

//console.log(name);
getScoreText1("david", 100);



// this doesn't work below. you can't pass argument that not defined already
let getScoreText2 = function (undefined, num){
	//return getScoreText2
	console.log(undefined)
}



getScoreText2("m", 1);




// but we can reasign or reused funciton example below
/*
let MikeScore = getScoreText1(){
	console.log();
} 
*/

// we created a funciton and return the parameter 
let scoreTracker = function (name = "annonymous", score = 0){
		
	return `my name is ${name} - score: ${score}`; /* example of backtick fucntion*/
	//return name + " " + score;  

}

// now we created a new function passing new arguments and to print out name and score. 
let callScore = scoreTracker("mike", 99)
console.log(callScore);



// example to show what happen when you name it undefined
// it takes on the orginal parameter "annonymous"
let scoreText = scoreTracker (undefined, 50); 
console.log(scoreText); 

// challenge area
// take two arugement.	total, tipPercent


 
// option 1
let tipCaculator = function (total, tipPercent){
	return tipAmount = total * tipPercent;

}


tipCaculator(100, .25);

console.log(tipAmount);

/*creating backtick string*/
// option 2
let tipCaculator1 = function (total, tipPercent = .2){
	//return total * tipPercent;
	//return `${total} * ${tipPercent}` /* this does not work demostration below why*/
	let percent = tipPercent * 100; 
	let tip = total * tipPercent
	return `A ${percent}% tip on $${tip}`

	// option two to solve the same problem we can 
	/* we can add the equation into the problem */
	/*example below: 
	
	return `A ${tipPercent * 100}% tip on $${total * tipPercent}`
	// i dont' thin this is beter than the above code because it
	look mess to caculate code. 
	
	*/

}


tipAmount = tipCaculator1(100);

console.log(tipAmount);

let name = "jen"
let age = 20 
console.log(`hey. my name is ${name}! and i'm ${age}`);
