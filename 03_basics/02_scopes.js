

let a = 3
const b = 3
var c = 4

if(true){
    let a = 3
const b = 3
var c = 4
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested scope

function one(){
    const username = "Tanush"

    function two(){
        const website = "youtube"
        console.log(username)
    }
     two()
}

// one()

if(true){
    const username = "Tanush"
    if(username === "Tanush"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);

//  +++++++++++++++++++++++++++++++ Interesting +++++++

function addone(num) {
    return num + 1

}

addone(5) // we can access before the function 


//  addTwo(8)  // throw error
const addTwo = function(num){
    return num + 2
}

addTwo(8) // we do not access before the function