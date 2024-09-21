// const coding = ["js","java","cpp","python"]

// const values = coding.forEach( (item) => {
//      console.log(item);
//      return item
// })

// cosole.log(values);

const myNums = [1,2,3,4,5,6,7,8,9]

//const newNumbs = myNums.filter( (num) => num>4 )
// const newNumbs = myNums.filter( (num) => {
//      return num>4 
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num);
//     }
// })
    
// console.log(newNums);

const books = [
    { title: 'book one', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'book two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'book three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'book four', genre: 'Fiction', publish: 1989, edition: 2010},
    { title: 'book five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'book six', genre: 'History', publish: 1987, edition: 2010},
    { title: 'book seven', genre: 'Non-Fiction', publish: 2011, edition: 2016}
]

let userBooks = books.filter( (bk) => bk.genre === "History" )

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);









