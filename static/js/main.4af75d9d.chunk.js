(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),s=(a(14),a(3)),i=a(4),l=a(6),d=a(5),u=a(7),m=(a(15),a(16),a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={character:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters").then(function(e){return e.json()}).then(function(t){return e.setState({character:t})})}},{key:"render",value:function(){var e=this.state.character;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row justify-content-center"},e.map(function(e){return c.a.createElement("div",{class:"card border rounded-lg p-3 m-2",id:"card_body_bg",style:{width:"25rem"}},c.a.createElement("div",{class:"card-body"},c.a.createElement("img",{src:"data:image/jpeg;base64,".concat(e.image),style:{width:"100px"},className:"rounded-circle float-left mr-5",alt:e.name}),c.a.createElement("h5",{class:"card-title"},e.name),c.a.createElement("p",{class:"card-text"},e.shortDescription)))}))))}}]),t}(n.Component));o.a.render(c.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.4af75d9d.chunk.js.map