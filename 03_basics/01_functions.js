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
// console.log(loginUserMessage()) // undefined

function calculateCartPrice(vale1, val2, ...num1) { // ...restoperator/ spread operator
    return num1
}

console.log(calculateCartPrice(200, 300, 334, 500))
// first value go to Val1 , second val2 , rest in ...num1

const user = {
    username: "Tanush ",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 1222
})


// PAss the array in fucntion

const myarray = [200, 2000,3000 , 3009, 400]

function returnSecondValue(getarray){
       return getarray[1]
}

// console.log(returnSecondValue(myarray));

console.log(returnSecondValue([400,3,445,544,22]));

