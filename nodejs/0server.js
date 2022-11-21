
//引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
// 接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。

var http = require("http");
http.createServer(function(request,response){//创建服务器
    // 发送http 头部
    // http 状态值：200：ok
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    //发送响应数据 "Hello world"
    response.end('Hello world\n');

}).listen(8888);

//终端打印如下信息 网址可以任意改？
console.log('Server running at http://127.2.0.1:8888');
