//string-methods.js

let name = ' Andrew Mead'

console.log(name.length); 


console.log(name.toUpperCase());

console.log(name.toLowerCase()); 


//it check if each of char is in the string. if so it will create 
// true. 
console.log(name.includes("aM")); 


console.log(name.includes(''))


// we can try to create a stronger password

let password = ("abc1234pass098")
let tr = 'password'
console.log("line 25")
console.log(password.includes(`${tr}`))


// name.trim will trim the white space in the front and end. 
console.log(name.trim())


// challenge create invalidPassword
// length is more than 8  - and it doesn't contain the word password

let check = function (str){
	if (str.length < 8){
		return false 
		}else if (str.includes("password")){
			return false
		}
		else {
		return true
		}
	}
	

	

console.log(check("frekrjpassworddfsddfcd"))













