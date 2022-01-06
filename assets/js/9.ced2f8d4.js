(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{59:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"grid网格布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grid网格布局"}},[a._v("#")]),a._v(" Grid网格布局")]),a._v(" "),e("h3",{attrs:{id:"属性使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性使用"}},[a._v("#")]),a._v(" 属性使用")]),a._v(" "),e("p",[e("strong",[a._v("display: grid")])]),a._v(" "),e("p",[a._v("指定一个容器采用网格布局")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 块级元素\ndiv {\n  display: grid;\n}\n// 行内元素\ndiv {\n  display: inline-grid;\n}\n")])])]),e("p",[e("strong",[a._v("grid-template-columns")])]),a._v(" "),e("p",[a._v("属性定义每一列的列宽")]),a._v(" "),e("p",[e("strong",[a._v("grid-template-rows")])]),a._v(" "),e("p",[a._v("属性定义每一行的行高")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("div{\n  display: grid;\n  grid-template-columns: 200px 200px 200px;\n  grid-template-rows: 200px 200px 200px;\n}\n")])])]),e("blockquote",[e("p",[a._v("上面代码指定了一个三行三列的网格，列宽和行高都是200px。"),e("br"),a._v("\n在grid中除了可以使用绝对单位也可以使用相对单位（百分比，rem）")])]),a._v(" "),e("p",[e("strong",[a._v("repeat()函数")])]),a._v(" "),e("p",[a._v("有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用repeat()函数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("div{\n  display: grid;\n  grid-template-columns: repeat(3,200px);\n  grid-template-rows:  repeat(3,200px);\n}\n")])])]),e("p",[a._v("参数一：重复的次数"),e("br"),a._v("\n参数二：所要重复的值")]),a._v(" "),e("p",[a._v("在 repeat()中也可以这样重复")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("div{\n  display: grid;\n  grid-template-columns: repeat(3,200px 100px 300px);\n  grid-template-rows:  repeat(3,200px 100px 300px);\n}\n")])])]),e("p",[a._v("以上代码的含义是：形成九宫格，1、4、7宽高200，2、5、8宽高100，3、6、9宽高300")]),a._v(" "),e("p",[e("strong",[a._v("auto-fill 关键字")])]),a._v(" "),e("p",[a._v("单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("div{\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n  grid-template-rows:  repeat(auto-fill, 100px);\n}\n")])])]),e("p",[a._v("以上代码的含义是：每列宽度100px，然后自动填充，直到容器不能放置更多的列。")]),a._v(" "),e("p",[e("strong",[a._v("fr 关键字")])]),a._v(" "),e("p",[a._v('网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。')]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("div{\n  display: grid;\n  grid-template-columns: 100px 1fr 2fr;\n}\n")])])]),e("p",[a._v("以上代码的含义是：第一列宽100px，第二列是第三列的二分之一")]),a._v(" "),e("p",[e("strong",[a._v("minmax() 函数")])]),a._v(" "),e("p",[a._v("minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("grid-template-columns: 1fr 1fr minmax(100px, 1fr);\n\n")])])]),e("p",[a._v("上面代码中，minmax(100px, 1fr)表示列宽不小于100px，不大于1fr。")]),a._v(" "),e("p",[e("strong",[a._v("auto 关键字")])]),a._v(" "),e("p",[a._v("auto关键字表示由浏览器自己决定长度。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("grid-template-columns: 100px auto 100px;\n\n")])])]),e("p",[a._v("上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。")])])}),[],!1,null,null,null);t.default=s.exports}}]);