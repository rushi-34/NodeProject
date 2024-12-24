
// //storing the imported file functionality in const variable
// const fs = require('fs'); //fs is the core modeule provided by Node.js
// fs.writeFileSync('hello.txt', 'Hello from Node.js FS');//method made available by fs module, and this method will write a file to the hard drive
// //this method takes two arguments, the first argument is the file name or destination with file name, and the second argument is the content that you want to write to the file



// const hobbies = ['Sports', 'Cooking'];
// //for of loop
// for(let hobby of hobbies){
//     console.log(hobby);
// }
// //map method
// const newHobbies = hobbies.map(hobby => {
//     return 'Hobby: ' + hobby;
// });

// //copying array
// const copy1 = hobbies.slice();
// const copy2 = [hobbies]; //this will create an array of arrays
// const copy3 = [...hobbies]; //this will create a new array with the same elements as the hobbies array
// //using spread operator all the elements(array)/properties(inside object) will be taken and added to the bracket surrounding it

// const restOperatorArray = (...args) => { 
//     //instead of (arg1, arg2, arg3) we can use (...args) to take all the arguments and store them in an array
//     return args;
// };

// console.log(restOperatorArray(1, 2, 3, 4, 5, 6)); //this will return [1, 2, 3] because we have only 3 arguments in the function


const person ={
    name: 'Rushi',
    age: 24,
    greet(){
        console.log('Hi, I am ' + this.name);
    } 
}
//Object destructuring -> extracting required data from objects and arrays using curly braces
const printName = ({name}) => {
    console.log(name);
};


//the name of the variables should be same as the property names of the object
const {name, age} = person;
console.log(name, age);

printName(person);

//array destructuring: unlike object we can choose any name
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);