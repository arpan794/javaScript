// singleton
// Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Arpan",
    "full name": "Arpan kumar",
    [mySym]: "mykey1",
    age: 30,
    location: "Pune",
    email: "arpan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "arpan@github.com"
//Object.freeze(JsUser)
JsUser.email = "arpan@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
   console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





