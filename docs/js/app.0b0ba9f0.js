(function(e){function t(t){for(var n,o,r=t[0],l=t[1],c=t[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/CodeBrain/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"511d":function(e,t,a){"use strict";var n=a("54aa"),i=a.n(n);i.a},"54aa":function(e,t,a){},"54d6":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"flex-nav",attrs:{id:"header"}},[n("img",{attrs:{id:"logo",src:a("8d16")},on:{click:e.toHome}}),e.isLogged?n("div",{attrs:{id:"loggedInMsg"}},[n("p",{staticClass:"welcome-message"},[e._v(e._s(e.getName)+" "),n("button",{staticClass:"btn btn-outline-dark",attrs:{id:"logout"},on:{click:e.logout}},[e._v("Logout")])])]):e._e()]),n("router-view")],1)},s=[],o=(a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),r=a("04e1"),l=a.n(r),c=a("bc3a"),u=a.n(c),d="https://codebrain.herokuapp.com",m="authToken";function g(e,t){return new Promise(function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(n,i){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u()({url:"".concat(d,"/user/login"),method:"POST",data:{email:e,password:t}});case 3:return s=a.sent,b(s.data.token),a.next=7,localStorage.setItem("userEmail",s.data.user[0].email);case 7:return a.next=9,localStorage.setItem("userName",s.data.user[0].name);case 9:n(),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),console.error("Login Failed"),i("Login Failed");case 16:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,t){return a.apply(this,arguments)}}())}function p(e,t,a){return new Promise(function(){var n=Object(o["a"])(regeneratorRuntime.mark((function n(i,s){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u()({url:"".concat(d,"/user/signup"),method:"POST",data:{email:e,password:t,name:a}});case 3:o=n.sent,console.log(o),i(),n.next=12;break;case 8:n.prev=8,n.t0=n["catch"](0),console.error("Caught an error during login:",n.t0),s(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}())}function f(){h()}function b(e){localStorage.setItem(m,e)}function v(){return localStorage.getItem(m)}function h(){u.a.defaults.headers.common["Authorization"]="",localStorage.removeItem(m)}function w(){var e=v();return!!e&&!T(e)}function _(e){var t=l()(e);if(!t.exp)return null;var a=new Date(0);return a.setUTCSeconds(t.exp),a}function T(e){var t=_(e);return t<new Date}var C={methods:{logout:function(){f(),window.location.reload()},toHome:function(){"Home"!=this.$route.name&&this.$router.push("/")}},computed:{isLogged:function(){return w()},getName:function(){var e=localStorage.getItem("userName");return e?"Welcome "+e:"err"}}},x=C,k=(a("034f"),a("2877")),y=Object(k["a"])(x,i,s,!1,null,null,null),I=y.exports,O=a("8c4f"),N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"main-flex"}},[a("div",{attrs:{id:"left-stuff-container"}},[a("div",{attrs:{id:"queue"}},[a("div",{staticClass:"scroller-box-flex"},[a("p",{staticClass:"subtitle"},[e._v(" ToDo ")]),a("button",{staticClass:"btn btn-outline-dark",on:{click:e.addNewProblem}},[e._v(" + ")])]),a("div",{staticClass:"scroller-box"},[e._l(e.todo,(function(t){return a("div",{key:t.name,staticClass:"single-card",class:{active:e.activeCard==t.name},on:{click:function(a){return e.showDetails(t._id,e.todo)}}},[a("div",{staticClass:"single-card-title-and-overflow"},[a("div",{staticClass:"difficulty-bubble",class:"difficulty-bubble-"+t.difficulty}),a("p",{staticClass:"single-card-title"},[e._v(e._s(t.name))]),t.name.length>28?a("p",{staticClass:"single-card-overflow-indicator"},[e._v("...")]):e._e()]),a("div",{staticClass:"tag-bubble",class:"tag-bubble-"+t.mainTag},[e._v(e._s(t.mainTag))])])})),a("br")],2)]),a("div",{attrs:{id:"finished"}},[a("p",{staticClass:"subtitle"},[e._v("Recently Finished")]),a("div",{staticClass:"scroller-box"},e._l(e.finished,(function(t){return a("div",{key:t.name,staticClass:"single-card",class:{active:e.activeCard==t.name},on:{click:function(a){return e.showDetails(t._id,e.finished)}}},[a("div",{staticClass:"single-card-title-and-overflow"},[a("div",{staticClass:"difficulty-bubble",class:"difficulty-bubble-"+t.difficulty}),a("p",{staticClass:"single-card-title"},[e._v(e._s(t.name))]),t.name.length>28?a("p",{staticClass:"single-card-overflow-indicator"},[e._v("...")]):e._e()]),a("p",{staticClass:"finished-date"},[e._v(e._s(e.getFormattedDate(t.finishedAt)))])])})),0)])]),a("transition",{attrs:{name:"fade"}},[null!=e.selected?a("DetailBoxComponent",{attrs:{selectedItem:e.selected},on:{updatedProblemElement:e.updateProblemElements}}):e._e()],1),null==e.activeCard?a("div",{attrs:{id:"spacer"}}):e._e()],1)])},P=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"right-stuff-container"}},[e.isEditing?a("div",{staticClass:"detail-box"},[a("div",{staticClass:"edit-box-top"},[a("div",{staticClass:"difficulty-bubble-add",class:"difficulty-bubble-"+this.newDifficulty},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.newDifficulty,expression:"newDifficulty"}],staticClass:"difficulty-bubble-add-input",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.newDifficulty=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"easy"}},[e._v("Easy")]),a("option",{attrs:{value:"medium"}},[e._v("Medium")]),a("option",{attrs:{value:"hard"}},[e._v("Hard")])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],staticClass:"editBox",attrs:{id:"edit-title",type:"text",defaultValue:e.selectedItem.name},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newLink,expression:"newLink"}],staticClass:"editBox",attrs:{type:"url",defaultValue:e.selectedItem.link},domProps:{value:e.newLink},on:{input:function(t){t.target.composing||(e.newLink=t.target.value)}}}),a("br")]),a("div",{staticClass:"button-flex"},[a("button",{staticClass:"btn btn-outline-dark",attrs:{id:"white-dark-button"},on:{click:e.performEdits}},[e._v(" Save ")]),a("button",{staticClass:"btn btn-outline-dark",attrs:{id:"white-dark-button"},on:{click:e.cancelEdits}},[e._v(" Cancel ")])]),a("br"),a("div",{staticClass:"button-flex"},[a("div",{staticClass:"tag-bubble tag-bubble-edit spacer",class:"tag-bubble-"+e.newMainTag},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.newMainTag,expression:"newMainTag"}],staticClass:"tag-bubble-edit-input",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.newMainTag=t.target.multiple?a:a[0]}}},e._l(e.allTagOptions,(function(t,n){return a("option",{key:n,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._l(e.selectedItem.otherTags,(function(t,n){return a("div",{key:n,staticClass:"tag-bubble tag-bubble-delete spacer",class:"tag-bubble-"+t,on:{click:function(a){return e.queueTagToDelete(t)}}},[a("div",{staticClass:"tag-bubble-flex"},[e._v(" "+e._s(t)+" "),a("span",[e._v("✖")])])])})),a("div",{staticClass:"tag-bubble tag-bubble-add",attrs:{id:"tag-bubble-add"}},[a("div",{staticClass:"tag-bubble-flex"},[a("span",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.tagToAdd,expression:"tagToAdd"}],staticClass:"tag-bubble-add-input",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.tagToAdd=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Select a Tag")]),e._l(e.allTagOptions,(function(t,n){return a("option",{key:n},[e._v(e._s(t))])}))],2)]),a("div",{staticClass:"tag-bubble-add-confirm",on:{click:function(t){return e.queueTagToAdd()}}})])])],2),e.selectedItem.isComplete?a("div",[a("p",[e._v("Completed on "),a("strong",[e._v(e._s(e.getFormattedDate(e.selectedItem.finishedAt)))])])]):e._e(),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newNotes,expression:"newNotes"}],staticClass:"notes",attrs:{rows:"12",cols:"106",defaultValue:e.selectedItem.notes},domProps:{value:e.newNotes},on:{input:function(t){t.target.composing||(e.newNotes=t.target.value)}}}),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newSolution,expression:"newSolution"}],staticClass:"solution",attrs:{rows:"15",cols:"106",defaultValue:e.selectedItem.solution},domProps:{value:e.newSolution},on:{input:function(t){t.target.composing||(e.newSolution=t.target.value)}}})]):a("div",{staticClass:"detail-box"},[a("div",{staticClass:"flex",attrs:{id:"detail-title-flex"}},[a("div",{staticClass:"tag-bubble",class:"tag-bubble-"+e.selectedItem.difficulty},[e._v(e._s(e.formatDifficulty(e.selectedItem.difficulty)))]),a("p",{staticClass:"subtitle",attrs:{id:"detail-title"}},[e._v(e._s(e.selectedItem.name))])]),a("div",{staticClass:"button-flex"},[a("a",{staticClass:"btn btn-outline-dark spacer",attrs:{id:"white-dark-button",href:e.selectedItem.link,target:"_blank"}},[e._v("Problem Link")]),e.selectedItem.isComplete?e._e():a("div",[a("button",{staticClass:"btn btn-outline-dark spacer",attrs:{id:"white-dark-button"},on:{click:e.completeProblem}},[e._v(" Finish ")])]),a("button",{staticClass:"btn btn-outline-dark spacer",attrs:{id:"white-dark-button"},on:{click:e.startEditing}},[e._v(" Edit ")]),e.selectedItem.isComplete?e._e():a("button",{staticClass:"btn btn-outline-dark spacer",attrs:{id:"white-dark-button"},on:{click:e.bump}},[e._v(" Bump To Top ")])]),a("br"),a("div",{staticClass:"button-flex"},[a("div",{staticClass:"tag-bubble spacer",class:"tag-bubble-"+e.selectedItem.mainTag},[e._v(e._s(e.selectedItem.mainTag))]),e._l(e.selectedItem.otherTags,(function(t,n){return a("div",{key:n,staticClass:"tag-bubble spacer",class:"tag-bubble-"+t},[e._v(e._s(t))])}))],2),e.selectedItem.isComplete?a("div",[a("p",{staticClass:"completed-on-text"},[e._v("Completed on "),a("strong",[e._v(e._s(e.getFormattedDate(e.selectedItem.finishedAt)))])])]):e._e(),a("div",{staticClass:"notes"},[e.selectedItem.hasOwnProperty("notes")?a("p",{staticClass:"detail-text"},[e._v(e._s(e.selectedItem.notes))]):a("p",{staticClass:"detail-text"},[e._v("no notes...")])]),a("div",{staticClass:"solution"},[e.selectedItem.hasOwnProperty("solution")?a("p",{staticClass:"detail-text"},[e._v(e._s(e.selectedItem.solution))]):a("p",{staticClass:"detail-text"},[e._v("no solution...")])])])])},D=[],E=(a("4160"),a("caad"),a("c975"),a("a434"),a("ac1f"),a("2532"),a("1276"),a("9911"),a("159b"),{name:"DetailBoxComponent",data:function(){return{isEditing:!1,newName:null,newLink:null,newNotes:null,newSolution:null,newDifficulty:this.selectedItem.difficulty,newMainTag:this.selectedItem.mainTag,REST_ENDPOINT:"https://code-brain-backend-291804.wl.r.appspot.com",tagsToDelete:[],tagsToAdd:[],tagToAdd:"",addingNewTag:!1,allTagOptions:["Array","String","Dynamic-Programming","Tree","Math","Linked-List","BFS","DFS","Matrix","Recursion","Sliding-Window","Hash-Table","Design"]}},props:{selectedItem:Object},mounted:function(){console.log(this.selectedItem.solution)},methods:{formatDifficulty:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},queueTagToAdd:function(){this.selectedItem.otherTags.push(this.tagToAdd),this.tagsToAdd.push(this.tagToAdd),this.tagToAdd=""},queueTagToDelete:function(e){this.tagsToAdd.includes(e)?(this.selectedItem.otherTags.splice(this.selectedItem.otherTags.indexOf(e),1),this.tagsToAdd.splice(this.tagsToAdd.indexOf(e),1)):(this.selectedItem.otherTags.splice(this.selectedItem.otherTags.indexOf(e),1),this.tagsToDelete.push(e))},deleteOtherTags:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id+"/deleteOtherTag",method:"DELETE",data:{otherTags:e.tagsToDelete},headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 2:case"end":return t.stop()}}),t)})))()},addOtherTags:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id+"/addOtherTag",method:"POST",data:{otherTags:e.tagsToAdd},headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 2:case"end":return t.stop()}}),t)})))()},getFormattedDate:function(e){var t=new Date(e),a=t.toDateString().split(" "),n=t.toTimeString().split(":");return a[1]+" "+a[2]+", "+a[3]+" @ "+n[0]+":"+n[1]},bump:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id+"/bump",method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 2:window.location.reload();case 3:case"end":return t.stop()}}),t)})))()},completeProblem:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id+"/finish",method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 2:window.location.reload();case 3:case"end":return t.stop()}}),t)})))()},startEditing:function(){this.isEditing=!0,this.newName=this.selectedItem.name,this.newLink=this.selectedItem.link,this.newNotes=this.selectedItem.notes,this.newSolution=this.selectedItem.solution},performEdits:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={name:e.newName,link:e.newLink,notes:e.newNotes,solution:e.newSolution,difficulty:e.newDifficulty,mainTag:e.newMainTag},t.prev=1,t.next=4,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id,method:"PATCH",data:a,headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 4:return t.next=6,e.deleteOtherTags();case 6:return t.next=8,e.addOtherTags();case 8:e.tagsToDelete=[],e.$emit("updatedProblemElement"),e.isEditing=!1,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},cancelEdits:function(){var e=this;this.tagsToDelete=[],this.tagsToAdd.forEach((function(t){e.selectedItem.otherTags.splice(e.selectedItem.otherTags.indexOf(t),1)})),this.tagsToDelete.forEach((function(t){e.selectedItem.otherTags.push(t)})),this.addingNewTag=!1,this.newDifficulty=this.selectedItem.difficulty,this.newMainTag=this.selectedItem.mainTag,this.isEditingDifficulty=!1,this.isEditing=!1}}}),L=E,A=(a("511d"),Object(k["a"])(L,S,D,!1,null,"b8602076",null)),R=A.exports,j={name:"Home",components:{DetailBoxComponent:R},data:function(){return{todo:[],filteredTodo:[],finished:[],filteredFinished:[],selected:null,activeCard:null,REST_ENDPOINT:"https://codebrain.herokuapp.com"}},created:function(){this.getUserProblems()},methods:{updateProblemElements:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUserProblems();case 2:e.selected.isCompleted?e.showDetails(e.selected._id,e.finished):(console.log("todo",e.todo),e.showDetails(e.selected._id,e.todo));case 3:case"end":return t.stop()}}),t)})))()},getFormattedDate:function(e){var t=new Date(e),a=t.getMinutes();return a<10&&(a*=10),t.getMonth()+1+"/"+t.getDay()+" "+t.getHours()+":"+a},getUserProblems:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u()({url:"".concat(e.REST_ENDPOINT,"/problems/"),method:"GET",params:{isComplete:!1},headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}}).then((function(t){e.todo=t.data.problems,e.filteredTodo=t.data.problems}));case 3:return t.next=5,u()({url:"".concat(e.REST_ENDPOINT,"/problems/"),method:"GET",params:{isComplete:!0},headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}}).then((function(t){e.finished=t.data.problems,e.filteredFinished=t.data.problems}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},showDetails:function(e,t){var a=this;for(var n in t)if(t[n]._id==e)return this.selected=null,setTimeout((function(){a.selected=t[n],a.activeCard=a.selected.name}),200),void console.log("new selected",this.selected);console.log("not found uh oh")},addNewProblem:function(){this.$router.push("/create")}}},M=j,B=(a("e43a"),Object(k["a"])(M,N,P,!1,null,"cf9637a8",null)),F=B.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"inputs"},[e.isLoading?n("div",{staticClass:"popup-window"},[n("br"),n("br"),n("br"),n("br"),n("br"),e._v(" Loading... "),n("br"),n("br"),n("img",{staticClass:"loading-img",attrs:{src:a("c66f")}})]):e._e(),n("p",{attrs:{id:"login-signup"}},[e._v("Login")]),n("label",[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"login-input",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("label",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login-input",attrs:{type:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(e.email,e.password)},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"flex"},[n("button",{staticClass:"btn btn-outline-dark",on:{click:function(t){return e.login(e.email,e.password)}}},[e._v("Login")]),n("div",{staticClass:"signup-login-btn",on:{click:e.toSignup}},[e._v("Signup")])]),n("br"),n("br"),n("div",[n("p",[e._v("Are you a recruiter, employer, or just want a demo?")]),n("button",{staticClass:"btn btn-outline-dark",on:{click:function(t){return e.login("demo@demo.com","demoPassword")}}},[e._v("Use our demo account")])])])},H=[],z={name:"Login",data:function(){return{email:"",password:"",isLoading:!1}},methods:{login:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.isLoading=!0,n.prev=1,n.next=4,g(e,t);case 4:a.isLoading=!1,a.$router.push("/"),window.location.reload(),n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](1),alert("Login Failed"),a.isLoading=!1;case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()},toSignup:function(){this.$router.push("/signup")}}},q=z,U=(a("d6db"),Object(k["a"])(q,$,H,!1,null,null,null)),V=U.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isLoading?n("div",{staticClass:"popup-window"},[n("br"),n("br"),n("br"),n("br"),n("br"),e._v(" Loading... "),n("br"),n("br"),n("img",{staticClass:"loading-img",attrs:{src:a("c66f")}})]):e._e(),n("div",{staticClass:"inputs"},[n("p",{attrs:{id:"login-signup"}},[e._v("Signup")]),n("label",[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("label",[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),n("label",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"flex"},[n("button",{staticClass:"btn btn-outline-dark",on:{click:e.signup}},[e._v("Signup")]),n("div",{staticClass:"signup-login-btn",on:{click:e.toLogin}},[e._v("Login")])])])},G=[],J={name:"Signup",data:function(){return{email:"",name:"",password:"",isLoading:!1}},methods:{toLogin:function(){this.$router.push("/login")},signup:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,p(e.email,e.password,e.name);case 4:e.isLoading=!1,e.$router.push("/"),window.location.reload(),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),alert("Error: "+t.t0.message),e.isLoading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}},Q=J,K=Object(k["a"])(Q,W,G,!1,null,"471f4cf3",null),X=K.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isLoading?n("div",{staticClass:"popup-window"},[n("br"),n("br"),n("br"),n("br"),n("br"),e._v(" Loading... "),n("br"),n("br"),n("img",{staticClass:"loading-img",attrs:{src:a("c66f")}})]):e._e(),n("p",{staticClass:"subtitle"},[e._v("Add New Interview Problem")]),n("br"),n("label",[e._v("Question Name")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),n("label",[e._v("Link")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],attrs:{type:"text"},domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}),n("br"),e._v(" Main Tag "),n("br"),n("div",{staticClass:"tag-bubble tag-bubble-edit",class:"tag-bubble-"+e.mainTag},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mainTag,expression:"mainTag"}],staticClass:"tag-bubble-edit-input",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mainTag=t.target.multiple?a:a[0]}}},e._l(e.allTagOptions,(function(t,a){return n("option",{key:a,domProps:{value:t}},[e._v(e._s(t))])})),0)]),n("br"),e._v(" Other Tags "),n("br"),n("div",{staticClass:"flex"},e._l(e.allTagOptions,(function(t,a){return n("div",{key:a,staticClass:"tag-bubble",class:e.getClass(t),on:{click:function(a){return e.toggleAddOtherTag(t)}}},[e._v(" "+e._s(t)+" ")])})),0),n("br"),e._v(" Difficulty "),n("br"),n("div",{staticClass:"flex"},[n("div",{staticClass:"tag-bubble tag-bubble-easy",class:{active:"easy"==e.difficulty},on:{click:function(t){return e.toggleDifficulty("easy")}}},[e._v("Easy")]),n("div",{staticClass:"tag-bubble tag-bubble-medium",class:{active:"medium"==e.difficulty},on:{click:function(t){return e.toggleDifficulty("medium")}}},[e._v("Medium")]),n("div",{staticClass:"tag-bubble tag-bubble-hard",class:{active:"hard"==e.difficulty},on:{click:function(t){return e.toggleDifficulty("hard")}}},[e._v("Hard")])]),n("label",[e._v("Notes")]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"notes"}],attrs:{rows:"10",cols:"80"},domProps:{value:e.notes},on:{input:function(t){t.target.composing||(e.notes=t.target.value)}}}),n("br"),n("label",[e._v("Solution")]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.solution,expression:"solution"}],attrs:{rows:"10",cols:"80"},domProps:{value:e.solution},on:{input:function(t){t.target.composing||(e.solution=t.target.value)}}}),n("br"),n("br"),n("button",{staticClass:"btn btn-outline-dark spacer",on:{click:e.addNewProblem}},[e._v("Finish")]),n("button",{staticClass:"btn btn-outline-dark spacer",on:{click:e.cancel}},[e._v("Cancel")]),n("br"),n("br"),n("br")])},Z=[],ee={name:"CreateProblem",data:function(){return{name:"",link:"",notes:"",solution:"",mainTag:"",otherTags:[],allTagOptions:["Array","String","Dynamic-Programming","Tree","Math","Linked-List","BFS","DFS","Matrix","Recursion","Sliding-Window","Hash-Table","Design"],difficulty:null,isLoading:!1,REST_ENDPOINT:"https://codebrain.herokuapp.com"}},methods:{toggleDifficulty:function(e){this.difficulty=e},getClass:function(e){var t="";return t+="tag-bubble-"+e,this.otherTags.includes(e)&&(t+=" active"),t},toggleAddOtherTag:function(e){this.otherTags.includes(e)?this.otherTags.splice(this.otherTags.indexOf(e),1):this.otherTags.push(e)},addNewProblem:function(){var e=this,t={name:this.name,link:this.link,mainTag:this.mainTag,otherTags:this.otherTags,difficulty:this.difficulty};this.notes.length>0&&(t["notes"]=this.notes),this.solution.length>0&&(t["solution"]=this.solution);try{this.isLoading=!0,u()({url:"".concat(this.REST_ENDPOINT,"/problems"),method:"POST",data:t,headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}}).then((function(t){console.log(t),e.isLoading=!1,e.$router.push("/")}))}catch(a){this.isLoading=!1,console.log(a)}},cancel:function(){this.$router.push("/")}}},te=ee,ae=(a("fb9e"),Object(k["a"])(te,Y,Z,!1,null,"3b72f384",null)),ne=ae.exports;n["a"].use(O["a"]);var ie=[{path:"/",name:"Home",component:F},{path:"/login",name:"Login",component:V,meta:{allowAnonymous:!0}},{path:"/signup",name:"Signup",component:X,meta:{allowAnonymous:!0}},{path:"/create",name:"Create",component:ne}],se=new O["a"]({routes:ie});se.beforeEach((function(e,t,a){"login"==e.name&&w()?a({path:"/"}):e.meta.allowAnonymous||w()?a():a({path:"/login",query:{redirect:e.fullPath}})}));var oe=se;a("4989"),a("f9e3");n["a"].config.productionTip=!1,new n["a"]({router:oe,render:function(e){return e(I)}}).$mount("#app")},"85ec":function(e,t,a){},"8d16":function(e,t,a){e.exports=a.p+"img/CodeBrain.15693d1b.png"},a127:function(e,t,a){},c66f:function(e,t,a){e.exports=a.p+"img/30.376ef207.gif"},d6db:function(e,t,a){"use strict";var n=a("e67a"),i=a.n(n);i.a},e43a:function(e,t,a){"use strict";var n=a("a127"),i=a.n(n);i.a},e67a:function(e,t,a){},fb9e:function(e,t,a){"use strict";var n=a("54d6"),i=a.n(n);i.a}});
//# sourceMappingURL=app.0b0ba9f0.js.map