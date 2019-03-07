//grade-calc.js
// going to take in a student score, total possible score
/*that will generate the letter grade the student recieved*/

// example 15/20 -> you got a C (75%)!
// A 100 - 90 , B 80 - 89, ect 

let studentScore = 71

let possibleScore = function(){
 
//let total = 0 
	total = studentScore / 100
	console.log(total)
}

let grade = function(){
	 if (studentScore >= 90){
	 	console.log(studentScore + " here is your letter grade " + "A");
	 } else if((studentScore >= 70) && (studentScore <= 89)) {
	 	console.log(studentScore + " here is your letter grade " + "b");
	 } else {
	 	console.log("C")
	 }
}


grade()
//console.log(total);












