// 链式流：解压缩

var fs = require('fs');
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input2.txt；
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input2.txt'));


console.log('文件解压完成');