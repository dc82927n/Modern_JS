

// passing by reference objects. 


let myAccount = {
	name: 'andrew mead',
	expense: 0, 
	income: 0
}


let addExpense = function(account, amount) {
	account.expense = account.expense + amount 
	console.log(account)

}

addExpense(myAccount, 2.50)
console.log(myAccount)


