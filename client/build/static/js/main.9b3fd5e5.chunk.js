(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{167:function(e,t,n){e.exports=n(297)},172:function(e,t,n){},173:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n.n(c),o=n(34),l=n.n(o),s=(n(172),n(173),n(46)),u=n.n(s),m=n(36);!function(e){e.ANGER="pred_anger",e.ANTICIPATION="pred_anticipation",e.DISGUST="pred_disgust",e.FEAR="pred_fear",e.JOY="pred_joy",e.LOVE="pred_love",e.OPTIMISM="pred_optimism",e.PESSIMISM="pred_pessimism",e.SADNESS="pred_sadness",e.SURPRISE="pred_surprise",e.TRUST="pred_trust"}(a||(a={})),function(e){e.ANGER="\ud83d\ude20",e.ANTICIPATION="\ud83e\udd2b",e.DISGUST="\ud83e\udd22",e.FEAR="\ud83d\ude28",e.JOY="\ud83d\ude00",e.LOVE="\u2764\ufe0f",e.OPTIMISM="\ud83d\udc4d",e.PESSIMISM="\ud83d\udc4e",e.SADNESS="\ud83d\ude22",e.SURPRISE="\ud83d\ude2e",e.TRUST="\ud83e\udd1e"}(r||(r={}));var d,E=n(309),S=n(310),p=n(28),f=n(308),b=n(306);!function(e){e.DARKEST="#00518f",e.DARK="#0761a6",e.INBETWEEN="#0b6eba",e.LIGHTER="#1b7fc",e.LIGHT="#2f8cd4",e.LIGHTEST="#3f9fe8",e.DEFAULT="#93c6ed"}(d||(d={}));var I=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),l=Object(m.a)(o,2),s=l[0],I=l[1],T=Object(c.useState)(!1),h=Object(m.a)(T,2),g=h[0],O=h[1],v=Object(c.useState)(!1),A=Object(m.a)(v,2),k=A[0],R=A[1],y=Object(c.useState)([]),N=Object(m.a)(y,2),P=N[0],C=N[1],j=Object(c.useState)([]),w=Object(m.a)(j,2),M=w[0],D=w[1],F=Object(c.useCallback)((function(){var e,t,a;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!g){c.next=2;break}return c.abrupt("return");case 2:if(O(!0),t=(e=n).length,""===e){c.next=12;break}return c.next=8,u.a.awrap(fetch("http://34.255.117.138/predictions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([n,t])}));case 8:(a=c.sent).ok&&(a.json().then((function(e){C(e[0]),D(e[1])})),I(n)),r(""),O(!1);case 12:case"end":return c.stop()}}))}),[g,n]),L=Object(c.useCallback)((function(e,t){var n,a;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!k){r.next=2;break}return r.abrupt("return");case 2:return R(!0),n={id:e,text:s,correct:t},r.next=6,u.a.awrap(fetch("http://34.255.117.138/update_preds",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}));case 6:(a=r.sent).ok&&a.json().then((function(e){console.log(e)})),R(!1);case 9:case"end":return r.stop()}}))}),[s,k]),x=function(e,t){if(e.includes(t))return t===e[0]?d.DARKEST:t===e[1]?d.DARK:t===e[2]?d.INBETWEEN:t===e[3]?d.LIGHTER:t===e[4]?d.LIGHT:d.LIGHTEST};return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement(f.a.Field,null,i.a.createElement(b.a,{value:n,onChange:function(e){r(e.currentTarget.value)}})),i.a.createElement(f.a.Field,null,i.a.createElement(S.a,{color:"twitter",disabled:g,onClick:function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F());case 1:case"end":return e.stop()}}))}},"Submit"))),k?i.a.createElement("div",null,"Loading..."):function(){var e,t=[];return M.forEach((function(e){t.push(e[0])})),s&&(e=s.split(" ").map((function(e,n){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex",marginBottom:12}},i.a.createElement("span",{style:{marginRight:9,backgroundColor:t.includes(e)?x(t,e):d.DEFAULT,color:"white",borderRadius:4,padding:6},key:n},e)))}))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{marginTop:36,marginBottom:12,fontFamily:"Arial"}},i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},e),P.map((function(e){var t="";switch(e[0]){case a.ANGER:t="Anger";break;case a.ANTICIPATION:t="Anticipation";break;case a.DISGUST:t="Disgust";break;case a.FEAR:t="Fear";break;case a.JOY:t="Joy";break;case a.LOVE:t="Love";break;case a.OPTIMISM:t="Optimism";break;case a.PESSIMISM:t="Pessimism";break;case a.SADNESS:t="Sadness";break;case a.SURPRISE:t="Surprise";break;case a.TRUST:t="Trust"}var n=t+" --\x3e "+Math.round(100*e[1]+Number.EPSILON)/100;return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{divided:!0,verticalAlign:"middle"},i.a.createElement(E.a.Item,null,i.a.createElement(E.a.Content,{floated:"right"},i.a.createElement(S.a,{basic:!0,color:"green",animated:!0,onClick:function(t){var n;n=e[0],L(n,!0),C(P.filter((function(e){return e[0]!==n}))),P.length<=1&&I("")}},i.a.createElement(S.a.Content,{visible:!0},"Correct"),i.a.createElement(S.a.Content,{hidden:!0},i.a.createElement(p.a,{name:"check"}))),i.a.createElement(S.a,{basic:!0,color:"red",animated:!0,onClick:function(t){var n;n=e[0],L(n,!1),C(P.filter((function(e){return e[0]!==n}))),P.length<=1&&I("")}},i.a.createElement(S.a.Content,{visible:!0},"Incorrect"),i.a.createElement(S.a.Content,{hidden:!0},i.a.createElement(p.a,{name:"delete"})))),i.a.createElement(E.a.Content,null,n))))}))))}())},T=n(307),h=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{style:{marginTop:24}},i.a.createElement("div",{style:{marginBottom:24}},i.a.createElement("h1",null,"This AI has been trained to understand emotion from text."),i.a.createElement("div",null,i.a.createElement("h4",null,"Emotions are categorized into 11 distinct labels:"),i.a.createElement("p",{style:{fontSize:13}},i.a.createElement("strong",null,"Anger ",r.ANGER," -- Anticipation ",r.ANTICIPATION," -- Disgust"," ",r.DISGUST," -- Fear ",r.FEAR," -- Joy ",r.JOY," -- Love ",r.LOVE," -- Optimism ",r.OPTIMISM," -- Pessimism ",r.PESSIMISM," -- Sadness --"," ",r.SADNESS," -- Surprise ",r.SURPRISE," -- Trust ",r.TRUST)),i.a.createElement("p",{style:{fontSize:13}},"Teach the AI by marking the correct and incorrect predictions."))),i.a.createElement("div",null,i.a.createElement(I,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(296);l.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[167,1,2]]]);
//# sourceMappingURL=main.9b3fd5e5.chunk.js.map