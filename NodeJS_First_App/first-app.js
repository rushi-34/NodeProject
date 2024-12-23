
//storing the imported file functionality in const variable
const fs = require('fs'); //fs is the core modeule provided by Node.js
fs.writeFileSync('hello.txt', 'Hello from Node.js FS');//method made available by fs module, and this method will write a file to the hard drive
//this method takes two arguments, the first argument is the file name or destination with file name, and the second argument is the content that you want to write to the file



const hobbies = ['Sports', 'Cooking'];
//for of loop
for(let hobby of hobbies){
    console.log(hobby);
}
//map method
const newHobbies = hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
});

//copying array
const copy1 = hobbies.slice();
const copy2 = [hobbies]; //this will create an array of arrays
const copy3 = [...hobbies]; //this will create a new array with the same elements as the hobbies array
//using spread operator all the elements(array)/properties(inside object) will be taken and added to the bracket surrounding it

const restOperatorArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(restOperatorArray(1, 2, 3, 4, 5, 6)); //this will return [1, 2, 3] because we have only 3 arguments in the function