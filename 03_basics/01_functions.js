

function myName() {
    console.log("A");
    console.log("r");
    console.log("p");
    console.log("a");
    console.log("n");
}

// myName() // to execute a function

// function addTwoNumber(num1,num2){

//     console.log(num1 + num2);
// }

function addTwoNumber(num1,num2){
    
//    let result = num1+num2;
//    return result;
    return num1+num2;
}

const result = addTwoNumber(3,5);
// console.log("Result :", result)


// function loginUserMessage(username= "User") this syntax is used to give parameter a default value otherwise if value is not given it will print undefined //

function loginUserMessage(username= "User"){
    // if(!username){} 
    if(username === undefined){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("Arpan"));
// console.log(loginUserMessage());
// function calculateCartPrice (val1,val2,...num1){
//     return num1;
// }

function calculateCartPrice (...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500));

const user = {
    username: "Arpan",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [22,33,44,55,66]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([22,33,44,55,66]));







