var http = require('http');
var options = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};
var json = {nome: 'Pedro'};
var html = 'nome=Pedro';

var buffer = [];
var req = http.request(options, function(res){
    res.on('data', function(chunk){
        buffer.push(chunk);        
    });

    res.on('end', function(){
        var body_response = Buffer.concat(buffer).toString();
        console.log(body_response);
    });    
});

req.write(JSON.stringify(json));
req.end();