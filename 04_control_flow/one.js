// IF
const isUserloggedIn = true
const temperature = 50
if (temperature <= 40) {
    // console.log("temperature is greater then 50");

} else {
    // console.log("less then 50")
}


const score = 200 

if ( score > 100) {
    const power = "fly"
    // console.log(`user power: ${power}`)
}

// console.log(`user power:${power}`) // throw error because it outside the block 

const balance = 1000 

// if (balance > 500) console.log('test'); // immature code

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750)   {
//         console.log("less than 750");
// } else if( balance <900) {
//     console.log("less than 1000")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true 
const debbitcard = true 
const loggedInFromGoogle = false 
const loggedInFromEmail = true
if (userLoggedIn && debbitcard) {
    console.log("allow to buy course")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in")
}