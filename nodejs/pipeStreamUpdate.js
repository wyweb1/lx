//链式流复制文件的方式会覆盖掉原有文件内容，所有进行优化

var fs = require('fs');

var data= '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk){//chunk为所读文件的内容
    data+=chunk;//把文件内容赋值给data
    console.log(chunk,'chunk');
});

readerStream.on('end',function(){
//为了得到纯字符串类型的数据所有在end函数内执行

    fs.appendFile('output.txt',data,function(err){
        if(err){
            console.log(err,'报错了！')
        }
        console.log('数据被添加到文件的末尾');
    });
    
});

readerStream.on('error',function(err){
    console.log(err.stack);
})


// var writerStream = fs.createWriteStream('output.txt');

// fs.appendFile(a,b,c)；a必须是字符串类型的数据
// fs.appendFile(文件名, 数据, 编码, 回调函数(err));


// fs.appendFile('output.txt',readerStream,function(err){
//     if(err){
//         console.log(err,'报错了！')
//     }
//     console.log('数据被添加到文件的末尾');
// });

console.log('程序执行完毕！');

