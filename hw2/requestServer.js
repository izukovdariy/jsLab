const http = require('http');
const url = require('url');
const port = 8081;
const name = process.argv[2];
const listenServerPort = 8080;

const options = {
    hostname: `localhost`,
    port: listenServerPort,
    method: 'POST',
    path: `/?name=${name}`,
    headers: { IKnowYourSecret: "TheOwlsAreNotWhatTheySeem" },
}
const requestHandler = (request, response) => {
    response.end('Get request!');
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err){
        return console.log('The exeption happend', err)
    }
    console.log(`Server listening on ${port}`)
})
const getRequest = http.request(options, (res)=>{
    res.on('data', d => {
       process.stdout.write(d)
    })
})

getRequest.on(`error`, (error)=>{
    console.log(error);
})
getRequest.end();

