(function(e){function t(t){for(var a,r,s=t[0],o=t[1],c=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&f.push(l[r][0]),l[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==l[o]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03ec":function(e,t,n){},"11d9":function(e,t,n){e.exports=n.p+"img/3.4ec2ee80.jpg"},2232:function(e,t,n){},"2fe6":function(e,t,n){e.exports=n.p+"img/dog.0b64cfe9.jpg"},"32a5":function(e,t,n){},3442:function(e,t,n){"use strict";n("5fbf")},"405a":function(e,t,n){e.exports=n.p+"img/2.ff258d49.jpg"},"475f":function(e,t,n){"use strict";n("8614")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isLogin||e.flag?e._e():n("HelloWorld",{on:{changeFlag:e.changeFlag}}),!e.isLogin&&e.flag?n("Login",{on:{loginIn:e.loginIn}}):e._e(),e.isLogin?n("div",[n("div",{staticStyle:{"padding-bottom":"50px"}},[n("router-view")],1),n("van-tabbar",{on:{change:e.onChange},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"home-o"}},[e._v("首页")]),n("van-tabbar-item",{attrs:{icon:"friends-o"}},[e._v("消息")]),n("van-tabbar-item",{attrs:{icon:"setting-o"}},[e._v("设置")])],1)],1):e._e()],1)},i=[],r=n("d399"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("van-swipe",{staticClass:"hello-swipe",attrs:{"indicator-color":"white",loop:!1},on:{change:function(t){return e.swipeChage(t)}}},[a("van-swipe-item",[a("img",{attrs:{src:n("8554"),alt:""}})]),a("van-swipe-item",[a("img",{attrs:{src:n("405a"),alt:""}})]),a("van-swipe-item",{on:{click:function(t){return e.toLogin()}}},[a("img",{attrs:{src:n("11d9"),alt:""}})])],1)],1)},o=[],c={name:"HelloWorld",props:{msg:String},methods:{swipeChage:function(e){console.log(e)},toLogin:function(){this.$emit("changeFlag",!0),window.localStorage.setItem("cacheflag",!0)}}},u=c,d=(n("638f"),n("2877")),f=Object(d["a"])(u,s,o,!1,null,"f4c0e79e",null),v=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("van-overlay",{attrs:{show:e.loading},on:{click:function(t){e.loading=!1}}}),e.loading?n("van-loading",{staticClass:"loading",attrs:{color:"#1989fa"}}):e._e(),n("van-form",{staticClass:"login-form",on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"用户名",label:"用户名","left-icon":"orders-o",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("van-field",{attrs:{type:"password",name:"密码","left-icon":"closed-eye",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.islogin?n("van-button",{staticStyle:{height:"50px","font-size":"18px"},attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("登录")]):e._e(),e.islogin?e._e():n("van-button",{staticStyle:{height:"50px","font-size":"18px"},attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("注册")]),e.islogin?e._e():n("van-button",{staticStyle:{height:"50px","font-size":"18px","margin-top":"15px"},attrs:{round:"",block:"",type:"info"},on:{click:e.gologin}},[e._v("去登陆")])],1),n("div",{staticClass:"register"},[n("div",{staticStyle:{color:"darkgrey"}},[e._v(" 还没有注册？")]),n("div",{staticStyle:{"font-weight":"600"},on:{click:e.register}},[e._v("现在注册")])]),n("div",[e._v(" "+e._s(e.error)+" ")])],1)},p=[],m=(n("99af"),n("f564")),h={name:"Login",data:function(){return{username:"",password:"",loading:!1,islogin:!0,userlist:[],error:"err"}},mounted:function(){var e=this;window.onresize=function(){window.screenWidth=document.body.clientWidth,e.screenWidth=window.screenWidth}},methods:{gologin:function(){this.islogin=!0},register:function(){this.islogin=!1},loginIn:function(){var e=this,t=[{username:"jkk",password:"123"}],n=window.localStorage.getItem("userlist");this.userlist=n?JSON.parse(n).concat(t):t;var a=this.userlist.some((function(t){return t.username===e.username&&t.password===e.password}));a?this.$emit("loginIn",!0):Object(m["a"])({type:"danger",message:"用户名或密码错误"})},onSubmit:function(){var e=this;if(this.loading=!0,this.islogin)try{this.loading=!1,window.localStorag.setItem("user",this.username),setTimeout((function(){e.loading=!1,e.loginIn()}),1e3)}catch(a){this.error=a}else{if(!this.username||!this.password)return void Object(m["a"])({type:"warning",message:"请输入用户名和密码"});var t=window.localStorage.getItem("userlist"),n=t?JSON.parse(t):[];if(n.some((function(t){return t.username===e.username})))return void Object(m["a"])({type:"warning",message:"此用户名已被注册"});n.push({username:this.username,password:this.password}),window.localStorage.setItem("userlist",JSON.stringify(n)),Object(m["a"])({type:"success",message:"注册成功"}),this.loading=!1}}}},b=h,w=(n("475f"),Object(d["a"])(b,g,p,!1,null,"03e663e9",null)),_=w.exports,y={name:"App",components:{HelloWorld:v,Login:_},data:function(){return{isLogin:!1,flag:!1,active:0}},mounted:function(){this.flag="true"===window.localStorage.getItem("cacheflag")},methods:{changeFlag:function(e){this.flag=e},loginIn:function(e){this.isLogin=e},onClickLeft:function(){Object(r["a"])("返回")},onClickRight:function(){Object(r["a"])("按钮")},onChange:function(e){switch(e){case 0:this.$router.push("/home");break;case 1:this.$router.push("/message");break;case 2:this.$router.push("/settings");break;default:break}}}},x=y,C=(n("cce2"),Object(d["a"])(x,l,i,!1,null,"1502ba2a",null)),j=C.exports,k=n("b970"),S=n("8c4f"),O=(n("157a"),n("f28c"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("van-swipe",{staticClass:"home-swipe",attrs:{loop:!1,width:300,"show-indicators":!1},on:{change:e.onChange}},[a("van-swipe-item",{class:{actived:0===e.currentIndex}},[a("img",{attrs:{src:n("d544"),alt:""}})]),a("van-swipe-item",{class:{actived:1===e.currentIndex}},[a("img",{attrs:{src:n("d544"),alt:""}})]),a("van-swipe-item",{class:{actived:2===e.currentIndex}},[a("img",{attrs:{src:n("d544"),alt:""}})])],1)],1)}),I=[],$={name:"Home",data:function(){return{currentIndex:0}},methods:{onChange:function(e){console.log(e),this.currentIndex=e}}},L=$,E=(n("93ef"),Object(d["a"])(L,O,I,!1,null,"d208a7ea",null)),P=E.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message"},[n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}}),n("van-cell",{attrs:{center:"",title:"张大爷",value:"内容...",label:"描述信息..."}})],1)},J=[],z={name:"message",data:function(){return{currentIndex:0}},methods:{}},F=z,H=(n("57bb"),Object(d["a"])(F,W,J,!1,null,"0a1cad6a",null)),M=H.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting"},[n("div",{staticClass:"card"},[e._m(0),n("div",{staticClass:"info"},[n("div",[e._v("jkk")]),n("div",[e._v("安徽省宿州市")]),n("div",{staticStyle:{width:"80%","margin-top":"30px"}},[n("van-progress",{attrs:{color:"orange",percentage:30}})],1),n("div",[e._v("活跃度")])])]),n("div",{staticClass:"other"},[n("Cell",{attrs:{title:"个人信息",iconname:"orders-o"}}),n("Cell",{attrs:{title:"我的客服",iconname:"service-o"}}),n("Cell",{attrs:{title:"账号安全",iconname:"bag-o"}}),n("Cell",{attrs:{title:"应用设置",iconname:"setting-o"},on:{handleclick:function(t){return e.setting()}}}),n("Cell",{attrs:{title:"关于我们",iconname:"contact"}}),n("Cell",{attrs:{title:"清空缓存",iconname:"contact"},on:{handleclick:function(t){return e.clear()}}})],1)])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"avtor"},[a("img",{attrs:{src:n("2fe6"),alt:""}})])}],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cell",on:{click:function(t){return e.handleClick()}}},[n("div",{staticClass:"icon-content"},[n("van-icon",{attrs:{name:e.iconname}})],1),n("span",[e._v(e._s(e.title))]),n("van-icon",{attrs:{name:"arrow"}})],1)},A=[],R={name:"cell",props:{title:{type:String,default:"个人信息"},iconname:{type:String,default:"orders-o"}},data:function(){return{}},methods:{handleClick:function(){this.$emit("handleclick")}}},B=R,D=(n("deda"),Object(d["a"])(B,q,A,!1,null,"ef28d022",null)),G=D.exports,K={name:"Settings",components:{Cell:G},data:function(){return{username:window.localStorage.getItem("user")||"未登录"}},methods:{clear:function(){window.localStorage.setItem("cacheflag",!1),Object(m["a"])({type:"success",message:"缓存清除成功"})},setting:function(){console.log("setting")}}},Q=K,U=(n("3442"),Object(d["a"])(Q,T,N,!1,null,"4fe8db4e",null)),V=U.exports,X=[{path:"/home",component:P},{path:"/message",component:M},{path:"/settings",component:V},{path:"/",redirect:"/home"}],Y=new S["a"]({routes:X}),Z=Y;a["a"].config.productionTip=!1,a["a"].use(k["a"]),a["a"].use(S["a"]),new a["a"]({render:function(e){return e(j)},router:Z}).$mount("#app")},"57bb":function(e,t,n){"use strict";n("03ec")},"5fbf":function(e,t,n){},"638f":function(e,t,n){"use strict";n("2232")},"844b":function(e,t,n){},8554:function(e,t,n){e.exports=n.p+"img/1.d5a280bb.jpg"},8614:function(e,t,n){},"93ef":function(e,t,n){"use strict";n("844b")},a863:function(e,t,n){},cce2:function(e,t,n){"use strict";n("a863")},d544:function(e,t,n){e.exports=n.p+"img/home-1.1a6522c3.jpg"},deda:function(e,t,n){"use strict";n("32a5")},f28c:function(e,t,n){}});
//# sourceMappingURL=app.bf0b2a3e.js.map