
// 阻塞代码实例
var fs = require("fs");

var data = fs.readFileSync('input.txt');//Sync同步；执行完当前操作才能进行下一个操作
console.log(data.toString());
console.log('程序执行结束！');