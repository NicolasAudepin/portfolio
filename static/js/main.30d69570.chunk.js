(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{48:function(e,n,t){e.exports=t(86)},53:function(e,n,t){},54:function(e,n,t){},79:function(e,n){},80:function(e,n){},81:function(e,n){},82:function(e,n){},83:function(e,n){},86:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"backgroundMain",(function(){return u})),t.d(a,"backgroundSection",(function(){return m})),t.d(a,"backgroundTitle",(function(){return s})),t.d(a,"backgroundTitleSelected",(function(){return d})),t.d(a,"textLight",(function(){return h})),t.d(a,"textDark",(function(){return p})),t.d(a,"textTitle",(function(){return f})),t.d(a,"borderLight",(function(){return g}));var r=t(0),o=t.n(r),i=t(40),c=t.n(i),l=t(2),u="#DDD",m="#EEE",s="#A15",d="#771177",h="#333",p="#EEE",f="#EEE",g="#999",w=(t(53),t(3)),x=t(13),b=t(6),E=(t(54),t(47));function y(){var e=Object(w.a)(["\n  margin: 0px;\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n\n  z-index: 10;\n\n  li {\n    padding: 10px 10px;\n\n  }\n\n  li a{\n    font-size : 1.3em;\n    color: ",";\n    @media (max-width: 768px) {\n      color: ",";\n    }\n  }\n\n\n  li:hover {\n    border-bottom: 2px solid ",";\n    background-color: ",";\n    border-top: 2px solid ",";\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: ",";\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    position: fixed;\n    transform: ",";\n    top: 0px;\n    right: 0px;\n    height: 100vh;\n    width: 200px;\n    transition: transform 0.3s ease-in-out;\n\n\n\n  }\n"]);return y=function(){return e},e}var v=l.c.ul(y(),(function(e){return e.theme.textLight}),(function(e){return e.theme.textTitle}),(function(e){return e.theme.borderLight}),(function(e){return e.theme.backgroundTitle2}),(function(e){return e.theme.borderLight}),(function(e){return e.theme.backgroundTitle}),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),k=function(e){var n=e.open,t=e.onclick;return o.a.createElement(v,{open:n,onClick:t},o.a.createElement("li",null,o.a.createElement(x.b,{to:"/portfolio/home"},"Home")),o.a.createElement("li",null,o.a.createElement(x.b,{to:"/portfolio/contact"},"About Me")),o.a.createElement("li",null,o.a.createElement(x.b,{to:"/portfolio/portfolio"},"Portfolio")),o.a.createElement("li",null,o.a.createElement(x.b,{to:"/portfolio/curriculumvitae"},"Curriculum Vitae")))};function j(){var e=Object(w.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n  \n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return j=function(){return e},e}var O=l.c.div(j(),(function(e){return e.open?function(e){return e.theme.textTitle}:function(e){return e.theme.textLight}}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),I=function(){var e=Object(r.useState)(!1),n=Object(E.a)(e,2),t=n[0],a=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{open:t,onClick:function(){return a(!t)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement(k,{onclick:function(){return a(!t)},open:t}))};function C(){var e=Object(w.a)(["\n  \n  height: 40px;\n  background-color:",";\n  color: ",";\n  border-bottom: 2px solid ",";\n  \n  margin: 0px;\n  padding: 10px;\n\n  display: flex;\n  flex-direction: row;\n  \n\n  a{\n    text-decoration: none;\n    color: ",";\n  }\n  .logo {\n    \n  }\n"]);return C=function(){return e},e}var S=l.c.nav(C(),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.borderLight}),(function(e){return e.theme.textLight})),T=function(){return o.a.createElement(S,null,o.a.createElement(I,null))};function A(){var e=Object(w.a)(["\n  width : 50%;\n  height: auto;\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    \n  }\n"]);return A=function(){return e},e}function L(){var e=Object(w.a)(["\n  width : 50%;\n  height: auto;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    \n  }\n"]);return L=function(){return e},e}function D(){var e=Object(w.a)(["\n  padding : 2%;\n  \n  width : 50%;\n  height: 100%;\n  @media only screen and (max-width: 600px) {\n    width : 100%;\n  }\n"]);return D=function(){return e},e}function P(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction : row;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction : column-reverse;\n  }\n\n\n  \n"]);return P=function(){return e},e}function R(){var e=Object(w.a)(["\n  text-align: left;\n  text-anchor: middle;\n  padding-left:9px;\n  \n  font-size : 2em;\n  color : ",";\n  background-color: ",";\n  height: 5vw;\n  min-height: 50px;\n  max-height: 50px;\n  \n  \n"]);return R=function(){return e},e}function G(){var e=Object(w.a)(["\n  &{\n    text-align: left;\n    border-radius: 20px;\n    overflow: hidden;\n    width : 80vw;\n    max-width : 800px;\n    height : 45vw;\n    max-height : 450px; \n\n    margin : 5px;\n    color: ",";\n    background-color:",";\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  &:hover{\n    box-shadow:  0px 0px 10px ",";;    \n  }\n\n\n  @media only screen and (max-width: 600px) {\n    width : 90vw;\n    height : 120vw;    \n    max-height : 2000px; \n  }\n\n  a{\n    text-decoration: none;\n    color: ",";\n  }\n\n"]);return G=function(){return e},e}var M=l.c.div(G(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.backgroundTitle}),(function(e){return e.theme.textLight})),N=l.c.div(R(),(function(e){return e.theme.textTitle}),(function(e){return e.theme.backgroundTitle})),W=l.c.div(P()),z=l.c.section(D()),F=l.c.img(L()),H=l.c.video(A()),V=function(e){var n=e.title,t=e.summary,a=e.img,r=e.video,i=e.linkPath;return o.a.createElement(M,null,o.a.createElement(x.b,{to:i},o.a.createElement(N,null," ",n),o.a.createElement(W,null,o.a.createElement(z,null,t),r?o.a.createElement(H,{src:"/portfolio"+a,alt:n,autoPlay:!0,loop:!0,muted:!0}):o.a.createElement(F,{src:"/portfolio"+a,alt:n}))))};function B(){var e=Object(w.a)(["\n  display: flex;\n  max-width:100%;\n  overflow-x:scroll;\n  \n\n"]);return B=function(){return e},e}function U(){var e=Object(w.a)(["\n\n  position: relative;\n  top: 110px;\n  right: -10%;\n  width: 80%;\n  border: 5px solid red;\n  padding: 10px;\n  color : red;\n  background-color:",";\n\n  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  a{    \n    color : red;\n  }\n"]);return U=function(){return e},e}function X(){var e=Object(w.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n"]);return X=function(){return e},e}function J(){var e=Object(w.a)(["\n  max-width : 1400px;\n  display:flex;\n  flex-direction:row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  align-content:center;\n  \n\n  section{\n    max-width : 700px;\n    flex-direction: column;   \n    align-content:left;\n    align-items: flex-start; \n    text-align: left;\n    margin : 10px;\n    border : 30px;\n    padding : 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    color: ",";\n    background-color:",";\n    \n  }\n"]);return J=function(){return e},e}function Y(){var e=Object(w.a)(["\n  max-width: 700px;\n  align-self: center;\n  a{    \n    color: ",";\n  }\n  \n"]);return Y=function(){return e},e}function _(){var e=Object(w.a)(["\n\n\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  align-content:center;\n\n  text-align: left;\n  text-anchor: middle;\n  overflow: hidden;\n  margin : 10px;\n  border : 30px;\n  padding : 10px;\n \n  \n  width: 90%;\n  max-width: 900px;\n  min-height: 10vh;\n\n  color: ",";\n  background-color:",";\n\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  a{    \n    color: ",";\n  }\n\n"]);return _=function(){return e},e}var Q=l.c.section(_(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.borderLight})),q=l.c.div(Y(),(function(e){return e.theme.borderLight})),K=function(e){var n=e.stuff;return o.a.createElement(Q,null,o.a.createElement(q,null,n))},Z=l.c.section(J(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection})),$=l.c.section(X()),ee=l.c.div(U(),(function(e){return e.theme.backgroundSection}));l.c.section(B());function ne(){var e=Object(w.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n\n\n  \n"]);return ne=function(){return e},e}var te=l.c.section(ne()),ae=function(){return o.a.createElement(te,null,o.a.createElement(Q,null,o.a.createElement("section",null,"Hey! I'm Nicolas and welcome to my web page. Here you can find pages about some of my projects.")),o.a.createElement(V,{title:"Inktober 2020",summary:"This year I am following the internet challenge Inktober with my friend Dean. \r Every day of october I will be creating a short CGI video following a given theme and he will add music to it. \r For this year we are following licegateaux list of themes. ",img:"/videos/01prototype.mp4",linkPath:"/portfolio/projects/inktober",video:!0}),o.a.createElement(V,{title:"Sweet Dawn",summary:"An ensemble of interactive art pieces combining deep learning, modular music and 3D. \r They react to the public watching them like a game. ",img:"/images/sweet.png",linkPath:"/portfolio/projects/sweetdawn"}),o.a.createElement(V,{title:"The Classroom",summary:"Deep learning generation mayhem ",img:"/images/Classroom.JPG",linkPath:"/portfolio/projects/classroom"}),o.a.createElement(V,{title:"Glitch Art",summary:"I made an image editing software focussing on glitch aestetic.\r I used it to create a massive amount of images in which I explore the numerical aspect of the images. ",img:"/images/glitch.jpg",linkPath:"/portfolio/projects/glitchart"}),o.a.createElement(V,{title:"Museum Insta",summary:"Three months of confinement is a lot of time. \r I used this time to go back to my roots of creating 3D with Blender. \r I gave myself the goal of creating a bit of content everyday until the end of the confinement and here are the results.",img:"/images/collage.png",linkPath:"/portfolio/projects/insta"}),o.a.createElement(V,{title:"Musical projects",summary:" I have always been doing music. Most of it is lost on some external drives.",img:"/images/vcvrack.PNG",linkPath:"/portfolio/project/music"}))};function re(){var e=Object(w.a)(["\n  width : 50%;\n  border-radius:50%;\n  height: auto;\n  margin: 3px;\n\n  @media only screen and (max-width: 600px) {\n    \n    display: block;\n    margin-left: auto;\n    margin-right: auto\n  }\n"]);return re=function(){return e},e}function oe(){var e=Object(w.a)(["\n  width : 50%;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n  \n  justify-content: center;\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  margin: 3px;\n  border-bottom: 1px solid ",";\n"]);return ie=function(){return e},e}function ce(){var e=Object(w.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n\n\n  \n"]);return ce=function(){return e},e}var le=l.c.section(ce()),ue=l.c.div(ie(),(function(e){return e.theme.textLight})),me=l.c.div(oe()),se=l.c.img(re()),de=function(){return o.a.createElement(le,null,o.a.createElement(Q,null,o.a.createElement(q,null,o.a.createElement(ue,null,o.a.createElement(me,null,"Hi! My name is Nicolas Audepin and I am young engineer/artist from Paris. I search for ways to mix my two passions, art and artificial intelligence. I am currently working on around a million projects and the most important one is called Sweet Dawn. It\u2019s about the creation of an interactive art piece combining music, video and space in which you interact with an AI. I am also currently participating to the Inktober and building this website myself."),o.a.createElement(se,{src:"/portfolio/images/me.JPG",alt:"me"})),o.a.createElement("section",null,"You can contact me by sending me a mail at ",o.a.createElement("a",{href:""},"nicolas.audepin@gmail.com")),o.a.createElement("section",null,"Those are my social networks:",o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/nicolas-audepin-619a0213a/"},"LinkedIn"),"  "),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/NicolasAudepin"},"Github")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.youtube.com/channel/UCAuiFLj97V0GXFoSatMMDvw?view_as=subscriber"},"Youtube")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://soundcloud.com/astronaut_fr"},"Soundcloud")))))))},he=t(15),pe=t(16),fe=t(18),ge=t(17),we=t(30);function xe(){var e=Object(w.a)(["\n\nbox-shadow: 2px 8px 30px rgba(0, 0, 0, 0.5);\n"]);return xe=function(){return e},e}var be=Object(l.c)(we.a)(xe()),Ee=function(e){Object(fe.a)(t,e);var n=Object(ge.a)(t);function t(){var e;Object(he.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={numPages:null,pageNumber:1,pageswidth:200},e.onDocumentLoadSuccess=function(n){var t=n.numPages;e.setState({numPages:t})},e.getDataFromURL=function(e){return new Promise((function(n,t){setTimeout((function(){fetch(e).then((function(e){return e.text()})).then((function(e){n(e)}))}))}),2e3)},e.pagefunc=function(n){return o.a.createElement(we.b,{pageNumber:n,key:n,width:e.props.pagewidth()})},e.handleResize=function(){e.setState({pageswidth:e.props.pagewidth()})},e}return Object(pe.a)(t,[{key:"render",value:function(){var e=this.state.pageNumber;return window.addEventListener("resize",this.handleResize),o.a.createElement(be,{file:"/portfolio"+this.props.pathinpublic,onLoadSuccess:this.onDocumentLoadSuccess,loading:o.a.createElement("div",null,o.a.createElement("p",null,"Loading the PDF."),o.a.createElement("p",null,"If nothing shows up after a few seconds refresh this page or use the download button."))},this.props.pagelist?this.props.pagelist.map(this.pagefunc):this.pagefunc(e))}}]),t}(r.Component);function ye(){var e=Object(w.a)(["\n  margin: 20px;\n  border: 3px solid ",";\n  padding: 10px;\n  display:block;\n  color : ",";\n  text-decoration: none;\n  font-weight: bold;\n  font-size :inherit;\n  font-family:inherit;\n  background-color:","; \n  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  :hover {\n    border: 3px solid ",";\n    box-shadow: 2px 8px 30px rgba(0, 0, 0, 0.5);\n  }\n\n  :active {\n    border: 3px solid ",";\n    box-shadow: 2px 8px 30px ",";\n    background-color:","; \n    color : ",";\n  }\n"]);return ye=function(){return e},e}function ve(){var e=Object(w.a)(["\n  margin: 20px;\n  border: 3px solid ",";\n  padding: 10px;\n  display:block;\n  color : ",";\n  text-decoration: none;\n  font-weight: bold;\n  background-color:","; \n  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  :hover {\n    border: 3px solid ",";\n    box-shadow: 2px 8px 30px rgba(0, 0, 0, 0.5);\n  }\n\n  :active {\n    border: 3px solid ",";\n    box-shadow: 2px 8px 30px ",";\n    background-color:","; \n    color : ",";\n  }\n"]);return ve=function(){return e},e}var ke=l.c.a(ve(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight})),je=l.c.button(ye(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight})),Oe=function(e){Object(fe.a)(t,e);var n=Object(ge.a)(t);function t(){var e;Object(he.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={pathinpublic:"/pdfs/CV_Nicolas_Audepin.pdf"},e}return Object(pe.a)(t,[{key:"pagewidth",value:function(){return Math.min(window.screen.availWidth-10,800)}},{key:"render",value:function(){var e=this.state.pathinpublic;return o.a.createElement($,null,o.a.createElement(ke,{href:"/portfolio"+e,target:"_blank"},"Donwload CV"),o.a.createElement(Ee,{pathinpublic:e,pagewidth:this.pagewidth}),o.a.createElement(ke,{href:"/portfolio"+e,target:"_blank"},"Donwload CV"))}}]),t}(r.Component),Ie=function(e){Object(fe.a)(t,e);var n=Object(ge.a)(t);function t(e){var a;return Object(he.a)(this,t),(a=n.call(this,e)).state={pathinpublic:"/pdfs/Portfolio2020.pdf",showall:!1},a.switchShowAll=function(){a.setState({showall:!a.state.showall})},new ResizeObserver((function(e){console.log("Body height changed:",e[0].target.clientHeight);e[0].target.clientHeight;if(a.state.showall){var n=Math.floor(a.pagewidth());window.scrollTo({top:n,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"});console.log("scroll pos",window.scrollY)})).observe(document.body),a}return Object(pe.a)(t,[{key:"pagewidth",value:function(){return Math.min(window.screen.availWidth-10,1e3)}},{key:"render",value:function(){var e=this.state,n=e.pathinpublic,t=e.showall;return o.a.createElement($,null,o.a.createElement("div",{style:{position:"relative",display:"flex",flexDirection:"row"}},o.a.createElement(je,{onClick:this.switchShowAll},t?"Hide Portfolio":"Show full Portfolio"),o.a.createElement(ke,{href:"/portfolio"+n,target:"_blank"},"Donwload Portfolio")),o.a.createElement(Ee,{pathinpublic:n,pagelist:t?[1,2,3,4,5,6,7,8,9]:[1],pagewidth:this.pagewidth}),o.a.createElement("div",{style:{position:"relative",display:"flex",flexDirection:"row"}},o.a.createElement(je,{onClick:this.switchShowAll},t?"Hide Portfolio":"Show full Portfolio"),o.a.createElement(ke,{href:"/portfolio"+n,target:"_blank"},"Donwload Portfolio")))}}]),t}(r.Component),Ce=t(45);function Se(){var e=Object(w.a)(["\nmargin : 5px;\nwidth: 30px;\nheight:30px;\ncolor: ",";\nbackground-color: ",";\nborder-radius:50%;\n\n"]);return Se=function(){return e},e}function Te(){var e=Object(w.a)(["\ndisplay: flex;\nflex-direction: row;\nfont-size: 1.4em;\n\ncolor: ",";\nbackground-color: ",";\n\n"]);return Te=function(){return e},e}function Ae(){var e=Object(w.a)(["\n  display: flex;\n  margin: 10px;\n  flex-direction: column;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  overflow: hidden;\n  border-top-left-radius : 20px;\n  border-top-right-radius : 20px;\n\n"]);return Ae=function(){return e},e}var Le=l.c.section(Ae()),De=l.c.section(Te(),(function(e){return e.theme.textTitle}),(function(e){return e.theme.backgroundTitle})),Pe=l.c.section(Se(),(function(e){return e.theme.backgroundTitle}),(function(e){return e.theme.textTitle})),Re=function(e){var n=e.url,t=e.day,a=e.theme;return o.a.createElement(Le,null,o.a.createElement(De,null,o.a.createElement(Pe,null,t),a),o.a.createElement(Ce.a,{url:n,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:""}))};function Ge(){var e=Object(w.a)(["\n  width : 50%;\n  height: auto;\n  margin: 3px;\n\n  @media only screen and (max-width: 600px) {\n    \n    display: block;\n    margin-left: auto;\n    margin-right: auto\n  }\n"]);return Ge=function(){return e},e}function Me(){var e=Object(w.a)(["\n  width : 50%;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return Me=function(){return e},e}function Ne(){var e=Object(w.a)(["\n  display:flex;\n  flex-direction:column;\n  align-content:center;\n"]);return Ne=function(){return e},e}function We(){var e=Object(w.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-self:center;\n    justify-content: center;\n"]);return We=function(){return e},e}function ze(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n  \n  justify-content: center;\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  margin: 3px;  \n"]);return ze=function(){return e},e}function Fe(){var e=Object(w.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n"]);return Fe=function(){return e},e}var He=[{url:"https://www.instagram.com/p/CFz_N8kC8HR/",day:1,theme:"PROTOTYPE"},{url:"https://www.instagram.com/p/CF2hCWkiLTc/",day:2,theme:"FOU RIRE"},{url:"https://www.instagram.com/p/CF4tqxuC8JI/",day:3,theme:"PIGEON"},{url:"https://www.instagram.com/p/CF7LMiBi7nj/",day:4,theme:"SYMBIOSE"},{url:"https://www.instagram.com/p/CF93ct5C2X5/",day:5,theme:"POT"},{url:"https://www.instagram.com/p/CGAqLMlodx1/",day:6,theme:"BEAUCOUP"},{url:"https://www.instagram.com/p/CGDXnZFIhWK/",day:7,theme:"PEAU"},{url:"https://www.instagram.com/p/CGGMHz1CAJC/",day:8,theme:"MADELEINE"},{url:"https://www.instagram.com/p/CGIwrb2iROQ/",day:9,theme:"PERPLEXE"},{url:"https://www.instagram.com/p/CGK2QBXCc04/",day:10,theme:"TRAMWAY"},{url:"https://www.instagram.com/p/CGODxdQiz8b/",day:11,theme:"LEITMOTIV"},{url:"https://www.instagram.com/p/CGQOI03CtYt/",day:12,theme:"DINAUSORE"},{url:"https://www.instagram.com/p/CGSjeX8Cs4D/",day:13,theme:"SALOPETTE"},{url:"https://www.instagram.com/p/CGVgf9DCFS1/",day:14,theme:"ARIANE"},{url:"https://www.instagram.com/p/CGXywDziJCE/",day:15,theme:"VERTE"},{url:"https://www.instagram.com/p/CGajRrhCNJ4/",day:16,theme:"ARCHITECTURE"},{url:"https://www.instagram.com/p/CGddOFmC89c/",day:17,theme:"POILS"},{url:"https://www.instagram.com/p/CGf6mgWislT/",day:18,theme:"MOUVEMENT"},{url:"",day:19,theme:"MAGAZINE"},{url:"",day:20,theme:"CICATRISATION"},{url:"",day:21,theme:"PAGES"},{url:"",day:22,theme:"COUCHE"},{url:"",day:23,theme:"DECORATION"},{url:"",day:24,theme:"RADIOACTIVITE"},{url:"",day:25,theme:"PETIT.E"},{url:"",day:26,theme:"MARRONIER"},{url:"",day:27,theme:"CERCLE"},{url:"",day:28,theme:"DYSPHORIE"},{url:"",day:29,theme:"CELESTE"},{url:"",day:30,theme:"FANTOMES"},{url:"",day:31,theme:"BROUILLARD"}],Ve=l.c.section(Fe()),Be=l.c.div(ze()),Ue=l.c.section(We()),Xe=l.c.section(Ne()),Je=l.c.div(Me()),Ye=l.c.img(Ge()),_e=function(){return o.a.createElement(Ve,null,o.a.createElement(Q,null,o.a.createElement(q,null,o.a.createElement(Be,null,o.a.createElement(Je,null,"I'm doing the Inktober 2020 on ",o.a.createElement("a",{href:"https://www.instagram.com/nicolasaudepin/"},"my Instagram (@nicolasaudepin)"),"  . It is an internet challenge for artists with a bit too much time on their hands. Everyday of October we must do one drawing (or small animation in my case) following that day's theme. For this challenge I am working in duo with my friend ",o.a.createElement("a",{href:"https://www.instagram.com/dimbymaxime/"},"@Dimbymaxime")," who is doing the audio for each of the videos and we are following the list of themes by ",o.a.createElement("a",{href:"https://www.instagram.com/licegateaux/"},"@Licegateaux"),"."),o.a.createElement(Ye,{src:"/portfolio/images/xalist.jpg",alt:"Alice's Inktober list"})))),o.a.createElement(Xe,null,o.a.createElement(ee,null,"Instagram decided to change their API two weeks after I finished this part and it broke everything. I will update this when comprehensible tutorials about the new API are writen. In the meanwhile you can go directly on my instagram page ",o.a.createElement("a",{href:"https://www.instagram.com/nicolasaudepin/"},"you can go directly on my instagram page (@nicolasaudepin)")),o.a.createElement(Ue,null,He.map((function(e,n){var t=e.url,a=e.day,r=e.theme;return o.a.createElement(Re,{url:t,day:a,theme:r})})))))};function Qe(){var e=Object(w.a)(["\n  margin : 2px;\n  height: auto;\n  max-width: ",";\n  width: ",";\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return Qe=function(){return e},e}function qe(){var e=Object(w.a)(["\n    flex-direction : column;\n    align-content: middle;\n  "]);return qe=function(){return e},e}function Ke(){var e=Object(w.a)(["\n  \n  display: flex;\n  flex-direction : row;\n  flex-wrap:wrap;\n  justify-content: center;\n  ","\n\n"]);return Ke=function(){return e},e}function Ze(){var e=Object(w.a)(["\n  font-size : larger;\n  font-weight: bold;\n  margin : 10px;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(w.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n"]);return $e=function(){return e},e}var en=l.c.section($e()),nn=l.c.div(Ze()),tn=l.c.div(Ke(),(function(e){return e.column&&Object(l.b)(qe())})),an=l.c.img(Qe(),(function(e){return e.width}),(function(e){return e.width}));function rn(e){var n=e.src,t=e.alt,a=e.width;return o.a.createElement(an,{width:a,src:"/portfolio"+n,alt:t})}var on=function(){return o.a.createElement(en,null,o.a.createElement(K,{stuff:o.a.createElement("div",null,o.a.createElement("p",null,"I have always been intrested in two things: Art and Science. Both seems to head in opposite directions but always end up colliding. Sweet Dawn is one of those collision in the numerical world."),o.a.createElement("p",null,"The goal of Sweet Dawn is to create a corpus of interactive art pieces allowing an active audiance to play visually with artificial intelligences. I want it to be a celebration of what can be achived with technology in a sort of safe space before those kind of technologies get too present in our everyday life."))}),o.a.createElement(Z,null,o.a.createElement("section",{style:{maxWidth:"600px"}},o.a.createElement(nn,null,"Sweet Arpegiato"),o.a.createElement(tn,null,o.a.createElement("div",{style:{maxWidth:"300px"}},"This is the first prototype of interactive piece. Trough a webcam my AI looks at the public and starts playing music."),o.a.createElement(rn,{src:"/images/SweetDawn/sweet arp photo.PNG",alt:"me on a bike",width:"200px"}))),o.a.createElement("section",{style:{maxWidth:"200px"}},o.a.createElement(tn,null,"Most of the soundscapes are generated live using the free software VCV Rack in collaboration with my friend Dean.",o.a.createElement(rn,{src:"/images/SweetDawn/vcvrack.PNG",alt:"vcvrack is cool!",width:"190px"}))),o.a.createElement("section",{style:{maxWidth:"400px"}},o.a.createElement(nn,null,"Sweet Ocean"),o.a.createElement(tn,null,o.a.createElement("div",null,"We combined most of the previous ideas into one central piece using the most complexe evolving music yet and some 3D animation and background."),o.a.createElement(rn,{src:"/images/SweetDawn/sweetOcean.png",alt:"Concept art for Sweet Ocean",width:"400px"}))),o.a.createElement("section",{style:{maxWidth:"600px"}},o.a.createElement(nn,null,"In the physical world"),o.a.createElement(tn,null,o.a.createElement("div",{style:{maxWidth:"600px"}},o.a.createElement("p",null,"Right now all of my work for this project only runs on my personnal computer but we want to give it some physical form. Dedicating a computer for this project is not exactly in my budget yet. We are thinking about maybe buying a Raspberry pi but it would definitely mean optimising stuff."),o.a.createElement("p",null,"At the same time we want to present this as soon as possible to a public to see some interaction. We are currently under lockdown in France so it is not even possible right now to expose it at home."),o.a.createElement("p",null,"If the situation does not get better I will think about making this project easily downloadable or maybe web based but it would differ a bit from my original vision of group interaction.")),o.a.createElement(rn,{src:"/images/SweetDawn/projo.jpg",alt:"part of the beast",width:"400px"}))),o.a.createElement("section",{style:{maxWidth:"200px",maxHeight:"300px"}},"All of the expriments are coded by myself using python. But I did not revolutionize AI all by myself so I used the Y.O.L.O. v3 algorithm by Joseph Redmon ."),o.a.createElement("section",{style:{maxWidth:"400px",maxHeight:"400px"}},o.a.createElement(nn,null,"The Cloud"),o.a.createElement(tn,null,o.a.createElement("div",null,"The cloud is fragile. It do not like when people touch each other."),o.a.createElement(rn,{src:"/images/SweetDawn/sweet cloud.PNG",alt:"do not touch the cloud",width:"400px"})))))};function cn(){var e=Object(w.a)(["\n  \n  width:100vw;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  \n"]);return cn=function(){return e},e}function ln(){var e=Object(w.a)(["\n  background-color: rgba(0,0,0,0.5); \n  color : ",";\n  \n  margin:10px;\n  padding:10px;\n\n"]);return ln=function(){return e},e}function un(){var e=Object(w.a)(["\n  display:flex;\n  flex-direction:column;\n  position:absolute;\n  \n  z-index:10;\n"]);return un=function(){return e},e}function mn(){var e=Object(w.a)(["\n  display:flex;\n  flex-direction:column;\n  position:absolute;\n  left:0vw;\n  background-color:magenta;\n  z-index:0;\n"]);return mn=function(){return e},e}var sn=l.c.section(mn()),dn=l.c.section(un()),hn=l.c.section(ln(),(function(e){return e.theme.backgroundSection})),pn=l.c.img(cn()),fn=function(e){var n=e.pathinpublic;return o.a.createElement(pn,{src:"/portfolio"+n})},gn=function(){return o.a.createElement($,null,o.a.createElement(sn,null,o.a.createElement(fn,{pathinpublic:"/images/glitch.jpg"}),o.a.createElement(fn,{pathinpublic:"/images/glitchart.jpg"}),o.a.createElement(fn,{pathinpublic:"/images/glitch.jpg"})),o.a.createElement(dn,null,o.a.createElement(hn,null,"aaaaaaaaaah")))};function wn(){var e=Object(w.a)(["\n  background-color: ",";\n\n"]);return wn=function(){return e},e}var xn=l.c.div(wn(),(function(e){return e.theme.backgroundMain}));var bn=function(){return o.a.createElement(xn,{className:"App"},o.a.createElement(x.a,{className:"App-header"},o.a.createElement(T,null),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/portfolio/home",exact:!0,component:function(){return o.a.createElement(ae,null)}}),o.a.createElement(b.a,{path:"/portfolio/curriculumvitae",exact:!0,component:function(){return o.a.createElement(Oe,null)}}),o.a.createElement(b.a,{path:"/portfolio/portfolio",exact:!0,component:function(){return o.a.createElement(Ie,null)}}),o.a.createElement(b.a,{path:"/",exact:!0,component:function(){return o.a.createElement(ae,null)}}),o.a.createElement(b.a,{path:"/portfolio/contact",exact:!0,component:function(){return o.a.createElement(de,null)}}),o.a.createElement(b.a,{path:"/portfolio/projects/inktober",exact:!0,component:function(){return o.a.createElement(_e,null)}}),o.a.createElement(b.a,{path:"/portfolio/projects/sweetdawn",exact:!0,component:function(){return o.a.createElement(on,null)}}),o.a.createElement(b.a,{path:"/portfolio/projects/glitchart",exact:!0,component:function(){return o.a.createElement(gn,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{theme:a},o.a.createElement(bn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.30d69570.chunk.js.map