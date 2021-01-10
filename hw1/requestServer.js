const http = require('http');
const url = require('url');
const port = 8081;
const listenServerPort = 8080;
const getOptions = {
    hostname: `localhost`,
    port: listenServerPort,
    method: 'GET',
}
const postOptions = {
    hostname: `localhost`,
    port: listenServerPort,
    method: 'POST',
}
const postWithHeaderOptions = {
    hostname: `localhost`,
    port: listenServerPort,
    method: 'POST',
    headers: {
        'WhatWillSaveTheWorld': 'Love'
    },
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
const getRequest = http.request(getOptions, (res)=>{
    res.on('data', d => {
       process.stdout.write(d)
    })
})

getRequest.on(`error`, (error)=>{
    console.log(error);
})
getRequest.end();

const postRequest = http.request(postOptions, (res)=>{
    res.on('data', d => {
        process.stdout.write(d)
    })
})

postRequest.on(`error`, (error)=>{
    console.log(error);
})
postRequest.end();

const postRequestWithHeader = http.request(postWithHeaderOptions, (res)=>{
    res.on('data', d => {
        process.stdout.write(d)
    })
})

postRequestWithHeader.on(`error`, (error)=>{
    console.log(error);
})
postRequestWithHeader.end();
