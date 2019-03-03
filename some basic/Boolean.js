
let temp = 31
let freezingPoint = temp === 31
let notFreezing = temp > 31
let belowFreezing = temp < 31
// === equality operator 
// !== not equal operator 
// > greater
// < less  
// <= less than 
// >= greater than 


// creating a condition if freezing outside
if (temp){
	console.log("the temp is freezing outside");

} else if (temp) { 
	console.log("is not freezing");
}	else {
	console.log("is freezing"); 
}

// testing some bool output
console.log("first test = " + freezingPoint);
console.log("second comparision test = " + notFreezing); 

let age = 45;
let isChild = 7; 
let isSenior = 65;

console.log("test if age is child or senior: " + isChild);



if (age < isChild ){
	console.log("recieve child discount");

}else if (isSenior < age){
	console.log("recieve senior discount");
}else {
	console.log("no discount"); 

}




















