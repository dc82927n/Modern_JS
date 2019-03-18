// addIncome
// resetAccount: will reset the accoun to zero
// getAccountSummary: will get account summary
/*account for andrew hass $900. 1000 in income. $100 in expense*/

/*
// addincome
// addexpense
// add get accounSummer 


*/


let myAccount = {
	name: 'andrew mead',
	expense: 0, 
	income: 0
}

let addexpense = function(account, amount){
	account.expense -= amount

}


let addIncome = function(account, income) {
	 account.income += income
}

let resetAccount = function(account){
	
	account.income = 0
	account.expense = 0 
}

let getAccountSummary = function(account){
	let balance = account.income - account.expense
	return `acccount for ${account.name}. balance amount: ${balance}`
}


addexpense(myAccount, 1.00)

addIncome(myAccount, 2.50)
//console.log(myAccount)



getAccountSummary(myAccount)
console.log(getAccountSummary(myAccount)); 

/*resetAccount(myAccount)
console.log(myAccount)
*/


