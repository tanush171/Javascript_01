// Immediately invoked fucntion expression (IIFE)

(function chai (){
    // Named IIFE
    console.log(`DB connected`);
})();  

//  to stop the IIEF use ;


( (name) => {
    console.log(`DB connected ${name}`);
})("Tanush");

