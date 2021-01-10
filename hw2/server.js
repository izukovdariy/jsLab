const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

let users = [];
if (fs.existsSync('users.json')) {
    users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
}

const requestHandler = (request, response) => {
    if ( request.method === 'POST' && request.headers.iknowyoursecret === 'TheOwlsAreNotWhatTheySeem'){
        const name = url.parse(request.url, true).query.name;
        const ip = request.connection.remoteAddress;
        response.write(name, ip);
        users.push({name: name, ip});
        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) {
                return console.log('The exeption happend', err)
            }
        });
        response.write(`Hello ${(users.map(item => item.name).join(', '))}`)
    }
    response.end();
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err){
        return console.log('The exeption happend', err)
    }
    console.log(`Server listening on ${port}`)
})
