(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(a){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1),i("div",{staticClass:"q-px-lg q-mb-md"},[i("div",{staticClass:"class text-h4"},[t._v("Face Manager")]),i("div",{staticClass:"class text subtitle1"},[t._v(t._s(t.todaysData))])]),i("q-img",{staticClass:"header-image absolute-top",attrs:{src:e("b883")}})],1),i("q-drawer",{attrs:{"show-if-above":"",width:200,breakpoint:600},model:{value:t.leftDrawerOpen,callback:function(a){t.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[i("q-scroll-area",{staticStyle:{height:"calc(100% - 127px)","margin-top":"127px","border-right":"1px solid #ddd"}},[i("q-list",{attrs:{padding:""}},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",exact:"",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"star"}})],1),i("q-item-section",[t._v(" 今日客户 ")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/Search",exact:"",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"search"}})],1),i("q-item-section",[t._v(" 历史客户 ")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/Todo",exact:"",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"list"}})],1),i("q-item-section",[t._v(" 代办事项 ")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"settings"}})],1),i("q-item-section",[t._v(" 设置 ")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/Help",exact:"",clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"help"}})],1),i("q-item-section",[t._v(" 帮助 ")])],1)],1)],1),i("q-img",{staticClass:"absolute-top",staticStyle:{height:"127px"},attrs:{src:e("b883")}},[i("div",{staticClass:"absolute-bottom bg-transparent"},[i("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[i("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),i("div",{staticClass:"text-weight-bold"},[t._v("聂奇")]),i("div",[t._v("@rstoenescu")])],1)])],1),i("q-page-container",[i("keep-alive",[i("router-view")],1)],1)],1)},r=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:t.icon}})],1):t._e(),e("q-item-section",[e("q-item-label",[t._v(t._s(t.title))]),e("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},n=[],c={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},o=c,l=e("2877"),p=e("66e5"),m=e("4074"),d=e("0016"),u=e("0170"),v=e("eebe"),q=e.n(v),b=Object(l["a"])(o,s,n,!1,null,null,null),f=b.exports;q()(b,"components",{QItem:p["a"],QItemSection:m["a"],QIcon:d["a"],QItemLabel:u["a"]});var h=e("bd4c");const w=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}];var k={name:"MainLayout",components:{EssentialLink:f},data(){return{leftDrawerOpen:!1,essentialLinks:w}},computed:{todaysData(){let t=Date.now();return h["a"].formatDate(t,"YYYY-MM-DD dddd")}}},g=k,_=(e("89d3"),e("4d5a")),Q=e("e359"),x=e("65c6"),D=e("9c40"),y=e("068f"),C=e("9404"),S=e("4983"),I=e("1c1c"),L=e("cb32"),O=e("09e3"),F=e("714f"),M=Object(l["a"])(g,i,r,!1,null,null,null);a["default"]=M.exports;q()(M,"components",{QLayout:_["a"],QHeader:Q["a"],QToolbar:x["a"],QBtn:D["a"],QImg:y["a"],QDrawer:C["a"],QScrollArea:S["a"],QList:I["a"],QItem:p["a"],QItemSection:m["a"],QIcon:d["a"],QAvatar:L["a"],QPageContainer:O["a"]}),q()(M,"directives",{Ripple:F["a"]})},"89d3":function(t,a,e){"use strict";e("e87e")},b883:function(t,a,e){t.exports=e.p+"img/tree.8b59a3f5.jpg"},e87e:function(t,a,e){}}]);