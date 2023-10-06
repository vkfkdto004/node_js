var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var template = `
            <!doctype html>
            <html>
            <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="style.css">
            </head>
            <body>
             <h1><a href="/">WEB</a></h1>
             <div id="grid">
            <ul>
             <li><a href="/?id=HTML">HTML</a></li>
             <li><a href="/?id=CSS">CSS</a></li>
             <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2 style="color:violet; text-decoration: underline;">${title}이란 무엇인가?</h2> 
            <div id="article"></div>
            <p>${description}</p>
            </p>
            </div>
            </div>
            </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
            });
        } else {
        fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
            var title = queryData.id;
            var template = `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1><a href="/">WEB</a></h1>
        <div id="grid">
    <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ul>
    <h2 style="color:violet; text-decoration: underline;">${title}이란 무엇인가?</h2> 
    <div id="article"></div>
    <p>${description}</p>
    </p>
    </div>
    </div>
    </body>
    </html>
        `;
        response.writeHead(200);
        response.end(template);
        });
      }
    } else {
        response.writeHead(404);
        response.end('Not Found');

    }
   
});
app.listen(3000);
