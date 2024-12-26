//create a server through node.js
//./ means the current directory, / means the root directory, nothing means the core module
const http = require('http');
const fs = require('fs');
// //req will contain the data of the request coming in, and res will help to send the response back
// function rqListener(req, res) {

// }
// //the rqListener function will be executed for every incoming request
// http.createServer(rqListener)

//Event driven architecture
const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method, req.headers);//req objject will contain the data of the request coming in
    // process.exit();//this will exit the event loop

    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter</title></head>');
        //form will take all the input data, puts it into a request body as key(what name we assign) value(what user enters) pairs, and sends it to the server
        res.write('<body><form action="/message" method="POST"><input type="text" name="information"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && req.method==='POST'){
        const body=[];
        //event listener to listen to the data event, where the data event will be fired whenever a new chunk is ready to be read and
        //chunk is a buffer object that contains the data
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        //writehead method will allow us to set the status code and the headers of the response, where second argument is an object
        res.writeHead(302, {
            'Location': '/'
        });
        return res.end();
    }


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();//this will send the response back to the client
})

server.listen(3000);
