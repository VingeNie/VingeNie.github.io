(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0108":function(e,t,a){"use strict";a("d454")},a751:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"bg-grey-3 column"},[a("div",{staticClass:"row q-pa-sm bg-primary"},[a("q-input",{staticClass:"col",attrs:{square:"","bg-color":"white",filled:"",placeholder:"Add Task",dense:""},on:{key:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:e.addTask}})]},proxy:!0}]),model:{value:e.newTask,callback:function(t){e.newTask=t},expression:"newTask"}})],1),a("q-list",{staticClass:"bg-white",attrs:{separator:"",bordered:""}},e._l(e.tasks,(function(t,s){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,class:{"done bg-blue-1":t.done},attrs:{clickable:""},on:{click:function(e){t.done=!t.done}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-checkbox",{staticClass:"no-pointer-events",attrs:{"keep-color":"",color:"primary"},model:{value:t.done,callback:function(a){e.$set(t,"done",a)},expression:"task.done"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))])],1),a("q-item-section",{directives:[{name:"show",rawName:"v-show",value:t.done,expression:"task.done"}],attrs:{side:""}},[a("q-btn",{attrs:{flat:"",round:"",dense:"",color:"primary",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteTask(s)}}})],1)],1)})),1),e.tasks.length?e._e():a("div",{staticClass:"no-tasks absolute-center"},[a("q-icon",{attrs:{name:"check",size:"100px",color:"primary"}}),a("div",{staticClass:"text-h5 text-primary text-center"},[e._v("No Tasks")])],1)],1)},n=[],o=(a("a434"),{data(){return{newTask:"",tasks:[]}},methods:{addTask(){this.newTask.length&&(this.tasks.push({title:this.newTask,done:!1}),this.newTask="")},deleteTask(e){this.$q.dialog({title:"确认",message:"确定删除吗",cancel:!0,persistent:!0}).onOk((()=>{this.tasks.splice(e,1),this.$q.notify({message:"Task deleted !",color:"warning"})}))},getColor(){let e=parseInt(256*Math.random()),t=parseInt(256*Math.random()),a=parseInt(256*Math.random());return`rgba(${e},${t},${a},0.3)`}}}),i=o,r=(a("0108"),a("2877")),c=a("9989"),l=a("27f9"),d=a("9c40"),k=a("1c1c"),p=a("66e5"),u=a("4074"),m=a("8f8e"),h=a("0170"),b=a("0016"),f=a("714f"),w=a("eebe"),g=a.n(w),v=Object(r["a"])(i,s,n,!1,null,"e13c20c2",null);t["default"]=v.exports;g()(v,"components",{QPage:c["a"],QInput:l["a"],QBtn:d["a"],QList:k["a"],QItem:p["a"],QItemSection:u["a"],QCheckbox:m["a"],QItemLabel:h["a"],QIcon:b["a"]}),g()(v,"directives",{Ripple:f["a"]})},d454:function(e,t,a){}}]);