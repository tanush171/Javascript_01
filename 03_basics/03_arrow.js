const user = {
    username: "tanush",
    price: "3444",
    
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function chai() {
//     let username = "Tanush"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//      let username = "Tanush"
//    console.log(this.username);

// }
// 
// chai ();

const chai = () => {
     let username = "Tanush"
//    console.log(this);

 }

 chai()

//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }


//  const addTwo = (num1, num2) => (num1 + num2)


//   if we want to return an object 

const addTwo = (num1, num2) => ({username: "Tanush"})
console.log(addTwo(4,5))



