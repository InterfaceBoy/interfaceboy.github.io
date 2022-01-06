(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{77:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuex-学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-学习"}},[t._v("#")]),t._v(" VueX 学习")]),t._v(" "),a("h2",{attrs:{id:"基本概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概述"}},[t._v("#")]),t._v(" 基本概述")]),t._v(" "),a("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")]),t._v(" "),a("h4",{attrs:{id:"单向数据流理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流理念"}},[t._v("#")]),t._v(" 单向数据流理念")]),t._v(" "),a("p",[a("strong",[t._v("典型通讯方式")]),t._v("：父子组件通讯、兄弟组件通讯")]),t._v(" "),a("blockquote",[a("p",[t._v("state通过声明的方式将数据映射到view中，view拿到数据进行渲染，用户在view层更新数据，view将\n更改的数据传递到actions中，actions拿到数据在去状态中更新state。")])]),t._v(" "),a("h2",{attrs:{id:"核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),a("p",[t._v("在vuex中store是整个应用的核心，“store”属于容器的存在，包含着大部分state状态，为控制store的\n途径唯一性，改变状态只能通过mutation来改变。")]),t._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("p",[a("strong",[t._v("1、获取vuex中state状态值")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("this.$store.state.值名称\n")])])]),a("p",[a("strong",[t._v("2、mapState 辅助函数")]),a("br"),t._v("\n当一个组件需要获取多个状态时，mapState可自动生成计算属性")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import {mapState} from 'vuex'\nexport default {\n name: 'home',\n computed: mapState(['nickname','age','gender'])\n}\n")])])]),a("p",[t._v("上面代码相当于")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nickname(){return this.$store.state.nickname}\nage(){return this.$store.state.age}\ngender(){return this.$store.state.gender}\n")])])]),a("p",[t._v("如果在计算属性（computed）中需要自定义一个计算属性，将使用下面的方法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("computed: {   //computed是不能传参数的\n  value(){\n   return this.val/7\n},\n// 使用ES6的扩展运算符\n  ...mapState(['nickname','age','gender'])\n}\n")])])]),a("h3",{attrs:{id:"getter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getter"}},[t._v("#")]),t._v(" Getter")]),t._v(" "),a("p",[t._v("可以将其看作store的计算属性，就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。"),a("br"),t._v("\n在getter中有两个参数，第一个参数代表当前状态中的state，第二个参数代表getters本身。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const store = new Vuex.Store({\n  state: {\n    todos: [\n      { id: 1, text: '...', done: true },\n      { id: 2, text: '...', done: false }\n    ]\n  },\n  getters: {\n    doneTodos: state => {\n      return state.todos.filter(todo => todo.done)\n    },\n    doneTodosCount: (state, getters) => {\n    return getters.doneTodos.length\n  }\n  }\n})\n")])])]),a("p",[a("strong",[t._v("使用方法的方式访问getters")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("getters: { \n  getTodoById: (state) => (id) => {\n    return state.todos.find(todo => todo.id === id)\n  }\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }\n")])])]),a("p",[a("strong",[t._v("mapGetters辅助函数")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { mapGetters } from 'vuex'\n\nexport default {\n  // ...\n  computed: {\n  // 使用对象展开运算符将 getter 混入 computed 对象中\n    ...mapGetters([\n      'doneTodosCount',\n      'anotherGetter',\n      // ...\n    ])\n  }\n}\n")])])]),a("p",[t._v("如果你需要在mapGetters中更改属性名称，需要使用对象的形式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("...mapGetters({\n  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`\n  doneCount: 'doneTodosCount'\n})\n")])])]),a("h3",{attrs:{id:"mutation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" mutation")]),t._v(" "),a("p",[a("strong",[t._v("基本定义")]),a("br"),t._v("\n在vuex中mutation类似于一个事件，它存在一个事件类型和一个回调函数，回调函数就是我们实际修改state的地方。"),a("br"),t._v("\n在mutation中我们不能直接调取回调函数，必须先注册事件。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const store = new Vuex.Store({\n  state: {\n    count: 1\n  },\n  mutations: {\n    // increment=事件类型（注册事件）\n    increment (state) {\n      // 变更状态\n      // 注意在所有的mutation中，更改的状态都必须在state先声明才能使用。\n      state.count++\n    }\n  }\n})\n")])])]),a("p",[a("strong",[t._v("载荷")]),a("br"),t._v("\n在mutation中如果你想使用store.commit传入额外的参数，就要使用载荷（payload）。\n但是在载荷中我们一般传递的都是对象，因为对象的表意更加的明确。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mutations: {\n  increment (state, payload) {\n    state.count += payload.amount\n  }\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("store.commit('increment', {\n  amount: 10\n})\n")])])]),a("blockquote",[a("p",[t._v("既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项："),a("br"),t._v("\n1、在 store 中初始化好所有所需属性。"),a("br"),t._v("\n2、当需要在对象上添加新属性时，使用 Vue.set(obj, 'newProp', 123),"),a("br"),t._v("\n3、或者利用对象展开运算符我们可以这样写：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("state.obj = { ...state.obj, newProp: 123 }  \n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);