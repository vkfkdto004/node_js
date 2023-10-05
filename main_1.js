var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
        title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
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
    <li><a href="/?id=HTML">${title}</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
</ul>


<h2 style="color:violet; text-decoration: underline;">${title}이란 무엇인가?</h2> 
<div id="article"></div>
<p><iframe width="600" height="350" src="https://www.youtube.com/embed/YVxCFGv9Eqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
     encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
<p><a href="https://www.w3.org/TR/2011/WD-html5-20110405/" target="_blank" title="html5 speicification">Hypertext Markup Language(HTML)</a> is the standard markup
laguage for <strong>creating <u>web</u> pages</strong> and <strong><u>web</u> applications.</strong><br>
Web browsers receive HTML documents from a web sever of from local storage and render 
them into multi media web pages.<p style="margin-top:50px;">
<img src="couple.jpg" width="250"><br> 
HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
HTML elements are the building blocks fo HTML pages.<br><br><br> With HTML constructs, images and other objects, such as interactive forms,
may be embedded into the redered page.</p>
</p>
</div>
</div>
</body>
</html>
    `;
    response.end(template);
});
app.listen(3000);
