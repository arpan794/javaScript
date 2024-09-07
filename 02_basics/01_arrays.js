//  JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// Arrays

const myArr = [1,2,3,4,5]
const myHeroes = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[1]);

// Array methods

// myArr.push(6)
// myArr.pop()

 // myArr.unshift(0)
 // myArr.shift()

 // console.log(myArr.includes(7));
 // console.log(myArr.indexOf(3));

const newArr = myArr.join();
 
console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // manipulate the original array.
console.log("C ", myArr);
console.log(myn2);




