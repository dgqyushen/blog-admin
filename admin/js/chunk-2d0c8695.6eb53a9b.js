(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8695"],{5587:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",[n("div",{staticStyle:{"font-size":"medium","margin-bottom":"5px"}},[n("strong",[t._v("关于我")])]),n("el-row",{staticStyle:{"margin-bottom":"2%"},attrs:{gutter:20}}),n("div",[n("mavon-editor",{staticStyle:{height:"calc(100vh - 260px)"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("el-row",{staticStyle:{"margin-top":"1%"}},[n("el-col",{attrs:{span:1,offset:23}},[n("el-button",{attrs:{type:"primary"},on:{click:t.send}},[t._v("修改")])],1)],1)],1)],1)},a=[],i={name:"AboutMe",data:function(){return{content:""}},methods:{send:function(){var t=this,e={content:this.content};this.$axios.post("/api/about/set",e).then((function(){t.$message({message:"修改成功",type:"success"}),setTimeout((function(){window.location.reload()}),1500)}))}},beforeMount:function(){var t=this;this.$axios.get("/api/about/get").then((function(e){var n=e.data;t.content=n.data}))}},s=i,c=n("2877"),r=Object(c["a"])(s,o,a,!1,null,"75f53f03",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0c8695.6eb53a9b.js.map