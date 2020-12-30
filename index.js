var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('HOLAAAAA MUNDOOOOO LJKASDLASDKLASDJKLKLJLKASDLKJASDLKJSALKASDDAS!');
    res.end();
}).listen(8080, () => console.log('App running on some port'));