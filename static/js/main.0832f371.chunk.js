(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{42:function(e,n,t){e.exports=t.p+"static/media/PortfolioPage.6a1e5fe0.png"},43:function(e,n,t){e.exports=t.p+"static/media/DevDeskQ.e76c4abc.png"},44:function(e,n,t){e.exports=t.p+"static/media/DungeonHelper.c6aff72d.png"},45:function(e,n,t){e.exports=t.p+"static/media/AboutMePic.7a52e70a.jpg"},48:function(e,n,t){e.exports=t.p+"static/media/Background.d90a2d9c.jpg"},51:function(e,n,t){e.exports=t(80)},56:function(e,n,t){},57:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(37),i=t.n(o),c=(t(56),t(5)),l=t(6),u=t(8),s=t(7),d=t(9),m=t(2),h=(t(57),t(3));function p(){var e=Object(m.a)(["\nfont-size: -webkit-xxx-large;\n  padding-top:4%;\n  margin:0;\n  background: rgb(0, 0, 0); /* The Fallback */\n  background: rgba(0, 0, 0, 0.5);\n  @media (max-width: 400px) {\n    font-size: xx-large;\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(m.a)(["\n"]);return g=function(){return e},e}var b=h.a.div(g()),f=h.a.h1(p()),v=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(f,null,"Hayden Development"))}}]),n}(a.Component),w=t(18),j=t(14),x=t(40),E=t(41),O=t.n(E),y="entry.839337160",k="entry.1045781291",C="https://cors-anywhere.herokuapp.com/",S="https://docs.google.com/forms/u/1/d/e/1FAIpQLScu94WMCzap_LGPhAFEu2Sib8SivvL5-QWmHN2nTOD-SSz6Ug/formResponse",D=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).handleChange=function(e){t.setState(Object(x.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.setState({sendingMessage:!0}),t.sendMessage()},t.handleFormToggle=function(){t.setState(function(e){return{showForm:!e.showForm}})},t.handleReturnButton=function(){t.setState({showForm:!1,messageSent:!1,messageError:!1})},t.sendMessage=function(){var e=new FormData;e.append(y,t.state.message),e.append(k,t.state.email),O.a.post(C+S,e).then(function(){t.setState({messageSent:!0,sendingMessage:!1,message:"",email:""})}).catch(function(){t.setState({messageError:!0,sendingMessage:!1})})},t.returnButton=function(){return r.a.createElement("button",{id:"return-button",className:"btn btn-default btn-xs",onClick:t.handleReturnButton},"Return")},t.state={message:"",email:"",showForm:!1,sendingMessage:!1,messageSent:!1,messageError:!1},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return this.state.sendingMessage?r.a.createElement("div",null,"Sending..."):this.state.messageSent?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"success-message"},"Sent! I will respond ASAP!"),this.returnButton()):this.state.messageError?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"error-message"},"Sorry, your message was not sent. Contact me at: josephhaydendevelopment@gmail.com"),this.returnButton()):!1===this.state.showForm?r.a.createElement("button",{id:"contact-button",className:"btn btn-sm",onClick:this.handleFormToggle},"Contact"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"email",className:"col-sm-2 col-form-label"},"Email:"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("input",{type:"email",name:"email",id:"email",className:"form-control",value:this.state.email,onChange:this.handleChange,required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"message",className:"col-sm-2 col-form-label"},"Message:"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("textarea",{id:"message",name:"message",className:"form-control",required:!0,value:this.state.message,onChange:this.handleChange,rows:"6"}))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",id:"cancel-button",className:"btn btn-default btn-sm btn-action",onClick:this.handleFormToggle},"Cancel"),r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-default btn-action"},"Submit")))))}}]),n}(a.Component);function F(){var e=Object(m.a)(["\n  background: rgb(0, 0, 0); /* The Fallback */\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  margin-top: 5%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  min-height: 50vh;\n  @media (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n"]);return F=function(){return e},e}var N=h.a.div(F()),H=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).handleSubmit=function(e){e.preventDefault(),t.sendMessage()},t.state={},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(D,null))}}]),n}(a.Component);function M(){var e=Object(m.a)(["\n  color: white;\n  text-decoration: none;\n  margin:2%\n  padding: 2%;\n  border: 1px solid white;\n  width:45%;\n  &:hover{\n    border: 1px solid aqua;\n    color:aqua;\n    transition: 0.3s;\n    box-shadow: 0 5px 15px rgba(0,0,0,1);\n  }\n  \n  @media (max-width: 760px) {\n    width:90%;\n    margin: 1% auto;\n  }\n"]);return M=function(){return e},e}function T(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space Around;\n  @media (max-width: 760px) {\n    flex-direction: column;\n  }\n"]);return T=function(){return e},e}function J(){var e=Object(m.a)(["\nheight: 40%;\npadding-top:5%\n    >p{\n        overflow:hidden;\n    }\n  }\n"]);return J=function(){return e},e}function z(){var e=Object(m.a)(["\nwidth: 90%;\nheight: auto;\n  }\n"]);return z=function(){return e},e}function I(){var e=Object(m.a)(["\nheight: 40%;\npadding:5%;\n  }\n"]);return I=function(){return e},e}function q(){var e=Object(m.a)(["\nwidth:30%;\n\n@media (max-width: 760px) {\n    width:100%\n  }\n  }\n"]);return q=function(){return e},e}var B=h.a.div(q()),P=h.a.div(I()),R=h.a.img(z()),A=h.a.div(J()),L=h.a.div(T()),Q=h.a.a(M()),W=function(e){return console.log(e),r.a.createElement(B,null,r.a.createElement(P,null,r.a.createElement(R,{src:e.project.image,alt:"",className:"project-thumb"})),r.a.createElement(A,null,r.a.createElement("h3",null,e.project.heading),r.a.createElement("p",null,e.project.description)),r.a.createElement(L,null,r.a.createElement(Q,{href:e.project.github},"Code"),r.a.createElement(Q,{href:e.project.hosted},"Hosted")))};function U(){var e=Object(m.a)(["\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\njustify-content: space-around;\n@media (max-width: 760px) {\n    display:flex;\n    flex-direction:column;\n  }\n  }\n"]);return U=function(){return e},e}var G=h.a.div(U()),$=function(e){return r.a.createElement(G,null,e.projects.map(function(e){return r.a.createElement(W,{project:e,key:Math.random(Date.now())})}))},_=t(42),K=t.n(_),V=t(43),X=t.n(V),Y=t(44),Z=t.n(Y);function ee(){var e=Object(m.a)(["\n  background: rgb(0, 0, 0); /* The Fallback */\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  margin-top: 5%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  min-height: 50vh;\n  @media (max-width: 760px) {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n"]);return ee=function(){return e},e}var ne=h.a.div(ee()),te=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={projects:[{image:K.a,heading:"Portfolio Page",description:"This portfolio page was created using ReactJS, React Router, Styled Components, and HTML5",github:"https://github.com/JHaydenDev/JHaydenDev.github.io",hosted:"https://jhaydendev.github.io"},{image:X.a,heading:"Dev Desk Queue",description:"Dev Desk Queue is a ticketing system for Devs with CRUD functionality",github:"https://github.com/JHaydenDev/Front-End",hosted:"https://devdeskqueue.com"},{image:Z.a,heading:"Dungeon-Helper",description:"Dungeon Helper is a encounter generator for Dungeons and Dragons.",github:"https://github.com/JHaydenDev/dnd-encounter-generator",hosted:"https://dungeon-helper.com"}]},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(ne,null,r.a.createElement($,{projects:this.state.projects}))}}]),n}(a.Component),ae=t(45),re=t.n(ae);function oe(){var e=Object(m.a)(["\n  margin:auto;\n  text-align: center;\n  background: url(",");\n  background-position: center;\n  height:46 rem;\n  min-height: 46vh;\n  background-repeat: no-repeat;\n  width: 48%;\n  background-size: 19rem;\n  \n"]);return oe=function(){return e},e}function ie(){var e=Object(m.a)(["\n  background: rgb(0, 0, 0); /* The Fallback */\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  margin-top: 5%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  min-height: 50vh;\n  display: flex;\n  flex-direction: row;\n  @media (max-width: 760px) {\n    flex-direction:column;\n    align-items: center;\n    width:100%; \n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n  flex-wrap: wrap;\n  > p {\n    width: 48%;\n    margin: auto;\n    @media (max-width: 760px) {\n      padding-top: 5%;\n    }\n  }\n"]);return ie=function(){return e},e}var ce=h.a.div(ie()),le=h.a.div(oe(),re.a),ue=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(ce,null,r.a.createElement(le,null),r.a.createElement("p",null,"Hello, I'm Joseph Hayden. I am a front end developer and I am passonate about creating software that improves the daily lives of those around me. I like to create sites with clear cut ease of use and responsive design."))}}]),n}(a.Component);function se(){var e=Object(m.a)(["\n  background: rgb(0, 0, 0); /* The Fallback */\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  padding-top: 4%;\n  padding-bottom: 4%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  @media (max-width: 760px) {\n    display:flex;\n    flex-direction:column;\n  }\n"]);return se=function(){return e},e}function de(){var e=Object(m.a)(["\n  color: white;\n  width:27%;\n  margin:1%;\n  text-decoration: none;\n  padding: 2%;\n  border: 1px solid white;\n  &:hover{\n    border: 1px solid aqua;\n    color:aqua;\n    transition: 0.3s;\n    box-shadow: 0 5px 15px rgba(0,0,0,1);\n  }\n  @media (max-width: 760px) {\n    width:80%;\n    margin: 1% auto;\n  }\n"]);return de=function(){return e},e}var me=Object(h.a)(w.b)(de()),he=h.a.div(se()),pe=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(he,null,r.a.createElement(me,{to:"/"},"Home"),r.a.createElement(me,{to:"/projects/"},"Projects"),r.a.createElement(me,{to:"/contact/"},"Contact")),r.a.createElement(j.a,{path:"/",exact:!0,component:ue}),r.a.createElement(j.a,{path:"/contact/",component:H}),r.a.createElement(j.a,{path:"/projects/",component:te}))}}]),n}(a.Component),ge=t(48),be=t.n(ge),fe=t(19),ve=t(20);function we(){var e=Object(m.a)(["\n padding:3%;\n &:hover{\n  color:aqua;\n  transition: 0.3s;\n  box-shadow: 0 5px 15px rgba(0,0,0,1);\n}\n"]);return we=function(){return e},e}function je(){var e=Object(m.a)(["\n  width: 45%;\n  margin: auto;\n  display: flex;\n  padding: 5%;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  > div {\n    width: 100%;\n  }\n"]);return je=function(){return e},e}function xe(){var e=Object(m.a)(["\nwidth: 45%;\nmargin: auto;\n@media (max-width: 600px) {\n  width:auto;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(m.a)(["\n  background: rgb(0, 0, 0); /* The Fallback */\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  margin-top: 5%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  @media (max-width: 760px) {\n    flex-direction:column;\n    align-items: center;\n    width:100%; \n    padding-top: 5%;\n    padding-bottom: 5%;\n  }\n"]);return Ee=function(){return e},e}var Oe=h.a.div(Ee()),ye=h.a.div(xe()),ke=h.a.div(je()),Ce=h.a.a(we()),Se=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(Oe,null,r.a.createElement(ye,null,r.a.createElement("h3",null,"Contact Info"),r.a.createElement("p",null,"Email",r.a.createElement("br",null),"josephhaydendevelopment",r.a.createElement("br",null),"@gmail.com"),r.a.createElement("p",null,"Location",r.a.createElement("br",null),"Chicago, IL")),r.a.createElement(ke,null,r.a.createElement("h3",null,"Follow me on social media!"),r.a.createElement("div",null,r.a.createElement(Ce,{href:"https://github.com/JHaydenDev"},r.a.createElement(fe.a,{icon:ve.a,size:"3x"})),r.a.createElement(Ce,{href:"https://twitter.com/JHaydenDev"},r.a.createElement(fe.a,{icon:ve.c,size:"3x"})),r.a.createElement(Ce,{href:"https://www.linkedin.com/in/joseph-hayden-b30a5b126/"},r.a.createElement(fe.a,{icon:ve.b,size:"3x"})))))}}]),n}(a.Component);function De(){var e=Object(m.a)(["\n  width: 85%;\n  margin: auto;\n  padding-top: 3%;\n  padding-bottom: 3%;\n"]);return De=function(){return e},e}function Fe(){var e=Object(m.a)(["\n  text-align: center;\n  background: url(",");\n  color: white;\n  min-height: 100vh;\n  background-repeat: no-repeat;\n  @media (max-width: 760px) {\n    background-size: cover;\n  }\n"]);return Fe=function(){return e},e}var Ne=h.a.div(Fe(),be.a),He=h.a.div(De()),Me=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(Ne,null,r.a.createElement(He,null,r.a.createElement(v,null),r.a.createElement(w.a,{basename:"/"},r.a.createElement(pe,null)),r.a.createElement(Se,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.0832f371.chunk.js.map