let myName = "Tanush"

let anotherName = myName;

// anotherName = "paras";
console.log(anotherName)
console.log(myName) 

// They use stack and copy the value

let userone = {
    email : "user@google.com"

}
let usertwo = userone
usertwo.email = "tanush@google.com"

console.log(userone.email)
console.log(usertwo.email)
// (heap) NoN primitive datatypes use the refrence value 