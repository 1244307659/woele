(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-337063ea"],{"07a7":function(t,s,i){"use strict";var e=i("e34a0"),a=i.n(e);a.a},bb51:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"homeWrap"},[i("header",[i("span",{staticClass:"logo"},[t._v("ele.me")]),i("router-link",{attrs:{to:"/login"}},[i("span",[t._v(t._s(t.userName?"":"登录|注册"))]),i("router-link",{attrs:{to:"/profile"}},[t.isShow1?i("i",{staticClass:"el-icon-user"}):t._e()])],1)],1),i("nav",[t._m(0),i("router-link",{attrs:{to:{name:"c",params:{cityId:t.guessCity?t.guessCity.id:1}}}},[i("span",{on:{click:t.setCid}},[t._v(t._s(t.guessCity?t.guessCity.name:""))]),i("i",{staticClass:"el-icon-arrow-right"})])],1),i("section",{staticClass:"hot_city"},[i("h4",{staticClass:"city_title"},[t._v("热门城市")]),i("ul",t._l(t.hotCity,(function(s){return i("li",{key:s.id,staticClass:"city_style",on:{click:function(i){return t.chooseCity(s.id)}}},[t._v(t._s(s.name))])})),0)]),i("section",{staticClass:"group_city"},[i("ul",t._l(t.groupCity,(function(s,e,a){return i("li",{key:e,staticClass:"g_li"},[i("h4",{staticClass:"city_title"},[t._v(t._s(e)+" "+t._s(a?"":"(按字母排序)")+" ")]),i("ul",t._l(s,(function(s){return i("li",{key:s.id,staticClass:"city_style ellipsis",on:{click:function(i){return t.chooseCity(s.id)}}},[t._v(t._s(s.name))])})),0)])})),0)])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("span",[t._v("当前定位城市：")]),i("span",{staticClass:"r_span"},[t._v("定位不准确，请在城市列表中选择")])])}],n=(i("4160"),i("b64b"),i("159b"),{name:"Home",data:function(){return{guessCity:null,hotCity:[],groupCity:null,userName:"",isShow:!1,isShow1:""}},created:function(){var t=this;this.userName=localStorage.getItem("username"),this.userName?this.isShow1=!0:this.isShow1=!1,this.axios.get("/v1/cities",{params:{type:"guess"}}).then((function(s){t.guessCity=s})).catch((function(t){})),this.axios.get("/v1/cities",{params:{type:"hot"}}).then((function(s){t.hotCity=s})).catch((function(t){})),this.axios.get("/v1/cities",{params:{type:"group"}}).then((function(s){t.handleGroupCity(s)})).catch((function(t){}))},methods:{handleGroupCity:function(t){var s={};Object.keys(t).sort().forEach((function(i){s[i]=t[i]})),this.groupCity=s},chooseCity:function(t){this.$router.push({name:"c",params:{cityId:t}}),localStorage.setItem("cityID",t)},setCid:function(){localStorage.setItem("cityID",this.guessCity.id)}}}),c=n,o=(i("07a7"),i("2877")),r=Object(o["a"])(c,e,a,!1,null,"362f3796",null);s["default"]=r.exports},e34a0:function(t,s,i){}}]);
//# sourceMappingURL=chunk-337063ea.abdcd9eb.js.map