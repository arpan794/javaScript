// if 

const isUserLoggedIN = true

if (2 != "3"){
   // console.log("executed");
    
}

// <, >, <=, >=, ==, !=, ===

const score = 200

if(score > 100){
    const power = "fly"
    // console.log(`User power: ${power}`);
    
}

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance<500){
//     console.log("less then 500");
// } else if (balance<750){
//     console.log("less then 750");
// } else if (balance<900){
//     console.log("less then 900");
// } else{
//     console.log("less then 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitcard){
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}

