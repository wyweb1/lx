/**
 * 1打开文件
 * 以下是在异步模式下打开文件语法格式
 * fs.open(path,flags[,mode],callback)
 * 参数
 * path:文件路径
 * flags：文件打开的行为
 * mode：设置文件模式（权限），文件创建默认权限为0666（可读，可写）
 * callback-回调函数，带有两个参数如：callback（err，fd）
 */

var fs  = require('fs');

// 异步打开文件
console.log('准备打开文件');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功！');
})

/**
 * 2获取文件信息
 * fs.stat(path,callback)
 * 参数：
 * callback:两个，err，stats，stats是fs.State的对象
 * fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：
 * 
 * isFile是文件
 * isDirectory是否是目录
 * isBlockDevice是块设备
 * isCharacterDevice是字符设备
 * isSymbolicLink是软链接
 * isFIFO是FIFO
 * isSocket是 Socket 返回 true
 */

fs.stat('input.txt',function(err,stats){
    console.log(stats.isFile(),'是否是文件');
})

/**
 * 3写入文件
 * fs.writeFile(file, data[, options], callback)
 * 
 * writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容！！！
 * 参数
 * file文件名或文件描述符
 * data：要写入文件的数据，可以是string或buffer（缓冲对象
 * options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
 * callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
 */

console.log('准备写入文件')
fs.writeFile('input.txt','我是通过 fs.writeFile写入文件内容的',function(err){
    if(err){
        return console.error(err)
    }
    console.log('数据写入成功！')
    console.log('---我是分界线---')
    console.log('读取刚刚写入的新数据！')
    fs.readFile('input.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log('异步读取文件数据：',data.toString())
    })
})


/**
 *4 异步读取文件
 * fs.read(fd, buffer, offset, length, position, callback)
 * fd - 通过 fs.open() 方法返回的文件描述符。
参数：
buffer - 数据写入的缓冲区。
offset - 缓冲区写入的写入偏移量。
length - 要从文件中读取的字节数。
position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
 */

var buf = new Buffer.alloc(1024);

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功4444！");
   console.log("准备读取文件4444：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});


/**
 *5 异步关闭文件
 * fs.close(fd, callback)
 * 该方法使用了文件描述符fd来读取文件。
 * 参数
 * fd - 通过 fs.open() 方法返回的文件描述符。
 * callback - 回调函数，没有参数
 */
var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件！");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // 关闭文件
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("文件关闭成功5555");
      });
   });
});


/**
 * 6异步截取文件
 * fs.ftruncate(fd,len,callback) 截取后破坏原文件
 * 参数：
 * fd - 通过 fs.open() 方法返回的文件描述符。
 * len - 文件内容截取的长度。
 * callback - 回调函数，没有参数。
 */
var fs5 = require("fs");
var buf = new Buffer.alloc(1024);

console.log("准备打开文件！");
fs5.open('input5.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("截取10字节内的文件内容，超出部分将被去除。");
   
   // 截取文件
   fs5.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("文件截取成功。");
      console.log("读取相同的文件"); 
      fs5.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err){
            console.log(err);
         }

         // 仅输出读取的字节
         if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
         }

         // 关闭文件
         fs5.close(fd, function(err){
            if (err){
               console.log(err);
            } 
            console.log("文件关闭成功！");
         });
      });
   });
});

/**
 * 6删除文件
 * fs.unlink(path, callback)
 */
console.log("准备删除文件！");
fs.unlink('xxx', function(err) {
   if (err) {
       return console.error(err,'333333');
   }
   console.log("文件删除成功！");
});

/**
 * 7创建目录
 * fs.mkdir(path[, options], callback)
 * 参数
 * path文件路径
 * options 参数可以是：
    recursive - 是否以递归的方式创建目录，默认为 false。
    mode - 设置目录权限，默认为 0777。
 *callback - 回调函数，没有参数。
 */

console.log('创建目录./test/ee')
// test目录必须存在
fs.mkdir('./test/ee',function(err){
    if(err){
        return console.error(err,'创建目录报错')
    }
    console.log('目录创建成功')
})

/**
 * 8读取目录
 * fs.readdir(path, callback)
 * 略
 * callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。
 */
console.log("查看 /test 目录");
fs.readdir("../nodejs/",function(err, files){
   if (err) {
       return console.error(err,'99999');
   }
   files.forEach( function (file){
       console.log( file ,'文件目录 读取999');
   });
});

/**
 * 删除目录
 * fs.rmdir(path, callback)
 * callback没有参数
 * 
 */


fs.rmdir("./test/ee",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取 /test 目录");
   fs.readdir(".test/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});
