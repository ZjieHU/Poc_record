## CVE-2021-23406

漏洞POC记录
这个漏洞本质上是一个nodejs内置vm沙箱的逃逸漏洞
因为pac-resolver直接读取pac文件内容，内部使用了vm的vm.runInNewContext函数执行，导致的漏洞
mark

node code.js
