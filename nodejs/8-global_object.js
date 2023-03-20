// 全局对象
// 最好不要使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险

// 输出全局变量_filename值
console.log(__filename);

//__dirname 表示当前执行脚本所在的目录

console.log(__dirname,'脚本所在目录')

// 定时器
// setTimeout(cb, ms)
// clearTimeout(t)
function printHello(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
 var t = setTimeout(printHello, 2000);
 
 // 清除定时器
 clearTimeout(t);


// setInterval(cb, ms)同上


// console.dir(obj[, options])
// 用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。

// console.trace(message[, ...])
// 当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。