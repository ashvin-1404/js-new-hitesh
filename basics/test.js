const accountId = 144553
let accountEmail="devanshashwin@gmail.com"
var accountPassword="12345";
accountCity="Jaipur";
let accountState;

// accountId=6788934 not allowed here

accountEmail="devansh@gmail.com"

/*
Prefer not to use var
Because of use in block scope
 */

console.log(accountId);
console.table([accountId,accountEmail,accountCity,accountPassword,accountState]);