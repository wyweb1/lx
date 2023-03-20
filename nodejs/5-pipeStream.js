// 管道流：我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。
//这种复制直接把output.txt内的文件内容都覆盖掉了！！！！好消息可以使用appendFile()在原有的文件内容基础上添加内容



var fs = require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input.txt');

//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

//管道读写操作
// 读取 input.txt 文件内容，并将内容写到output.txt文件中
readerStream.pipe(writerStream);

console.log('程序执行完毕');