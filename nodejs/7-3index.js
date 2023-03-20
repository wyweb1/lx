
/**
 * 扩展 index.js，使得路由函数可以被注入到服务器中：
 * 启动服务器应用 终端在本文件夹下输入 node 7-3index.js 
 */
var server = require('./7-1_server路由');
var router = require('./7-2_router');

server.start(router.route)