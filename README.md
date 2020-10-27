# Puddle-fish

xss水坑攻击，配合php进行鱼儿是否上线判断

加入了浏览器指纹获取，使用外网ip+浏览器指纹判断是否是同一终端。

## Usage:

后端使用php搭建`back.php，audio-fingerprinting.js`

在有xss的地方插入`bite.js`

## 致谢：

代码逻辑主要参考的

[timwhitez](https://github.com/timwhitez/XSS-Phishing)

