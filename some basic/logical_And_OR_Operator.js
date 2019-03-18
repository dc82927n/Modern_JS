// logical operator and or operators. 



let temp = 55;

if (temp >= 60 && temp <= 90) {
	console.log("its is pretty nice");
} else if (temp <= 0 || temp >= 120) {
	console.log("do not go outside");
} else {
	console.log("eh. do what you want");
}


// challenge area 

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

// are both vegan? 
// at least one vegan? 
// else, offer up anything on the menue 

if (isGuestOneVegan && isGuestTwoVegan) {
	console.log("both are vegan");
} else if (isGuestOneVegan || isGuestTwoVegan) {
	console.log("one is vegan");
} else {
	console.log("anything works for me");
}











