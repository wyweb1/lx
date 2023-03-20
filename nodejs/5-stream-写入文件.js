
//写入流


var fs =  require('fs');
var data = 'woshiwyw。这个方法是不是可以用在案例储存文件？？';

//创建一个可以写入的流，写入到文件output.txt
var writerStream = fs.createWriteStream('output.txt');  //如果这个文件不存在他还会自己创建!!!!太厉害了这正是我目前需要的

//使用 utf8编码写入数据
writerStream.write(data,'utf-8');

//标记文件末尾
writerStream.end();

//处理流事件 --> finish、error
writerStream.on('finish',function(){
    console.log('写入完成');
});

writerStream.on('error',function(err){
    console.log(err.stack,'我报错啦！快处理')
});

console.log('程序执行完毕！');