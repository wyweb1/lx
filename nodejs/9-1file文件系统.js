/**
 * 建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。
 */




var fs = require('fs');

//async 异步读取文件:读取完文件，调取第二个参数：回调函数
fs.readFile('input.txt',function(err,data){
    if(err){// 读取出错
        return console.error(err,'err')
    }
    console.log('异步读取：',data.toString())
})

// sync 同步读取
var data = fs.readFileSync('input.txt');
console.log('同步读取：',data.toString());


console.log('程序执行完毕')