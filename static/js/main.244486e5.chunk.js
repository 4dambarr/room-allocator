(this["webpackJsonproom-allocator"]=this["webpackJsonproom-allocator"]||[]).push([[0],{38:function(e,n,t){},41:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(0),c=t(8),o=t.n(c),s=t(13),i=t(24),l=t(7),d=t(20),u=[],j=[],h=Object(i.b)(Object(i.a)({people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0,t=[];switch(n.type){case"ADD_PERSON":var r;return r=0===e.length?0:e[e.length-1]+1,console.log(e),[].concat(Object(d.a)(e),[{id:r,name:n.name,preferences:n.preferences,allocated_room:!1}]);case"ADD_ROOM":if(e[0]){var a;a=e[0].preferences.length>0?e[0].preferences[e[0].preferences.length-1].id+1:0;var c,o=Object(l.a)(e);try{for(o.s();!(c=o.n()).done;){var s=c.value;t.push({id:s.id,name:s.name,preferences:[].concat(Object(d.a)(s.preferences),[{id:a,name:n.name}]),allocated_room:s.allocated_room})}}catch(i){o.e(i)}finally{o.f()}return t}default:return e}},rooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0,t=[];switch(n.type){case"ADD_ROOM":var r;return r=0===e.length?0:e[e.length-1].id+1,[].concat(Object(d.a)(e),[{id:r,name:n.name}]);case"REMOVE_ROOM":var a,c=Object(l.a)(e);try{for(c.s();!(a=c.n()).done;){var o=a.value;o.id!=n.id&&t.push(o)}}catch(h){c.e(h)}finally{c.f()}return t;case"UPDATE_NAME":var s,i=Object(l.a)(e);try{for(i.s();!(s=i.n()).done;){var j=s.value;j.id===n.id?t.push({id:j.id,name:n.name}):t.push(j)}}catch(h){i.e(h)}finally{i.f()}return t;default:return e}}})),f=t(10),b=t(15),m=t(16);t(38);var O=function(e){function n(e){console.log("----"),console.log(e,o);var n,t=Object(l.a)(o);try{for(t.s();!(n=t.n()).done;){if(e===n.value.room)return console.log("Sorted"),!0}}catch(r){t.e(r)}finally{t.f()}return console.log("not sorted"),!1}function t(e){for(var n=0;n<o.length;n++)if(o[n].name===e)return!0;return!1}function r(e){var n,t={},r=Object(l.a)(e);try{for(r.s();!(n=r.n()).done;){t[n.value.name]=[]}}catch(a){r.e(a)}finally{r.f()}return t}var a,c,o=[];console.log("choices",e);for(var s=e[0].preferences.length,i=e[0].preferences,d=0;d<s;d++){a=r(i);for(var u=0;u<e.length;u++){if(!n(e[u].preferences[d].name)&&!t(e[u].name)){c=!1;for(var j=0;j<e.length;j++)e[u].preferences[d]!==e[j].preferences[d]||e[u]===e[j]||t(e[j].name)||c||(c=!0,a[e[u].preferences[d].name].push(e[u].name))}c||n(e[u].preferences[d].name)||o.push({room:e[u].preferences[d].name,name:e[u].name})}for(var h=0,f=Object.keys(a);h<f.length;h++){var b=f[h];if(!n(b)&&a[b].length>0){var m=Math.floor(Math.random()*Math.floor(a[b].length)),O=a[b][m];o.push({name:O,room:b})}}}return o},v=t(48),p=t(46),g=t(47);var x=Object(s.b)((function(e){return{roomsList:e.rooms}}),(function(e){return{handleAddPerson:function(n,t){return e({type:"ADD_PERSON",name:n,preferences:t})}}}))((function(e){var n=e.roomsList,t=e.show,c=e.setShow,o=e.handleAddPerson,s=Object(a.useState)(),i=Object(f.a)(s,2),d=i[0],u=i[1],j=Object(a.useState)(n),h=Object(f.a)(j,2),b=h[0],m=h[1],O=function(){var e=Object(a.useState)(0),n=Object(f.a)(e,2),t=(n[0],n[1]);return function(){return t((function(e){return e+1}))}}();function x(){c(!1)}function y(){console.log(d,b),o(d,b),x()}function R(e){e.preventDefault()}function D(e){var n,t,r=document.getElementById(e.target.id).getAttribute("value"),a=Object(l.a)(b);try{for(a.s();!(t=a.n()).done;){var c=t.value;c.id.toString()===r&&(n=c)}}catch(o){a.e(o)}finally{a.f()}e.dataTransfer.setData("RoomID",n.id),e.dataTransfer.setData("Rank",e.target.id)}function k(e){e.preventDefault();var n,t,r=e.dataTransfer.getData("RoomID"),a=Object(l.a)(b);try{for(a.s();!(t=a.n()).done;){var c=t.value;c.id.toString()===r&&(n=c)}}catch(i){a.e(i)}finally{a.f()}var o=e.dataTransfer.getData("Rank"),s=e.target.id;!function(e,n,t){var r=b,a=r;if(n>t){a[t]=r[t+1];for(var c=t;c<n;c++)a[c]=r[c+1];a[n]=e}else{a[t]=r[r-1];for(var o=t;o>n;o--)a[o]=r[o-1];a[n]=e}m(a),O()}(n,parseInt(s),parseInt(o))}return Object(a.useEffect)((function(){var e,t=[],r=Object(l.a)(n);try{for(r.s();!(e=r.n()).done;){var a=e.value;t.push(a)}}catch(c){r.e(c)}finally{r.f()}m(t),u("")}),[t]),Object(r.jsxs)(p.a,{show:t,onHide:x,children:[Object(r.jsx)(p.a.Header,{closeButton:!0,children:"Add Person"}),Object(r.jsxs)(p.a.Body,{children:[Object(r.jsxs)(g.a,{children:[Object(r.jsx)(g.a.Label,{children:"Name"}),Object(r.jsx)(g.a.Control,{type:"text",onChange:function(e){u(e.target.value)},onKeyDown:function(e){13===e.keyCode&&e.preventDefault()}})]}),Object(r.jsxs)("div",{className:"Rankings-Holder",children:[Object(r.jsx)("p",{children:"Rankings"}),b.map((function(e,n){return Object(r.jsxs)("div",{className:"Ranking-Holder",children:[Object(r.jsx)("div",{className:"Rank-Pos",children:Object(r.jsxs)("p",{children:[n+1,"."]})}),Object(r.jsx)("div",{id:n,value:e.id,className:"Room",draggable:!0,onDrop:k,onDragOver:R,onDragStart:D,children:e.name})]})}))]})]}),Object(r.jsxs)(p.a.Footer,{children:[Object(r.jsx)(v.a,{variant:"danger",onClick:x,children:"Cancel"}),d?Object(r.jsx)(v.a,{variant:"success",onClick:y,children:"Submit"}):Object(r.jsx)(v.a,{variant:"success",disabled:!0,children:"Submit"})]})]})}));function y(){var e=Object(b.a)(["\n  border: 1px solid black;\n"]);return y=function(){return e},e}function R(){var e=Object(b.a)(["\n  margin: 1em;\n  border: 1px solid black;\n"]);return R=function(){return e},e}function D(){var e=Object(b.a)(["\n  min-height: 50px;\n  margin-top: 2em;\n"]);return D=function(){return e},e}function k(){var e=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n"]);return k=function(){return e},e}function A(){var e=Object(b.a)(["\n  padding: 2em;\n  width:100vw;\n  height: 100vh;\n"]);return A=function(){return e},e}var S=m.a.div(A()),w=m.a.div(k()),E=m.a.div(D()),M=m.a.table(R()),_=m.a.tr(y()),C=Object(s.b)((function(e){return{people:e.people,rooms:e.rooms}}),(function(e){return{handleAddRoom:function(n){return e({type:"ADD_ROOM",name:n})},handleRemoveRoom:function(n){return e({type:"REMOVE_ROOM",id:n})}}}))((function(e){var n=e.people,t=e.rooms,c=e.handleRemoveRoom,o=e.handleAddRoom,s=Object(a.useState)(!1),i=Object(f.a)(s,2),d=i[0],u=i[1],j=Object(a.useState)([]),h=Object(f.a)(j,2),b=h[0],m=h[1],v=Object(a.useState)(!1),p=Object(f.a)(v,2),g=p[0],y=p[1];return Object(r.jsxs)(S,{children:[Object(r.jsx)(x,{show:d,setShow:u}),Object(r.jsx)("h1",{children:"Room Allocator"}),Object(r.jsx)("p",{children:"Allocate rooms in your house in the fairest way possible"}),Object(r.jsxs)(w,{children:[Object(r.jsxs)(M,{children:[Object(r.jsx)("thead",{children:Object(r.jsx)(_,{children:Object(r.jsx)("th",{children:"Rooms"})})}),Object(r.jsxs)("tbody",{children:[t.map((function(e){return Object(r.jsx)(_,{children:Object(r.jsxs)("td",{style:{display:"flex",alignItems:"center",position:"relative"},children:[Object(r.jsx)("p",{style:{margin:"0.5em",display:"inline"},children:e.name}),Object(r.jsxs)("div",{style:{position:"absolute",right:"5px"},children:[Object(r.jsx)("button",{children:"Edit"}),Object(r.jsx)("button",{onClick:function(){return n=e.id,void c(n);var n},style:{margin:"0.5em"},children:"Remove"})]})]})})})),Object(r.jsx)(_,{children:Object(r.jsxs)("td",{children:[Object(r.jsx)("input",{type:"text",id:"new-room-name",placeholder:"Type here",style:{margin:"0.5em"}}),Object(r.jsx)("button",{onClick:function(){var e,n=document.getElementById("new-room-name").value,r=!1,a=Object(l.a)(t);try{for(a.s();!(e=a.n()).done;){e.value.name===n&&(r=!0)}}catch(c){a.e(c)}finally{a.f()}n.length<1||n.length>19&&!r?alert("Room names can only be 1 - 19 characters long"):r?alert("Name already exists"):o(n)},children:"Add Room"})]})})]})]}),Object(r.jsxs)(M,{children:[Object(r.jsx)("thead",{children:Object(r.jsx)(_,{children:Object(r.jsx)("th",{children:"People"})})}),Object(r.jsxs)("tbody",{children:[n.map((function(e){return Object(r.jsx)(_,{children:Object(r.jsxs)("td",{children:[e.name,Object(r.jsx)("br",{}),"Preferences:"," "+e.preferences.map((function(e){return e.name}))]})})})),Object(r.jsx)(_,{children:Object(r.jsx)("td",{children:Object(r.jsx)("button",{style:{margin:"0.5em"},onClick:function(){return u(!0)},children:"Add Person"})})})]})]})]}),Object(r.jsx)("button",{onClick:function(){var e=O(n);m(e),y(!g)},children:"Allocate Rooms"}),Object(r.jsxs)(E,{children:[b.length>0?Object(r.jsx)("h1",{children:"Results"}):null,b.map((function(e){return Object(r.jsxs)("p",{children:[e.name," is in ",e.room]})}))]})]})})),P=(t(41),t(42),document.getElementById("root"));o.a.render(Object(r.jsx)(s.a,{store:h,children:Object(r.jsx)(C,{})}),P)}},[[43,1,2]]]);
//# sourceMappingURL=main.244486e5.chunk.js.map