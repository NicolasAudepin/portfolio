(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(n,e,t){n.exports=t(36)},28:function(n,e,t){},35:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"backgroundMain",(function(){return u})),t.d(r,"backgroundSection",(function(){return m})),t.d(r,"backgroundTitle",(function(){return d})),t.d(r,"backgroundTitleSelected",(function(){return h})),t.d(r,"textLight",(function(){return s})),t.d(r,"textDark",(function(){return f})),t.d(r,"textTitle",(function(){return p})),t.d(r,"borderLight",(function(){return g}));var a=t(0),o=t.n(a),i=t(18),c=t.n(i),l=t(1),u="#DDD",m="#EEE",d="#A15",h="#771177",s="#333",f="#EEE",p="#EEE",g="#999",x=(t(28),t(2)),b=t(8),w=t(3),v=t(22);function E(){var n=Object(x.a)(["\n  margin: 0px;\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10px;\n\n  }\n\n  a{\n    color: ",";\n    @media (max-width: 768px) {\n      color: ",";\n    }\n  }\n\n\n  li:hover {\n    border-bottom: 2px solid ",";\n    background-color: ",";\n    border-top: 2px solid ",";\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: ",";\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    position: fixed;\n    transform: ",";\n    top: 0px;\n    right: 0px;\n    height: 100vh;\n    width: 200px;\n    transition: transform 0.3s ease-in-out;\n\n\n\n  }\n"]);return E=function(){return n},n}var y=l.b.ul(E(),(function(n){return n.theme.textLight}),(function(n){return n.theme.textTitle}),(function(n){return n.theme.borderLight}),(function(n){return n.theme.backgroundTitle2}),(function(n){return n.theme.borderLight}),(function(n){return n.theme.backgroundTitle}),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),k=function(n){var e=n.open,t=n.onclick;return o.a.createElement(y,{open:e,onClick:t},o.a.createElement("li",null,o.a.createElement(b.b,{to:"/portfolio/home"},"Home")),o.a.createElement("li",null,o.a.createElement(b.b,{to:"/portfolio/contact"},"About Me")),o.a.createElement("li",null,o.a.createElement(b.b,{to:"/portfolio/portfolio"},"Portfolio")),o.a.createElement("li",null,o.a.createElement(b.b,{to:"/portfolio/curiculumvitae"},"Curiculum Vitae")))};function j(){var n=Object(x.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n  \n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return j=function(){return n},n}var I=l.b.div(j(),(function(n){return n.open?function(n){return n.theme.textTitle}:function(n){return n.theme.textLight}}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"translateX(100%)":"translateX(0)"}),(function(n){return n.open?0:1}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),O=function(){var n=Object(a.useState)(!1),e=Object(v.a)(n,2),t=e[0],r=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{open:t,onClick:function(){return r(!t)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement(k,{onclick:function(){return r(!t)},open:t}))};function L(){var n=Object(x.a)(["\n  \n  height: 40px;\n  background-color:",";\n  color: ",";\n  border-bottom: 2px solid ",";\n  \n  margin: 0px;\n  padding: 10px;\n\n  display: flex;\n  flex-direction: row;\n  \n\n  a{\n    text-decoration: none;\n    color: ",";\n  }\n  .logo {\n    \n  }\n"]);return L=function(){return n},n}var T=l.b.nav(L(),(function(n){return n.theme.backgroundSection}),(function(n){return n.theme.textLight}),(function(n){return n.theme.borderLight}),(function(n){return n.theme.textLight})),D=function(){return o.a.createElement(T,null,o.a.createElement(O,null))};function P(){var n=Object(x.a)(["\n  width : 50%;\n  height: auto;\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return P=function(){return n},n}function S(){var n=Object(x.a)(["\n  width : 50%;\n  height: auto;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return S=function(){return n},n}function A(){var n=Object(x.a)(["\n  padding : 2%;\n  \n  width : 50%;\n  height: 100%;\n  @media only screen and (max-width: 600px) {\n    width : 100%;\n  }\n"]);return A=function(){return n},n}function M(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction : row;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction : column-reverse;\n  }\n\n\n  \n"]);return M=function(){return n},n}function C(){var n=Object(x.a)(["\n  text-align: left;\n  text-anchor: middle;\n  \n  font-size : 2em;\n  color : ",";\n  background-color: ",";\n  height: 5vw;\n  min-height: 50px;\n  max-height: 50px;\n  \n  \n"]);return C=function(){return n},n}function G(){var n=Object(x.a)(["\n  &{\n    text-align: left;\n    border-radius: 20px;\n    overflow: hidden;\n    width : 80vw;\n    max-width : 800px;\n    height : 45vw;\n    max-height : 450px; \n\n    margin : 5px;\n    color: ",";\n    background-color:",";\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  &:hover{\n    box-shadow:  0px 0px 10px ",";;    \n  }\n\n\n  @media only screen and (max-width: 600px) {\n    width : 90vw;\n    height : 120vw;    \n    max-height : 2000px; \n  }\n\n  a{\n    text-decoration: none;\n    color: ",";\n  }\n\n"]);return G=function(){return n},n}var N=l.b.div(G(),(function(n){return n.theme.textLight}),(function(n){return n.theme.backgroundSection}),(function(n){return n.theme.backgroundTitle}),(function(n){return n.theme.textLight})),X=l.b.div(C(),(function(n){return n.theme.textTitle}),(function(n){return n.theme.backgroundTitle})),F=l.b.div(M()),H=l.b.section(A()),J=l.b.img(S()),B=l.b.video(P()),z=function(n){var e=n.title,t=n.summary,r=n.img,a=n.video,i=n.linkPath;return o.a.createElement(N,null,o.a.createElement(b.b,{to:i},o.a.createElement(X,null," ",e),o.a.createElement(F,null,o.a.createElement(H,null,t),a?o.a.createElement(B,{src:r,alt:e,autoPlay:!0,loop:!0,muted:!0}):o.a.createElement(J,{src:r,alt:e}))))};function V(){var n=Object(x.a)(["\n\n\n  display:flex;\n  flex-direction: column;\n  align-self: center;\n  align-content:center;\n\n  text-align: left;\n  text-anchor: middle;\n  overflow: hidden;\n  margin : 10px;\n  border : 30px;\n  padding : 10px;\n \n  \n  width: 90%;\n  max-width: 900px;\n  min-height: 10vh;\n\n  color: ",";\n  background-color:",";\n\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n"]);return V=function(){return n},n}var W=l.b.section(V(),(function(n){return n.theme.textLight}),(function(n){return n.theme.backgroundSection}));function Y(){var n=Object(x.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n\n\n  \n"]);return Y=function(){return n},n}var _=l.b.section(Y()),U=function(){return o.a.createElement(_,null,o.a.createElement(W,null,o.a.createElement("section",null,"Hey! I'm Nicolas and welcome to my web page. Here you can find pages about some of my projects.")),o.a.createElement(z,{title:"Inktober 2020",summary:"This year I am following the internet challenge Inktober with my friend Dean. \r Every day of october I will be creating a short CGI video following a given theme and he will add music to it. \r For this year we are following licegateaux list of themes. ",img:"videos/01prototype.mp4",linkPath:"/portfolio/project/SweetDawn",video:!0}),o.a.createElement(z,{title:"Sweet Dawn",summary:"An ensemble of interactive art pieces combining deep learning, modular music and 3D. \r They react to the public watching them like a game. ",img:"images/sweet.png",linkPath:"/portfolio/project/SweetDawn"}),o.a.createElement(z,{title:"The Classroom",summary:"Deep learning generation mayhem ",img:"images/Classroom.JPG",linkPath:"/portfolio/project/classroom"}),o.a.createElement(z,{title:"Glitch Art",summary:"I made an image editing software focussing on glitch aestetic.\r I used it to create a massive amount of images in which I explore the numerical aspect of the images. ",img:"images/glitch.jpg",linkPath:"/portfolio/project/glitchart"}),o.a.createElement(z,{title:"Museum Insta",summary:"Three months of confinement is a lot of time. \r I used this time to go back to my roots of creating 3D with Blender. \r I gave myself the goal of creating a bit of content everyday until the end of the confinement and here are the results.",img:"images/collage.png",linkPath:"/portfolio/project/insta"}),o.a.createElement(z,{title:"Musical projects",summary:" I have always been doing music. Most of it is lost on some external drives.",img:"images/vcvrack.PNG",linkPath:"/portfolio/project/music"}))};function $(){var n=Object(x.a)(["\n  width : 50%;\n  border-radius:50%;\n  height: auto;\n  margin: 3px;\n\n  @media only screen and (max-width: 600px) {\n    \n    display: block;\n    margin-left: auto;\n    margin-right: auto\n  }\n"]);return $=function(){return n},n}function q(){var n=Object(x.a)(["\n  width : 50%;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return q=function(){return n},n}function K(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  \n  justify-content: center;\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  margin: 3px;\n  border-bottom: 1px solid ",";\n"]);return K=function(){return n},n}function Q(){var n=Object(x.a)(["\n  max-width: 700px;\n  align-self: center;\n\n  a{\n    \n    color: ",";\n  }\n"]);return Q=function(){return n},n}function R(){var n=Object(x.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n\n\n  \n"]);return R=function(){return n},n}var Z=l.b.section(R()),nn=l.b.div(Q(),(function(n){return n.theme.borderLight})),en=l.b.div(K(),(function(n){return n.theme.textLight})),tn=l.b.div(q()),rn=l.b.img($()),an=function(){return o.a.createElement(Z,null,o.a.createElement(W,null,o.a.createElement(nn,null,o.a.createElement(en,null,o.a.createElement(tn,null,"Hi! My name is Nicolas Audepin and I am an engineering student from Paris. I try to find a way to mix my two passions, art and artificial intelligence. I am currently working on around a million projects and the most important one is called Sweet Dawn. It\u2019s about the creation of an interactive art piece combining music, video and space in which you interact with an AI. I am also currently participating on the Inktober and building this website myself."),o.a.createElement(rn,{src:"/images/me.JPG",alt:"me"})),o.a.createElement("section",null,"You can contact me by sending me a mail at nicolas.audpein@gmail.com"),o.a.createElement("section",null,"If you prefere you can contact me on those social networks:",o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/nicolas-audepin-619a0213a/"},"LinkedIn"),"  "),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/NicolasAudepin"},"Github")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.youtube.com/channel/UCAuiFLj97V0GXFoSatMMDvw?view_as=subscriber"},"Youtube")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://soundcloud.com/astronaut_fr"},"Soundcloud")))))))};t(35);function on(){var n=Object(x.a)(["\n  background-color: ",";\n\n"]);return on=function(){return n},n}var cn=l.b.div(on(),(function(n){return n.theme.backgroundMain}));var ln=function(){return o.a.createElement(cn,{className:"App"},o.a.createElement(b.a,{className:"App-header"},o.a.createElement(D,null),o.a.createElement(w.c,null,o.a.createElement(w.a,{path:"/portfolio/home",exact:!0,component:function(){return o.a.createElement(U,null)}}),o.a.createElement(w.a,{path:"/",exact:!0,component:function(){return o.a.createElement(U,null)}}),o.a.createElement(w.a,{path:"/portfolio/contact",exact:!0,component:function(){return o.a.createElement(an,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{theme:r},o.a.createElement(ln,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e2b37e68.chunk.js.map