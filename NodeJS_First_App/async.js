// const fetchData = (callback) => {
//     //here the argumanet is a function which is called after 1.5 seconds
//     setTimeout(()=>{
//         callback('Done!');
//     }, 1500);
// };

const fetchData = () => {
    //the Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    //here the Promise constructor takes a function as an argument which takes two arguments, resolve and reject 
    //resolve is a function that is called when the asynchronous task completes successfully and returns the result of the task as a value, 
    //reject is a function that is called when the task fails and returns the reason for failure, which is typically an error object.
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Done!');
        }, 1500);
    })
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData(); //this will return another promise}
    }).then(text2 => {
        console.log(text2);
    });
    //the function passed to fetchData is passed as an argument
}, 4000);
