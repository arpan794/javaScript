// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2024,8,1)   // months start from 0 index eg:- 0=Jan
// let myCreatedDate = new Date(2024,8,1,11,45)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date ("09-01-2024") // mm-dd-yy
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // 0=Jan
console.log(newDate.getMonth() +1); // +1 makes it 1=Jan

newDate.toLocaleString('default', {
    weekday: 'long',
})






