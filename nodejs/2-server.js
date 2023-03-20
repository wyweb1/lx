
//引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
// 接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。

// 我们使用 require 指令来载入 http 模块并将实例化的 HTTP 赋值给变量 http
var http = require("http");
http.createServer(function(request,response){//创建服务器
    // 发送http 头部
    // http 状态值：200：ok
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    // response.write('这是请求到的数据')

    //发送响应数据 "Hello world"
    response.end('Hello world\n');

}).listen(8888);

//终端打印如下信息 网址可以任意改？
console.log('Server running at http://127.2.0.1:8888');


// 以上代码我们完成了一个可以工作的 HTTP 服务器。
/**
 * 分析Node.js 的 HTTP 服务器：
 * 第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。
接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。
*/

// Node.js 提供了 http 模块，http 模块主要用于搭建 HTTP 服务端和客户端