(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(35)},28:function(e,n,t){},33:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),r=t(17),o=t.n(r),c=(t(28),t(5)),s=t(6),l=t(9),u=t(7),d=t(10),p=t(2),m=t(21),h=t(14),b=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).handleClick=function(e){t.props.resize(t.props.name)},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.children,a=e.frames[n],r=a.visible,o=a.expanded,c=o?"expanded":r?"visible":"hidden",s=n.charAt(0).toUpperCase()+n.slice(1);return i.a.createElement("div",{className:"frame ".concat(n," ").concat(c)},i.a.createElement("div",{className:"header"},i.a.createElement("h4",null,s),i.a.createElement("button",{onClick:this.handleClick},i.a.createElement(m.a,{icon:o?h.b:h.a}))),i.a.createElement("div",{className:"body"},t))}}]),n}(a.Component),v=Object(p.b)(function(e){return{frames:e.frames}},{resize:function(e){return{type:"RESIZE",payload:e}}})(b),f=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).state={input:"# Derek Larson  \n**Full Stack Web Developer**  \n**E-mail** derekslarson@gmail.com  \n**LinkedIn** [linkedin.com/in/derekslarson](https://linkedin.com/in/derekslarson)  \n**GitHub** [github.com/cstst](https://github.com/cstst)  \n\n## Summary\nFull stack web developer proficient in front-end technologies such as React, Redux, Sass, Webpack and Babel, as well as Node.js and MongoDB on the back-end. Experienced in building database-driven web applications with complex functionality. Always striving to learn more and be challenged.\n\nOriginally from Woodinville, WA, moved to Phnom Penh, Cambodia in 2013 to experience something different. Spent the last five years teaching high school students enrolled in a US school's distance learning program. Recently moved back to the Seattle area to further career as a developer.\n\n## Experience  \n**11/2018 - 01/2019**   \n**Dom's Handcrafted Sausages** ([domssausages.com](https://domssausages.com))  \n**Full Stack Web Developer**  \n   \nFull e-commerce single-page-application constructed from the ground up. Front-end built using React, Redux, Webpack & Babel. Back-end & CMS built using Node.js, MongoDB & KeystoneJS. Customer account creation and authentication using Passport.js. Order sending using Mailgun. Dual language functionality. Fully responsive using Sass.\n\n## Education\n**01/2018 - 09/2018**  \n**freeCodeCamp** ([freecodecamp.org](https://freecodecamp.org))  \n**Full Stack Web Development**\n  \nCompleted certifications in Responsive Web Design, Algorithms, Data Structures, Front-End Libraries, Data Visualization, APIs, Microservices, Information Security and Quality Assurance, culminating in a final certification in Full Stack Web Development. Built a variety of front and back-end projects such as an anonymous message board, a stock price checker and favorites tracker, a markdown previewer, a choropleth map and a clone of the game Simon.\n\n"},t.handleChange=function(e){var n=e.target.value;t.setState({input:n}),t.props.input(n)},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.input(this.state.input)}},{key:"render",value:function(){return i.a.createElement(v,{name:"editor"},i.a.createElement("textarea",{id:"editor",value:this.state.input,onChange:this.handleChange}))}}]),n}(a.Component),g=Object(p.b)(null,{input:function(e){return{type:"INPUT",payload:e}}})(f),k=t(22),y=t.n(k),w=Object(p.b)(function(e){return{input:e.input}})(function(e){var n=y()(e.input);return i.a.createElement(v,{name:"previewer"},i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:n}}))}),E=t(8),j=t(3),O=t(15),S={input:"",frames:{editor:{visible:!0,expanded:!1},previewer:{visible:!0,expanded:!1}}},x=Object(E.b)(function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT":return Object(O.a)({},n,{input:t.payload});case"RESIZE":var a=t.payload,i="editor"!==a?"editor":"previewer",r=n.frames[a].expanded;return Object(O.a)({},n,{frames:(e={},Object(j.a)(e,a,{visible:!0,expanded:!r}),Object(j.a)(e,i,{visible:!!r,expanded:!1}),e)});default:return n}}),C=(t(33),function(){return i.a.createElement(p.a,{store:x},i.a.createElement("div",{className:"app"},i.a.createElement(g,null),i.a.createElement(w,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.82bc5190.chunk.js.map