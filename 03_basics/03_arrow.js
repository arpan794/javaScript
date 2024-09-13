const user = {
    username: "Arpan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcomw to website`);
        console.log(this);
        
    }
}

//   user.welcomeMessage();
//  user.username = "sam";
//   user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Arpan";
//     console.log(this.username);
    
// }
 
// chai();

// const chai = function(){
//     let username = "Arpan";
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Arpan";
//     console.log(this.username);
// }

// // chai();

// const addTwo = (num1,num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) 

const addTwo = (num1, num2) => ( {username: "Arpan"} ) 

console.log(addTwo(3,4));


