function sayMyName(){
    console.log("T")
    console.log("a")
    console.log("n")
    console.log("u")
    console.log("s")
    console.log("h")
}

// sayMyName()  

function addNumber(Number1,Number2){
    // let result = Number1 + Number2
    // return result
    return Number1 + Number2
    console.log("hey") // unreachable after return statement

}

const result = addNumber(3,4)
// console.log("result:",result)
addNumber(3,"4")
addNumber(3,null)

function loginUserMessage(username = "sam"){
    if(username === undefined){
   console.log("Please enter a username");
   return
    }
    return `${username} just logged in `

}

// console.log(loginUserMessage("Tanush"))
console.log(loginUserMessage()) // undefined

