# Node.js_Notes
[Demo](https://github.com/daifang/node.js/tree/master/Node-Demo)

# 基本知识
* ## `全局`
   全局变量|含义
   -|-
   __dirname|当前进程所在目录
   __filename|当前进程名,算上目录
   ***
   全局对象|含义
   -|-
   global|相当于浏览器的window
   process|包含当前进程的信息，便于与进程交互
   console|用的最多的是log，还有其他如err
   ***
   全局方法|含义
   setInterval|定时
   setTimeout|计时延迟执行
   clearInterval|清除定时器
   require|用于引入package
* Module
   * `exports`
   *  把模块暴露出去，可以让外部访问
   ```
    function fun(){
        function fun1(){···}
        function fun2(){···}
    }
    modlue.exports = fun;
   ```
