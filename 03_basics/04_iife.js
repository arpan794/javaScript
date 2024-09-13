// Immediately Invoked Function Expression (IIFE)

(function Chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Arpan')



