const http = require('http');
const url = require('url');
const port = 8080;


const requestHandler = (request, response) => {
    console.log(`Accepted request ${request.url}`);
    response.end('This is my hw and it works!');
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err){
        return console.log('The exeption happend', err)
    }
    console.log(`Server listening on ${port}`)
})
