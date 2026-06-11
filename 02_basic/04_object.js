const tinderUser = new Object() // Singleton object

// const tinderUser = {} non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "tanush7566@gmail.com",
    fullname: {
    userfullname:{
   firstname: "tanush",
    lastname: "jasrotia"
    }
}
}

// console.log(regularUser.fullname.userfullname.firstname) 


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true

const obj3 = {...target,...source};
console.log(obj3);

// when object came from database raw 

const user = [
    {
        id: 1,
        email:"Tanush@gmail.com"
    },
    {
        id: 3,
        email:"Th@gmail.com"
    },
    {
        id: 2,
        email:"Tah@gmail.com"
    }
]

// console.log(user[0].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))