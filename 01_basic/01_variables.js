const account_ID = 143433 
let accountEmail = "tanush7466@gmail.com"
var accountPassword = "12345"
accountCity = "Jammu" 
let accountState;
// account_ID = 122 not allowed we can't change the const value 

accountEmail = "hcc@gmail.com"
accountPassword = "122323"
accountCity = "jaipur"
console.log(account_ID);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])
