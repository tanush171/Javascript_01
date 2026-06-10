// singleton
// object.create
// object literals 
const mysym = Symbol("key1")
const JsUser = {
    name: "Tanush",
    "full name": "Tanush singh jasrotia",
    [mysym]: "mykey1",
    age: 20 ,
    location: "jammu",
    email: "tanush7466@gmail.com"
}

// console.log(JsUser.email)  // we can use this also 

// console.log(JsUser["email"])

// console.log(JsUser["full name"]) // there is no other way to access full name

// console.log(JsUser[mysym])
// JsUser.email = "tanush14@gmail.com"
// Object.freeze(JsUser)

JsUser.email = "tanushhhhh443@gmail.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());