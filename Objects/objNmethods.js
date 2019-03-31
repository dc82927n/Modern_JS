


let restaurant = {
    name: 'ASB', 
    guestCapacity: 75, 
    guestCount: 0, 
    checkAvailability: function (partySize){
    	//console.log(this)
    	//console.log(true)
    	
    	let seatsleft = this.guestCapacity - this.guestCount;
    	
    	return partySize <= seatsleft;
    }, 

    seatParty: function (partySize){
    	this.guestCount = this.guestCount + partySize 
    },
    removeParty: function(partySize){
    	this.guestCount = this.guestCount - partySize
    }
}

//console.log(restaurant.checkAvailability(74));



// seatParty add to the seat party. 
// removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(15))
restaurant.removeParty(10)
console.log(restaurant.checkAvailability(12))

//console.log(restaurant.checkAvailability(4)) 








