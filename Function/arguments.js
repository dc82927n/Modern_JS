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
	return name + " " + score;  

}

// now we created a new function passing new arguments and to print out name and score. 
let callScore = scoreTracker("mike", 99)
console.log(callScore);













