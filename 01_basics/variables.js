const accountId = 144544;
let accountEmail = "arpan@gmail.com";
var accountPassword = "12345";
 accountCity = "Pune"; // not use this syntax
let accountState

// accountId = 2; // not allowed

// console.log(accountId+accountEmail+accountPassword+accountState+accountCity);
// console.log("");

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/* Prefer not to use var because of issue in block scope and functional scope */