const accountId = 3844
let accountEmail = "sudesh@gmail.com"
var accountPassword = "1234abcd"
accountCity = "Bangalore"

let accountState;

accountEmail = "sss@gmail.com"
accountPassword = "sudesh1234"
accountCity = "Delhi"

console.log(accountId);

/* Prefer not to use var because of issue in block and function scope.
    Use let for variables that will change and const for constants.*/


console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
});
