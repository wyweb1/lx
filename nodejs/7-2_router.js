/**
 * 目的：了解如何把路由和服务器整合起来
 * 
 */

function route(pathname){
    console.log('About to  router a request for'+ pathname);
}

exports.route = route;