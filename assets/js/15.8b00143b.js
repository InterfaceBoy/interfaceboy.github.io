(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{63:function(t,e,r){"use strict";r.r(e);var n=r(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" Http")]),t._v(" "),r("h4",{attrs:{id:"创建请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建请求"}},[t._v("#")]),t._v(" 创建请求")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('// 1. 引入 http 模块\nvar http = require("http");\n// 2. 用 http 模块创建服务\n/**\n * req 获取 url 信息 (request)\n * res 浏览器返回响应信息 (response)\n */\nhttp\n  .createServer(function(req, res) {\n    // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8\n    res.writeHead(200, {\n      "Content-Type": "text/html;charset=UTF-8"\n    });\n    // 往页面打印值\n    res.write(\'<h1 style="text-align:center">Hello NodeJS 小鹏</h1>\');\n    // 结束响应\n    res.end();\n  })\n  .listen(3000); // 监听的端口\n')])])]),r("p",[t._v("在上面代码中可以清晰的看到 createSever 在内部调用了一个匿名函数，在 node 中他的工作原理就是基于事件驱动。"),r("br"),t._v("\n我们创建了服务器，并且向创建它的方法传递了一个函数。无论何时我们的服务器收到一个请求，这个函数就会被调用。")]),t._v(" "),r("h4",{attrs:{id:"模块化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var http = require("http");\nfunction httpServers() {\n  http\n    .createServer(function(req, res) {\n     res.writeHead(200, {\n        "Content-Type": "text/html;charset=UTF-8"\n      });\n     res.write(\'<h1 style="text-align:center">  NodeJS 小鹏</h1>\');\n      res.end();\n    })\n    .listen(6060);\n}\nexports.httpServers = httpServers;\n')])])]),r("p",[t._v("模块化功能函数")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('var nodeHttp = require("./nodehttp");\nnodeHttp.httpServers();\n')])])]),r("p",[t._v("现在可以把我们的应用的不同部分放入不同的文件里，并且通过生成模块的方式把它们连接到一起了。")])])}),[],!1,null,null,null);e.default=s.exports}}]);