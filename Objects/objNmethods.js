let restaurant = {
    name: 'ASB', 
    guestCapacity: 75, 
    guestCount: 0, 
    checkAvailability: function (partySize){
    	console.log(this)
    	//console.log(true)
    	
    	return true;
    }
}

let status = restaurant.checkAvailability(4);

console.log(status)








