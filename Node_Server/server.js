//create a server through node.js
//./ means the current directory, / means the root directory, nothing means the core module
const http = require('http');
// //req will contain the data of the request coming in, and res will help to send the response back
// function rqListener(req, res) {

// }
// //the rqListener function will be executed for every incoming request
// http.createServer(rqListener)

//Event driven architecture
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);//req objject will contain the data of the request coming in
    // process.exit();//this will exit the event loop
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();//this will send the response back to the client
})

server.listen(3000);
