/**
 * Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
 * Node.js，Stream 有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。
end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。
finish - 所有数据已被写入到底层系统时触发。
 */

var fs = require("fs");
var data = '';

// 创建可读流
var readerStream =fs.createReadStream('input.txt');

// 设置编码为 utf8
readerStream.setEncoding('utf8');

// 处理流事件-->data,end,and error（读取数据
readerStream.on('data',function(chunk){
    data+=chunk;
})

// 读取完数据触发
readerStream.on('end',function(){
console.log(data,'这是我读取的数据')
})

// 读取文件报错是触发
readerStream.on('error',function(err){
    console.log(err.stack,'err提醒')
})
