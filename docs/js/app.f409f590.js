(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/CodeBrain/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},3857:function(e,t,n){"use strict";var a=n("9b15"),i=n.n(a);i.a},5474:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"flex-nav",attrs:{id:"header"}},[a("img",{attrs:{id:"logo",src:n("8d16")},on:{click:e.toHome}}),e.isLogged?a("div",{attrs:{id:"loggedInMsg"}},[a("p",{staticStyle:{"font-size":"20px",margin:"0 30px 0 0"}},[e._v(e._s(e.getName)+" "),a("button",{staticClass:"btn btn-outline-dark",attrs:{id:"logout"},on:{click:e.logout}},[e._v("Logout")])])]):e._e()]),a("router-view")],1)},s=[],o=(n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),r=n("04e1"),l=n.n(r),c=n("bc3a"),u=n.n(c),d=Object({NODE_ENV:"production",BASE_URL:"/CodeBrain/"}).API_NAME||"http://localhost:8000",m="authToken";function p(e,t){return new Promise(function(){var n=Object(o["a"])(regeneratorRuntime.mark((function n(a,i){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u()({url:"".concat(d,"/user/login"),method:"POST",data:{email:e,password:t}});case 3:return s=n.sent,v(s.data.token),n.next=7,localStorage.setItem("userEmail",s.data.user[0].email);case 7:return n.next=9,localStorage.setItem("userName",s.data.user[0].name);case 9:a(),n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](0),console.error("Login Failed"),i("Login Failed");case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e,t){return n.apply(this,arguments)}}())}function g(e,t,n){return new Promise(function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(i,s){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u()({url:"".concat(d,"/user/signup"),method:"POST",data:{email:e,password:t,name:n}});case 3:o=a.sent,console.log(o),i(),a.next=12;break;case 8:a.prev=8,a.t0=a["catch"](0),console.error("Caught an error during login:",a.t0),s(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e,t){return a.apply(this,arguments)}}())}function f(){h()}function v(e){localStorage.setItem(m,e)}function b(){return localStorage.getItem(m)}function h(){u.a.defaults.headers.common["Authorization"]="",localStorage.removeItem(m)}function w(){var e=b();return!!e&&!T(e)}function _(e){var t=l()(e);if(!t.exp)return null;var n=new Date(0);return n.setUTCSeconds(t.exp),n}function T(e){var t=_(e);return t<new Date}var x={methods:{logout:function(){f(),window.location.reload()},toHome:function(){"Home"!=this.$route.name&&this.$router.push("/")}},computed:{isLogged:function(){return w()},getName:function(){var e=localStorage.getItem("userName");return e?"Welcome "+e:"err"}}},C=x,k=(n("034f"),n("2877")),y=Object(k["a"])(C,i,s,!1,null,null,null),N=y.exports,I=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"main-flex"}},[n("div",{attrs:{id:"left-stuff-container"}},[n("div",{attrs:{id:"queue"}},[n("div",{staticClass:"scroller-box-flex"},[n("p",{staticClass:"subtitle"},[e._v(" ToDo ")]),n("div",{staticClass:"filters"},[e._v("Filter")]),n("button",{staticClass:"btn btn-outline-dark",on:{click:e.addNewProblem}},[e._v(" + ")])]),n("div",{staticClass:"scroller-box"},[e._l(e.todo,(function(t){return n("div",{key:t.name,staticClass:"single-card",class:{active:e.activeCard==t.name},on:{click:function(n){return e.showDetails(t._id,e.todo)}}},[n("div",{staticClass:"single-card-title-and-overflow"},[n("div",{staticClass:"difficulty-bubble",class:"difficulty-bubble-"+t.difficulty}),n("p",{staticClass:"single-card-title"},[e._v(e._s(t.name))]),t.name.length>28?n("p",{staticClass:"single-card-overflow-indicator"},[e._v("...")]):e._e()]),n("div",{staticClass:"tag-bubble",class:"tag-bubble-"+t.mainTag},[e._v(e._s(t.mainTag))])])})),n("br")],2)]),n("div",{attrs:{id:"finished"}},[n("p",{staticClass:"subtitle"},[e._v("Recently Finished")]),n("div",{staticClass:"scroller-box"},e._l(e.finished,(function(t){return n("div",{key:t.name,staticClass:"single-card",class:{active:e.activeCard==t.name},on:{click:function(n){return e.showDetails(t._id,e.finished)}}},[n("div",{staticClass:"single-card-title-and-overflow"},[n("p",{staticClass:"single-card-title"},[e._v(e._s(t.name))]),t.name.length>28?n("p",{staticClass:"single-card-overflow-indicator"},[e._v("...")]):e._e()]),n("p",[e._v(e._s(e.getFormattedDate(t.finishedAt)))])])})),0)])]),n("transition",{attrs:{name:"fade"}},[null!=e.selected?n("DetailBoxComponent",{attrs:{selectedItem:e.selected},on:{updatedProblemElement:e.updateProblemElements}}):e._e()],1),null==e.activeCard?n("div",{attrs:{id:"spacer"}}):e._e()],1)])},E=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"right-stuff-container"}},[e.isEditing?n("div",{staticClass:"detail-box"},[n("div",{staticClass:"edit-box-top"},[n("div",{staticClass:"difficulty-bubble-add",class:"difficulty-bubble-"+this.newDifficulty},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.newDifficulty,expression:"newDifficulty"}],staticClass:"difficulty-bubble-add-input",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.newDifficulty=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"easy"}},[e._v("Easy")]),n("option",{attrs:{value:"medium"}},[e._v("Medium")]),n("option",{attrs:{value:"hard"}},[e._v("Hard")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],staticClass:"editBox",attrs:{id:"edit-title",type:"text",defaultValue:e.selectedItem.name},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newLink,expression:"newLink"}],staticClass:"editBox",attrs:{type:"url",defaultValue:e.selectedItem.link},domProps:{value:e.newLink},on:{input:function(t){t.target.composing||(e.newLink=t.target.value)}}}),n("br")]),n("div",{staticClass:"button-flex"},[n("button",{staticClass:"btn btn-outline-dark",attrs:{id:"white-dark-button"},on:{click:e.performEdits}},[e._v(" Save ")]),n("button",{staticClass:"btn btn-outline-dark",attrs:{id:"white-dark-button"},on:{click:e.cancelEdits}},[e._v(" Cancel ")])]),n("br"),n("div",{staticClass:"button-flex"},[n("div",{staticClass:"tag-bubble tag-bubble-edit spacer",class:"tag-bubble-"+e.newMainTag},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.newMainTag,expression:"newMainTag"}],staticClass:"tag-bubble-edit-input",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.newMainTag=t.target.multiple?n:n[0]}}},e._l(e.allTagOptions,(function(t,a){return n("option",{key:a,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._l(e.selectedItem.otherTags,(function(t,a){return n("div",{key:a,staticClass:"tag-bubble tag-bubble-delete spacer",class:"tag-bubble-"+t,on:{click:function(n){return e.queueTagToDelete(t)}}},[n("div",{staticClass:"tag-bubble-flex"},[e._v(" "+e._s(t)+" "),n("span",[e._v("✖")])])])})),n("div",{staticClass:"tag-bubble tag-bubble-add",attrs:{id:"tag-bubble-add"}},[n("div",{staticClass:"tag-bubble-flex"},[n("span",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.tagToAdd,expression:"tagToAdd"}],staticClass:"tag-bubble-add-input",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.tagToAdd=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select a Tag")]),e._l(e.allTagOptions,(function(t,a){return n("option",{key:a},[e._v(e._s(t))])}))],2)]),n("div",{staticClass:"tag-bubble-add-confirm",on:{click:function(t){return e.queueTagToAdd()}}})])])],2),e.selectedItem.isComplete?n("div",[n("p",[e._v("Completed on "),n("strong",[e._v(e._s(e.getFormattedDate(e.selectedItem.finishedAt)))])])]):e._e(),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newNotes,expression:"newNotes"}],staticClass:"notes",attrs:{rows:"12",cols:"106",defaultValue:e.selectedItem.notes},domProps:{value:e.newNotes},on:{input:function(t){t.target.composing||(e.newNotes=t.target.value)}}}),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newSolution,expression:"newSolution"}],staticClass:"solution",attrs:{rows:"15",cols:"106",defaultValue:e.selectedItem.solution},domProps:{value:e.newSolution},on:{input:function(t){t.target.composing||(e.newSolution=t.target.value)}}})]):n("div",{staticClass:"detail-box"},[n("div",{staticClass:"flex",attrs:{id:"detail-title-flex"}},[n("div",{staticClass:"tag-bubble",class:"tag-bubble-"+e.selectedItem.difficulty},[e._v(e._s(e.formatDifficulty(e.selectedItem.difficulty)))]),n("p",{staticClass:"subtitle",attrs:{id:"detail-title"}},[e._v(e._s(e.selectedItem.name))])]),n("div",{staticClass:"button-flex"},[n("a",{staticClass:"btn btn-outline-dark spacer",attrs:{id:"white-dark-button",href:e.selectedItem.link,target:"_blank"}},[e._v("Problem Link")]),e.selectedItem.isComplete?e._e():n("div",[n("button",{staticClass:"btn btn-outline-dark spacer",attrs:{id:"white-dark-button"},on:{click:e.completeProblem}},[e._v(" Finish ")])]),n("button",{staticClass:"btn btn-outline-dark spacer",attrs:{id:"white-dark-button"},on:{click:e.startEditing}},[e._v(" Edit ")]),e.selectedItem.isComplete?e._e():n("button",{staticClass:"btn btn-outline-dark spacer",attrs:{id:"white-dark-button"},on:{click:e.bump}},[e._v(" Bump To Top ")])]),n("br"),n("div",{staticClass:"button-flex"},[n("div",{staticClass:"tag-bubble spacer",class:"tag-bubble-"+e.selectedItem.mainTag},[e._v(e._s(e.selectedItem.mainTag))]),e._l(e.selectedItem.otherTags,(function(t,a){return n("div",{key:a,staticClass:"tag-bubble spacer",class:"tag-bubble-"+t},[e._v(e._s(t))])}))],2),e.selectedItem.isComplete?n("div",[n("p",[e._v("Completed on "),n("strong",[e._v(e._s(e.getFormattedDate(e.selectedItem.finishedAt)))])])]):e._e(),n("div",{staticClass:"notes"},[e.selectedItem.hasOwnProperty("notes")?n("p",{staticClass:"detail-text"},[e._v(e._s(e.selectedItem.notes))]):n("p",{staticClass:"detail-text"},[e._v("no notes...")])]),n("div",{staticClass:"solution"},[e.selectedItem.hasOwnProperty("solution")?n("p",{staticClass:"detail-text"},[e._v(e._s(e.selectedItem.solution))]):n("p",{staticClass:"detail-text"},[e._v("no solution...")])])])])},S=[],D=(n("4160"),n("caad"),n("c975"),n("a434"),n("ac1f"),n("2532"),n("1276"),n("9911"),n("159b"),{name:"DetailBoxComponent",data:function(){return{isEditing:!1,newName:null,newLink:null,newNotes:null,newSolution:null,newDifficulty:this.selectedItem.difficulty,newMainTag:this.selectedItem.mainTag,REST_ENDPOINT:"http://localhost:8000",tagsToDelete:[],tagsToAdd:[],tagToAdd:"",addingNewTag:!1,allTagOptions:["Array","String","Dynamic-Programming","Tree","Math","Linked-List","BFS","DFS","Matrix","Recursion","Sliding-Window","Hash-Table"]}},props:{selectedItem:Object},mounted:function(){console.log(this.selectedItem.solution)},methods:{formatDifficulty:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},queueTagToAdd:function(){this.selectedItem.otherTags.push(this.tagToAdd),this.tagsToAdd.push(this.tagToAdd),this.tagToAdd=""},queueTagToDelete:function(e){this.tagsToAdd.includes(e)?(this.selectedItem.otherTags.splice(this.selectedItem.otherTags.indexOf(e),1),this.tagsToAdd.splice(this.tagsToAdd.indexOf(e),1)):(this.selectedItem.otherTags.splice(this.selectedItem.otherTags.indexOf(e),1),this.tagsToDelete.push(e))},deleteOtherTags:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id+"/deleteOtherTag",method:"DELETE",data:{otherTags:e.tagsToDelete},headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 2:case"end":return t.stop()}}),t)})))()},addOtherTags:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id+"/addOtherTag",method:"POST",data:{otherTags:e.tagsToAdd},headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 2:case"end":return t.stop()}}),t)})))()},getFormattedDate:function(e){var t=new Date(e),n=t.toDateString().split(" "),a=t.toTimeString().split(":");return n[1]+" "+n[2]+", "+n[3]+" @ "+a[0]+":"+a[1]},bump:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id+"/bump",method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 2:window.location.reload();case 3:case"end":return t.stop()}}),t)})))()},completeProblem:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id+"/finish",method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 2:window.location.reload();case 3:case"end":return t.stop()}}),t)})))()},startEditing:function(){this.isEditing=!0,this.newName=this.selectedItem.name,this.newLink=this.selectedItem.link,this.newNotes=this.selectedItem.notes,this.newSolution=this.selectedItem.solution},performEdits:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={name:e.newName,link:e.newLink,notes:e.newNotes,solution:e.newSolution,difficulty:e.newDifficulty,mainTag:e.newMainTag},t.prev=1,t.next=4,u()({url:"".concat(e.REST_ENDPOINT,"/problems/")+e.selectedItem._id,method:"PATCH",data:n,headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}});case 4:return t.next=6,e.deleteOtherTags();case 6:return t.next=8,e.addOtherTags();case 8:e.tagsToDelete=[],e.$emit("updatedProblemElement"),e.isEditing=!1,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},cancelEdits:function(){var e=this;this.tagsToDelete=[],this.tagsToAdd.forEach((function(t){e.selectedItem.otherTags.splice(e.selectedItem.otherTags.indexOf(t),1)})),this.tagsToDelete.forEach((function(t){e.selectedItem.otherTags.push(t)})),this.addingNewTag=!1,this.newDifficulty=this.selectedItem.difficulty,this.newMainTag=this.selectedItem.mainTag,this.isEditingDifficulty=!1,this.isEditing=!1}}}),A=D,R=(n("7ad9"),Object(k["a"])(A,P,S,!1,null,"0eebe4c9",null)),j=R.exports,L={name:"Home",components:{DetailBoxComponent:j},data:function(){return{todo:[],filteredTodo:[],finished:[],filteredFinished:[],selected:null,activeCard:null,REST_ENDPOINT:Object({NODE_ENV:"production",BASE_URL:"/CodeBrain/"}).API_NAME||"http://localhost:8000"}},created:function(){this.getUserProblems()},methods:{updateProblemElements:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUserProblems();case 2:e.selected.isCompleted?e.showDetails(e.selected._id,e.finished):(console.log("todo",e.todo),e.showDetails(e.selected._id,e.todo));case 3:case"end":return t.stop()}}),t)})))()},getFormattedDate:function(e){var t=new Date(e),n=t.getMinutes();return n<10&&(n*=10),t.getMonth()+1+"/"+t.getDay()+" "+t.getHours()+":"+n},getUserProblems:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u()({url:"".concat(e.REST_ENDPOINT,"/problems/"),method:"GET",params:{isComplete:!1},headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}}).then((function(t){e.todo=t.data.problems,e.filteredTodo=t.data.problems}));case 3:return t.next=5,u()({url:"".concat(e.REST_ENDPOINT,"/problems/"),method:"GET",params:{isComplete:!0},headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}}).then((function(t){e.finished=t.data.problems,e.filteredFinished=t.data.problems}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},showDetails:function(e,t){var n=this;for(var a in t)if(t[a]._id==e)return this.selected=null,setTimeout((function(){n.selected=t[a],n.activeCard=n.selected.name}),200),void console.log("new selected",this.selected);console.log("not found uh oh")},addNewProblem:function(){this.$router.push("/create")}}},B=L,M=(n("3857"),Object(k["a"])(B,O,E,!1,null,"067fe714",null)),F=M.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"inputs"},[n("p",{attrs:{id:"login-signup"}},[e._v("Login")]),n("label",[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"login-input",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("label",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login-input",attrs:{type:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"flex"},[n("button",{staticClass:"btn btn-outline-dark",on:{click:e.login}},[e._v("Login")]),n("div",{staticClass:"signup-login-btn",on:{click:e.toSignup}},[e._v("Signup")])])])},H=[],z={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.REST_ENDPOINT),t.prev=1,t.next=4,p(e.email,e.password);case 4:e.$router.push("/"),window.location.reload(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),alert("Login Failed");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},toSignup:function(){this.$router.push("/signup")}}},U=z,q=(n("d6db"),Object(k["a"])(U,$,H,!1,null,null,null)),V=q.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"inputs"},[n("p",{attrs:{id:"login-signup"}},[e._v("Signup")]),n("label",[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("label",[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),n("label",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"flex"},[n("button",{staticClass:"btn btn-outline-dark",on:{click:e.signup}},[e._v("Signup")]),n("div",{staticClass:"signup-login-btn",on:{click:e.toLogin}},[e._v("Login")])])])},G=[],J={name:"Signup",data:function(){return{email:"",name:"",password:""}},methods:{toLogin:function(){this.$router.push("/login")},signup:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e.email,e.password,e.name);case 3:e.$router.push("/"),window.location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),alert("Error: ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},Q=J,K=Object(k["a"])(Q,W,G,!1,null,"594fcbaa",null),X=K.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"subtitle"},[e._v("Add New Interview Problem")]),n("br"),n("label",[e._v("Question Name")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),n("label",[e._v("Link")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],attrs:{type:"text"},domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}),n("br"),e._v(" Main Tag "),n("br"),n("div",{staticClass:"tag-bubble tag-bubble-edit",class:"tag-bubble-"+e.mainTag},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mainTag,expression:"mainTag"}],staticClass:"tag-bubble-edit-input",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mainTag=t.target.multiple?n:n[0]}}},e._l(e.allTagOptions,(function(t,a){return n("option",{key:a,domProps:{value:t}},[e._v(e._s(t))])})),0)]),n("br"),e._v(" Other Tags "),n("br"),n("div",{staticClass:"flex"},e._l(e.allTagOptions,(function(t,a){return n("div",{key:a,staticClass:"tag-bubble",class:e.getClass(t),on:{click:function(n){return e.toggleAddOtherTag(t)}}},[e._v(" "+e._s(t)+" ")])})),0),n("br"),e._v(" Difficulty "),n("br"),n("div",{staticClass:"flex"},[n("div",{staticClass:"tag-bubble tag-bubble-easy",class:{active:"easy"==e.difficulty},on:{click:function(t){return e.toggleDifficulty("easy")}}},[e._v("Easy")]),n("div",{staticClass:"tag-bubble tag-bubble-medium",class:{active:"medium"==e.difficulty},on:{click:function(t){return e.toggleDifficulty("medium")}}},[e._v("Medium")]),n("div",{staticClass:"tag-bubble tag-bubble-hard",class:{active:"hard"==e.difficulty},on:{click:function(t){return e.toggleDifficulty("hard")}}},[e._v("Hard")])]),n("label",[e._v("Notes")]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"notes"}],attrs:{rows:"10",cols:"80"},domProps:{value:e.notes},on:{input:function(t){t.target.composing||(e.notes=t.target.value)}}}),n("br"),n("label",[e._v("Solution")]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.solution,expression:"solution"}],attrs:{rows:"10",cols:"80"},domProps:{value:e.solution},on:{input:function(t){t.target.composing||(e.solution=t.target.value)}}}),n("br"),n("br"),n("button",{staticClass:"btn btn-outline-dark spacer",on:{click:e.addNewProblem}},[e._v("Finish")]),n("button",{staticClass:"btn btn-outline-dark spacer",on:{click:e.cancel}},[e._v("Cancel")]),n("br"),n("br"),n("br")])},Z=[],ee={name:"CreateProblem",data:function(){return{name:"",link:"",notes:"",solution:"",mainTag:"",otherTags:[],allTagOptions:["Array","String","Dynamic-Programming","Tree","Math","Linked-List","BFS","DFS","Matrix","Recursion","Sliding-Window","Hash-Table"],difficulty:null,REST_ENDPOINT:Object({NODE_ENV:"production",BASE_URL:"/CodeBrain/"}).API_NAME||"http://localhost:8000"}},methods:{toggleDifficulty:function(e){this.difficulty=e},getClass:function(e){var t="";return t+="tag-bubble-"+e,this.otherTags.includes(e)&&(t+=" active"),t},toggleAddOtherTag:function(e){this.otherTags.includes(e)?this.otherTags.splice(this.otherTags.indexOf(e),1):this.otherTags.push(e)},addNewProblem:function(){var e=this,t={name:this.name,link:this.link,mainTag:this.mainTag,otherTags:this.otherTags,difficulty:this.difficulty};this.notes.length>0&&(t["notes"]=this.notes),this.solution.length>0&&(t["solution"]=this.solution);try{u()({url:"".concat(this.REST_ENDPOINT,"/problems"),method:"POST",data:t,headers:{Authorization:"Bearer "+localStorage.getItem("authToken")}}).then((function(t){console.log(t),e.$router.push("/")}))}catch(n){console.log(n)}},cancel:function(){this.$router.push("/")}}},te=ee,ne=(n("dcbf"),Object(k["a"])(te,Y,Z,!1,null,"f8c3680c",null)),ae=ne.exports;a["a"].use(I["a"]);var ie=[{path:"/",name:"Home",component:F},{path:"/login",name:"Login",component:V,meta:{allowAnonymous:!0}},{path:"/signup",name:"Signup",component:X,meta:{allowAnonymous:!0}},{path:"/create",name:"Create",component:ae}],se=new I["a"]({routes:ie});se.beforeEach((function(e,t,n){"login"==e.name&&w()?n({path:"/"}):e.meta.allowAnonymous||w()?n():n({path:"/login",query:{redirect:e.fullPath}})}));var oe=se;n("4989"),n("f9e3");a["a"].config.productionTip=!1,new a["a"]({router:oe,render:function(e){return e(N)}}).$mount("#app")},"7ad9":function(e,t,n){"use strict";var a=n("5474"),i=n.n(a);i.a},"85ec":function(e,t,n){},"8d16":function(e,t,n){e.exports=n.p+"img/CodeBrain.15693d1b.png"},"9b15":function(e,t,n){},d6db:function(e,t,n){"use strict";var a=n("e67a"),i=n.n(a);i.a},dcbf:function(e,t,n){"use strict";var a=n("fd63"),i=n.n(a);i.a},e67a:function(e,t,n){},fd63:function(e,t,n){}});
//# sourceMappingURL=app.f409f590.js.map