var http = require('http');
var url = require('url');

function start(route){
    function onRequest(request,response){
        /**目的/作用
         * 找出浏览器请求的 URL 路径：
         * 可以通过请求的 URL 路径来区别不同请求了
         */
                 
        var pathname = url.parse(request.url).pathname;
        console.log('Request for'+pathname+'received.');

        route(pathname);

        response.writeHead(200,{'Content-type':'text/plain'});
        response.write('Hello world WYW');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started~.');
}

exports.start = start;