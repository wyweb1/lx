//扩展 index.js，使得路由函数可以被注入到服务器中：

var server = require('./l_server');
var router = require('./l_router');

server.start(router.route)