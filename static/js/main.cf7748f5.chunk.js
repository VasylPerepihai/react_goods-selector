(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(3),l=n.n(a),s=n(1),r=n(4),d=n(5),u=n(7),i=n(6),m=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selectedGood:[]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,this.state.selectedGood.length?c.a.createElement(c.a.Fragment,null,this.state.selectedGood.join(", "),this.state.selectedGood.length>1?" are ":" is ","selected",c.a.createElement("button",{type:"button",onClick:function(){return e.setState({selectedGood:[]})}},"X")):"No goods selected"),m.length,c.a.createElement("ul",null,m.map((function(t){return c.a.createElement("li",{key:t,className:e.state.selectedGood.includes(t)&&"selected"},t,e.state.selectedGood.includes(t)?c.a.createElement("button",{type:"button",onClick:function(){e.setState((function(e){var n=e.selectedGood;return n.splice(n.indexOf(t),1),{selectedGood:Object(s.a)(n)}}))}},"Remove"):c.a.createElement("button",{type:"button",onClick:function(){e.setState((function(e){return{selectedGood:[].concat(Object(s.a)(e.selectedGood),[t])}}))}},"Add"))}))))}}]),n}(c.a.Component);l.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.cf7748f5.chunk.js.map