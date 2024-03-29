/**
 * 获取 URL 的参数：
 * 使用 url.parse 方法来解析 URL 中的参数
 */

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

    // 解析 请求前端发来的请求链接url带的参数
    var params = url.parse(req.url,true).query;
    res.write('网站名：'+params.name);
    res.write('\n');
    res.write('网站Url：'+params.url);
    res.end();
}).listen(3000);