(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{110:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"backgroundMain",(function(){return u})),t.d(r,"backgroundSection",(function(){return m})),t.d(r,"backgroundTitle",(function(){return s})),t.d(r,"backgroundTitleSelected",(function(){return d})),t.d(r,"textLight",(function(){return h})),t.d(r,"textDark",(function(){return p})),t.d(r,"textTitle",(function(){return f})),t.d(r,"borderLight",(function(){return g}));var a=t(0),o=t.n(a),i=t(24),c=t.n(i),l=t(3),u="#DDD",m="#EEE",s="#A15",d="#771177",h="#333",p="#EEE",f="#EEE",g="#999",w=(t(62),t(18)),x=t(19),b=t(21),y=t(20),v=t(5),E=t(15),k=t(9),j=(t(63),t(56));function O(){var e=Object(v.a)(["\n  margin: 0px;\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n\n  z-index: 10;\n\n  li {\n    padding: 10px 10px;\n\n  }\n\n  li a{\n    font-size : 1.3em;\n    color: ",";\n    @media (max-width: 768px) {\n      color: ",";\n    }\n  }\n\n\n  li:hover {\n    border-bottom: 2px solid ",";\n    background-color: ",";\n    border-top: 2px solid ",";\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: ",";\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    position: fixed;\n    transform: ",";\n    top: 0px;\n    right: 0px;\n    height: 100vh;\n    width: 200px;\n    transition: transform 0.3s ease-in-out;\n\n\n\n  }\n"]);return O=function(){return e},e}var I=l.c.ul(O(),(function(e){return e.theme.textLight}),(function(e){return e.theme.textTitle}),(function(e){return e.theme.borderLight}),(function(e){return e.theme.backgroundTitle2}),(function(e){return e.theme.borderLight}),(function(e){return e.theme.backgroundTitle}),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),C=function(e){var n=e.open,t=e.onclick;return o.a.createElement(I,{open:n,onClick:t},o.a.createElement("li",null,o.a.createElement(E.b,{to:"/portfolio/home"},"Home")),o.a.createElement("li",null,o.a.createElement(E.b,{to:"/portfolio/contact"},"About Me")),o.a.createElement("li",null,o.a.createElement(E.b,{to:"/portfolio/portfolio"},"Portfolio")),o.a.createElement("li",null,o.a.createElement(E.b,{to:"/portfolio/curriculumvitae"},"Curriculum Vitae")))};function S(){var e=Object(v.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n  \n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return S=function(){return e},e}var T=l.c.div(S(),(function(e){return e.open?function(e){return e.theme.textTitle}:function(e){return e.theme.textLight}}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),A=function(){var e=Object(a.useState)(!1),n=Object(j.a)(e,2),t=n[0],r=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{open:t,onClick:function(){return r(!t)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement(C,{onclick:function(){return r(!t)},open:t}))};function L(){var e=Object(v.a)(["\n  \n  height: 40px;\n  background-color:",";\n  color: ",";\n  border-bottom: 2px solid ",";\n  \n  margin: 0px;\n  padding: 10px;\n\n  display: flex;\n  flex-direction: row;\n  \n\n  a{\n    text-decoration: none;\n    color: ",";\n  }\n  .logo {\n    \n  }\n"]);return L=function(){return e},e}var D=l.c.nav(L(),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.borderLight}),(function(e){return e.theme.textLight})),P=function(){return o.a.createElement(D,null,o.a.createElement(A,null))};function R(){var e=Object(k.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}function G(){var e=Object(v.a)(["\n  width : 50%;\n  height: auto;\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    \n  }\n"]);return G=function(){return e},e}function M(){var e=Object(v.a)(["\n  width : 50%;\n  height: auto;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    \n  }\n"]);return M=function(){return e},e}function N(){var e=Object(v.a)(["\n  padding : 2%;\n  \n  width : 50%;\n  height: 100%;\n  @media only screen and (max-width: 600px) {\n    width : 100%;\n  }\n"]);return N=function(){return e},e}function z(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction : row;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction : column-reverse;\n  }\n\n\n  \n"]);return z=function(){return e},e}function W(){var e=Object(v.a)(["\n  text-align: left;\n  text-anchor: middle;\n  padding-left:9px;\n  \n  font-size : 2em;\n  color : ",";\n  background-color: ",";\n  height: 5vw;\n  min-height: 50px;\n  max-height: 50px;\n  \n  \n"]);return W=function(){return e},e}function F(){var e=Object(v.a)(["\n  &{\n    text-align: left;\n    border-radius: 20px;\n    overflow: hidden;\n    width : 80vw;\n    max-width : 800px;\n    height : 45vw;\n    max-height : 450px; \n\n    margin : 5px;\n    color: ",";\n    background-color:",";\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  &:hover{\n    box-shadow:  0px 0px 10px ",";;    \n  }\n\n\n  @media only screen and (max-width: 600px) {\n    width : 90vw;\n    height : 120vw;    \n    max-height : 2000px; \n  }\n\n  a{\n    text-decoration: none;\n    color: ",";\n  }\n\n"]);return F=function(){return e},e}var H=l.c.div(F(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.backgroundTitle}),(function(e){return e.theme.textLight})),U=l.c.div(W(),(function(e){return e.theme.textTitle}),(function(e){return e.theme.backgroundTitle})),X=l.c.div(z()),B=l.c.section(N()),V=l.c.img(M()),J=l.c.video(G()),Y=function(e){var n=e.title,t=e.summary,r=e.img,a=e.video,i=e.linkPath;return o.a.createElement(H,null,o.a.createElement(E.b,{to:i},o.a.createElement(U,null," ",n),o.a.createElement(X,null,o.a.createElement(B,null,t),a?o.a.createElement(J,{src:"/portfolio"+r,alt:n,autoPlay:!0,loop:!0,muted:!0}):o.a.createElement(V,{src:"/portfolio"+r,alt:n}))))};function _(){var e=Object(v.a)(["\n  display: flex;\n  max-width:100%;\n  overflow-x:scroll;\n  \n\n"]);return _=function(){return e},e}function Q(){var e=Object(v.a)(["\n\n  position: relative;\n  top: 110px;\n  right: -10%;\n  width: 80%;\n  border: 5px solid red;\n  padding: 10px;\n  color : red;\n  background-color:",";\n\n  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  a{    \n    color : red;\n  }\n"]);return Q=function(){return e},e}function q(){var e=Object(v.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n"]);return q=function(){return e},e}function K(){var e=Object(v.a)(["\n  max-width : 1400px;\n  display:flex;\n  flex-direction:row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  align-content:center;\n  \n\n  section{\n    max-width : 700px;\n    flex-direction: column;   \n    align-content:left;\n    align-items: flex-start; \n    text-align: left;\n    margin : 10px;\n    border : 30px;\n    padding : 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    color: ",";\n    background-color:",";\n    \n  }\n"]);return K=function(){return e},e}function Z(){var e=Object(v.a)(["\n  max-width: 700px;\n  align-self: center;\n  a{    \n    color: ",";\n  }\n  \n"]);return Z=function(){return e},e}function $(){var e=Object(v.a)(["\n\n\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  align-content:center;\n\n  text-align: left;\n  text-anchor: middle;\n  overflow: hidden;\n  margin : 10px;\n  border : 30px;\n  padding : 10px;\n \n  \n  width: 90%;\n  max-width: 900px;\n  min-height: 10vh;\n\n  color: ",";\n  background-color:",";\n\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  a{    \n    color: ",";\n  }\n\n"]);return $=function(){return e},e}var ee=l.c.section($(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.borderLight})),ne=l.c.div(Z(),(function(e){return e.theme.borderLight})),te=function(e){var n=e.stuff;return o.a.createElement(ee,null,o.a.createElement(ne,null,n))},re=l.c.section(K(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection})),ae=l.c.section(q()),oe=l.c.div(Q(),(function(e){return e.theme.backgroundSection}));l.c.section(_());function ie(){var e=Object(v.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n\n\n  \n"]);return ie=function(){return e},e}var ce=l.c.section(ie()),le=function(){return o.a.createElement(ce,null,o.a.createElement(ee,null,o.a.createElement("section",null,"Hey! I'm Nicolas and welcome to my web page. Here you can find pages about some of my projects.")),o.a.createElement(Y,{title:"Inktober 2020",summary:"This year I am following the internet challenge Inktober with my friend Dean. \r Every day of october I will be creating a short CGI video following a given theme and he will add music to it. \r For this year we are following licegateaux list of themes. ",img:"/videos/01prototype.mp4",linkPath:"/portfolio/projects/inktober",video:!0}),o.a.createElement(Y,{title:"Sweet Dawn",summary:"An ensemble of interactive art pieces combining deep learning, modular music and 3D. \r They react to the public watching them like a game. ",img:"/images/sweet.png",linkPath:"/portfolio/projects/sweetdawn"}),o.a.createElement(Y,{title:"The Classroom",summary:"Deep learning generation mayhem ",img:"/images/Classroom.JPG",linkPath:"/portfolio/projects/classroom"}),o.a.createElement(Y,{title:"Glitch Art",summary:"I made an image editing software focussing on glitch aestetic.\r I used it to create a massive amount of images in which I explore the numerical aspect of the images. ",img:"/images/glitch.jpg",linkPath:"/portfolio/projects/glitchart"}),o.a.createElement(Y,{title:"Museum Insta",summary:"Three months of confinement is a lot of time. \r I used this time to go back to my roots of creating 3D with Blender. \r I gave myself the goal of creating a bit of content everyday until the end of the confinement and here are the results.",img:"/images/collage.png",linkPath:"/portfolio/projects/insta"}),o.a.createElement(Y,{title:"Musical projects",summary:" I have always been doing music. Most of it is lost on some external drives.",img:"/images/vcvrack.PNG",linkPath:"/portfolio/project/music"}))};function ue(){var e=Object(v.a)(["\n  width : 50%;\n  border-radius:50%;\n  height: auto;\n  margin: 3px;\n\n  @media only screen and (max-width: 600px) {\n    \n    display: block;\n    margin-left: auto;\n    margin-right: auto\n  }\n"]);return ue=function(){return e},e}function me(){var e=Object(v.a)(["\n  width : 50%;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return me=function(){return e},e}function se(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  \n  justify-content: center;\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  margin: 3px;\n  border-bottom: 1px solid ",";\n"]);return se=function(){return e},e}function de(){var e=Object(v.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n\n\n  \n"]);return de=function(){return e},e}var he=l.c.section(de()),pe=l.c.div(se(),(function(e){return e.theme.textLight})),fe=l.c.div(me()),ge=l.c.img(ue()),we=function(){return o.a.createElement(he,null,o.a.createElement(ee,null,o.a.createElement(ne,null,o.a.createElement(pe,null,o.a.createElement(fe,null,"Hi! My name is Nicolas Audepin and I am young engineer/artist from Paris. I search for ways to mix my two passions, art and artificial intelligence. I am currently working on around a million projects and the most important one is called Sweet Dawn. It\u2019s about the creation of an interactive art piece combining music, video and space in which you interact with an AI. I am also currently participating to the Inktober and building this website myself."),o.a.createElement(ge,{src:"/portfolio/images/me.JPG",alt:"me"})),o.a.createElement("section",null,"You can contact me by sending me a mail at ",o.a.createElement("a",{href:""},"nicolas.audepin@gmail.com")),o.a.createElement("section",null,"Those are my social networks:",o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/nicolas-audepin-619a0213a/"},"LinkedIn"),"  "),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/NicolasAudepin"},"Github")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.youtube.com/channel/UCAuiFLj97V0GXFoSatMMDvw?view_as=subscriber"},"Youtube")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://soundcloud.com/astronaut_fr"},"Soundcloud")))))))},xe=t(42);function be(){var e=Object(v.a)(["\n\nbox-shadow: 2px 8px 30px rgba(0, 0, 0, 0.5);\n"]);return be=function(){return e},e}var ye=Object(l.c)(xe.a)(be()),ve=function(e){Object(b.a)(t,e);var n=Object(y.a)(t);function t(){var e;Object(w.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={numPages:null,pageNumber:1,pageswidth:200},e.onDocumentLoadSuccess=function(n){var t=n.numPages;e.setState({numPages:t})},e.getDataFromURL=function(e){return new Promise((function(n,t){setTimeout((function(){fetch(e).then((function(e){return e.text()})).then((function(e){n(e)}))}))}),2e3)},e.pagefunc=function(n){return o.a.createElement(xe.b,{pageNumber:n,key:n,width:e.props.pagewidth()})},e.handleResize=function(){e.setState({pageswidth:e.props.pagewidth()})},e}return Object(x.a)(t,[{key:"render",value:function(){var e=this.state.pageNumber;return window.addEventListener("resize",this.handleResize),o.a.createElement(ye,{file:"/portfolio"+this.props.pathinpublic,onLoadSuccess:this.onDocumentLoadSuccess,loading:o.a.createElement("div",null,o.a.createElement("p",null,"Loading the PDF."),o.a.createElement("p",null,"If nothing shows up after a few seconds refresh this page or use the download button."))},this.props.pagelist?this.props.pagelist.map(this.pagefunc):this.pagefunc(e))}}]),t}(a.Component);function Ee(){var e=Object(v.a)(["\n  margin: 20px;\n  border: 3px solid ",";\n  padding: 10px;\n  display:block;\n  color : ",";\n  text-decoration: none;\n  font-weight: bold;\n  font-size :inherit;\n  font-family:inherit;\n  background-color:","; \n  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  :hover {\n    border: 3px solid ",";\n    box-shadow: 2px 8px 30px rgba(0, 0, 0, 0.5);\n  }\n\n  :active {\n    border: 3px solid ",";\n    box-shadow: 2px 8px 30px ",";\n    background-color:","; \n    color : ",";\n  }\n"]);return Ee=function(){return e},e}function ke(){var e=Object(v.a)(["\n  margin: 20px;\n  border: 3px solid ",";\n  padding: 10px;\n  display:block;\n  color : ",";\n  text-decoration: none;\n  font-weight: bold;\n  background-color:","; \n  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n  :hover {\n    border: 3px solid ",";\n    box-shadow: 2px 8px 30px rgba(0, 0, 0, 0.5);\n  }\n\n  :active {\n    border: 3px solid ",";\n    box-shadow: 2px 8px 30px ",";\n    background-color:","; \n    color : ",";\n  }\n"]);return ke=function(){return e},e}var je=l.c.a(ke(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight})),Oe=l.c.button(Ee(),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.backgroundSection}),(function(e){return e.theme.textLight})),Ie=function(e){Object(b.a)(t,e);var n=Object(y.a)(t);function t(){var e;Object(w.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={pathinpublic:"/pdfs/CV_Nicolas_Audepin.pdf"},e}return Object(x.a)(t,[{key:"pagewidth",value:function(){return Math.min(window.screen.availWidth-10,800)}},{key:"render",value:function(){var e=this.state.pathinpublic;return o.a.createElement(ae,null,o.a.createElement(je,{href:"/portfolio"+e,target:"_blank"},"Download Resume"),o.a.createElement(ve,{pathinpublic:e,pagewidth:this.pagewidth}),o.a.createElement(je,{href:"/portfolio"+e,target:"_blank"},"Download Resume"))}}]),t}(a.Component),Ce=function(e){Object(b.a)(t,e);var n=Object(y.a)(t);function t(e){var r;return Object(w.a)(this,t),(r=n.call(this,e)).state={pathinpublic:"/pdfs/Portfolio2020.pdf",showall:!1,mustscroll:!1},r.switchShowAll=function(){r.setState({showall:!r.state.showall,mustscroll:!0})},new ResizeObserver((function(e){console.log("Body height changed:",e[0].target.clientHeight);e[0].target.clientHeight;if(r.state.mustscroll){if(r.state.showall){var n=Math.floor(r.pagewidth());window.scrollTo({top:n,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"});r.setState({mustscroll:!1})}console.log("scroll pos",window.scrollY)})).observe(document.body),r}return Object(x.a)(t,[{key:"pagewidth",value:function(){return Math.min(window.screen.availWidth-10,1e3)}},{key:"render",value:function(){var e=this.state,n=e.pathinpublic,t=e.showall;return o.a.createElement(ae,null,o.a.createElement("div",{style:{position:"relative",display:"flex",flexDirection:"row"}},o.a.createElement(Oe,{onClick:this.switchShowAll},t?"Hide Portfolio":"Show full Portfolio"),o.a.createElement(je,{href:"/portfolio"+n,target:"_blank"},"Download Portfolio")),o.a.createElement(ve,{pathinpublic:n,pagelist:t?[1,2,3,4,5,6,7,8,9]:[1],pagewidth:this.pagewidth}),o.a.createElement("div",{style:{position:"relative",display:"flex",flexDirection:"row"}},o.a.createElement(Oe,{onClick:this.switchShowAll},t?"Hide Portfolio":"Show full Portfolio"),o.a.createElement(je,{href:"/portfolio"+n,target:"_blank"},"Download Portfolio")))}}]),t}(a.Component),Se=Object(k.g)(Ce),Te=t(51);function Ae(){var e=Object(v.a)(["\nmargin : 5px;\nwidth: 30px;\nheight:30px;\ncolor: ",";\nbackground-color: ",";\nborder-radius:50%;\n\n"]);return Ae=function(){return e},e}function Le(){var e=Object(v.a)(["\ndisplay: flex;\nflex-direction: row;\nfont-size: 1.4em;\n\ncolor: ",";\nbackground-color: ",";\n\n"]);return Le=function(){return e},e}function De(){var e=Object(v.a)(["\n  display: flex;\n  margin: 10px;\n  flex-direction: column;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  overflow: hidden;\n  border-top-left-radius : 20px;\n  border-top-right-radius : 20px;\n\n"]);return De=function(){return e},e}var Pe=l.c.section(De()),Re=l.c.section(Le(),(function(e){return e.theme.textTitle}),(function(e){return e.theme.backgroundTitle})),Ge=l.c.section(Ae(),(function(e){return e.theme.backgroundTitle}),(function(e){return e.theme.textTitle})),Me=function(e){var n=e.url,t=e.day,r=e.theme;return o.a.createElement(Pe,null,o.a.createElement(Re,null,o.a.createElement(Ge,null,t),r),o.a.createElement(Te.a,{url:n,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:""}))},Ne=t(53);function ze(){var e=Object(v.a)(["\n  \n  background-image : url(",") ; /* The image used */\n  background-color: #9c0000; /* Used if the image is unavailable */\n\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  background-size: cover; /* Resize the background image to cover the entire container */\n"]);return ze=function(){return e},e}function We(){var e=Object(v.a)(["\n  width : 50%;\n  height: auto;\n  margin: 3px;\n\n  @media only screen and (max-width: 600px) {\n    \n    display: block;\n    margin-left: auto;\n    margin-right: auto\n  }\n"]);return We=function(){return e},e}function Fe(){var e=Object(v.a)(["\n  width : 50%;\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return Fe=function(){return e},e}function He(){var e=Object(v.a)(["\n  display:flex;\n  flex-direction:column;\n  align-content:center;\n"]);return He=function(){return e},e}function Ue(){var e=Object(v.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-self:center;\n    justify-content: center;\n"]);return Ue=function(){return e},e}function Xe(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  \n  justify-content: center;\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  margin: 3px;  \n"]);return Xe=function(){return e},e}function Be(){var e=Object(v.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n"]);return Be=function(){return e},e}var Ve=[{url:"https://www.instagram.com/p/CFz_N8kC8HR/",day:1,theme:"PROTOTYPE"},{url:"https://www.instagram.com/p/CF2hCWkiLTc/",day:2,theme:"FOU RIRE"},{url:"https://www.instagram.com/p/CF4tqxuC8JI/",day:3,theme:"PIGEON"},{url:"https://www.instagram.com/p/CF7LMiBi7nj/",day:4,theme:"SYMBIOSE"},{url:"https://www.instagram.com/p/CF93ct5C2X5/",day:5,theme:"POT"},{url:"https://www.instagram.com/p/CGAqLMlodx1/",day:6,theme:"BEAUCOUP"},{url:"https://www.instagram.com/p/CGDXnZFIhWK/",day:7,theme:"PEAU"},{url:"https://www.instagram.com/p/CGGMHz1CAJC/",day:8,theme:"MADELEINE"},{url:"https://www.instagram.com/p/CGIwrb2iROQ/",day:9,theme:"PERPLEXE"},{url:"https://www.instagram.com/p/CGK2QBXCc04/",day:10,theme:"TRAMWAY"},{url:"https://www.instagram.com/p/CGODxdQiz8b/",day:11,theme:"LEITMOTIV"},{url:"https://www.instagram.com/p/CGQOI03CtYt/",day:12,theme:"DINAUSORE"},{url:"https://www.instagram.com/p/CGSjeX8Cs4D/",day:13,theme:"SALOPETTE"},{url:"https://www.instagram.com/p/CGVgf9DCFS1/",day:14,theme:"ARIANE"},{url:"https://www.instagram.com/p/CGXywDziJCE/",day:15,theme:"VERTE"},{url:"https://www.instagram.com/p/CGajRrhCNJ4/",day:16,theme:"ARCHITECTURE"},{url:"https://www.instagram.com/p/CGddOFmC89c/",day:17,theme:"POILS"},{url:"https://www.instagram.com/p/CGf6mgWislT/",day:18,theme:"MOUVEMENT"},{url:"",day:19,theme:"MAGAZINE"},{url:"",day:20,theme:"CICATRISATION"},{url:"",day:21,theme:"PAGES"},{url:"",day:22,theme:"COUCHE"},{url:"",day:23,theme:"DECORATION"},{url:"",day:24,theme:"RADIOACTIVITE"},{url:"",day:25,theme:"PETIT.E"},{url:"",day:26,theme:"MARRONIER"},{url:"",day:27,theme:"CERCLE"},{url:"",day:28,theme:"DYSPHORIE"},{url:"",day:29,theme:"CELESTE"},{url:"",day:30,theme:"FANTOMES"},{url:"",day:31,theme:"BROUILLARD"}],Je=l.c.section(Be()),Ye=l.c.div(Xe()),_e=l.c.section(Ue()),Qe=l.c.section(He()),qe=l.c.div(Fe()),Ke=l.c.img(We()),Ze=Object(l.c)(Je)(ze(),"/portfolio/images/Inktober/backgroundLR.png"),$e=function(){return Math.min(600,window.screen.availWidth-10)},en=function(){return o.a.createElement(Ze,null,o.a.createElement(ee,null,o.a.createElement(ne,null,o.a.createElement(Ye,null,o.a.createElement(qe,null,"I did the Inktober 2020 on ",o.a.createElement("a",{href:"https://www.instagram.com/nicolasaudepin/"},"my Instagram (@nicolasaudepin)"),"  . It is an internet challenge for artists with a bit too much time on their hands. Everyday of October we must do one drawing (or small animation in my case) following that day's theme. For this challenge I worked in duo with my friend ",o.a.createElement("a",{href:"https://www.instagram.com/dimbymaxime/"},"@Dimbymaxime")," who is doing the audio for each of the videos and we are following the list of themes by ",o.a.createElement("a",{href:"https://www.instagram.com/licegateaux/"},"@Licegateaux"),". It was quite intense for both of us to keep up with the themes day by day but we learned so much."),o.a.createElement(Ke,{src:"/portfolio/images/Inktober/xalist.jpg",alt:"Alice's Inktober list"})))),o.a.createElement("div",null,o.a.createElement(Ne.a,{videoId:"AlsmXGvxwIw",opts:{width:$e(),height:$e()}})),o.a.createElement(Qe,null,o.a.createElement(oe,null,"Instagram decided to change their API two weeks after I finished this part and it broke everything. I will update this when comprehensible tutorials about the new API are writen. In the meanwhile you can go directly on my instagram page ",o.a.createElement("a",{href:"https://www.instagram.com/nicolasaudepin/"},"you can go directly on my instagram page (@nicolasaudepin)")),o.a.createElement(_e,null,Ve.map((function(e,n){var t=e.url,r=e.day,a=e.theme;return o.a.createElement(Me,{url:t,day:r,theme:a})})))))};function nn(){var e=Object(v.a)(["\n  margin : 2px;\n  height: auto;\n  max-width: ",";\n  width: ",";\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    height:auto;\n    display: block;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(v.a)(["\n    flex-direction : column;\n    align-content: middle;\n  "]);return tn=function(){return e},e}function rn(){var e=Object(v.a)(["\n  \n  display: flex;\n  flex-direction : row;\n  flex-wrap:wrap;\n  justify-content: center;\n  ","\n\n"]);return rn=function(){return e},e}function an(){var e=Object(v.a)(["\n  font-size : larger;\n  font-weight: bold;\n  margin : 10px;\n"]);return an=function(){return e},e}function on(){var e=Object(v.a)(["\n  display : flex;\n  flex-direction : column;\n  align-items : center;\n  justify-content: flex-start;\n"]);return on=function(){return e},e}var cn=l.c.section(on()),ln=l.c.div(an()),un=l.c.div(rn(),(function(e){return e.column&&Object(l.b)(tn())})),mn=l.c.img(nn(),(function(e){return e.width}),(function(e){return e.width}));function sn(e){var n=e.src,t=e.alt,r=e.width;return o.a.createElement(mn,{width:r,src:"/portfolio"+n,alt:t})}var dn=function(){return o.a.createElement(cn,null,o.a.createElement(te,{stuff:o.a.createElement("div",null,o.a.createElement("p",null,"I have always been intrested in two things: Art and Science. Both seems to head in opposite directions but always end up colliding. Sweet Dawn is one of those collision in the numerical world."),o.a.createElement("p",null,"The goal of Sweet Dawn is to create a corpus of interactive art pieces allowing an active audiance to play visually with artificial intelligences. I want it to be a celebration of what can be achived with technology in a sort of safe space before those kind of technologies get too present in our everyday life."))}),o.a.createElement(re,null,o.a.createElement("section",{style:{maxWidth:"600px"}},o.a.createElement(ln,null,"Sweet Arpegiato"),o.a.createElement(un,null,o.a.createElement("div",{style:{maxWidth:"300px"}},"This is the first prototype of interactive piece. Trough a webcam my AI looks at the public and starts playing music."),o.a.createElement(sn,{src:"/images/SweetDawn/sweet arp photo.PNG",alt:"me on a bike",width:"200px"}))),o.a.createElement("section",{style:{maxWidth:"200px"}},o.a.createElement(un,null,"Most of the soundscapes are generated live using the free software VCV Rack in collaboration with my friend Dean.",o.a.createElement(sn,{src:"/images/SweetDawn/vcvrack.PNG",alt:"vcvrack is cool!",width:"190px"}))),o.a.createElement("section",{style:{maxWidth:"400px"}},o.a.createElement(ln,null,"Sweet Ocean"),o.a.createElement(un,null,o.a.createElement("div",null,"We combined most of the previous ideas into one central piece using the most complexe evolving music yet and some 3D animation and background."),o.a.createElement(sn,{src:"/images/SweetDawn/sweetOcean.png",alt:"Concept art for Sweet Ocean",width:"400px"}))),o.a.createElement("section",{style:{maxWidth:"600px"}},o.a.createElement(ln,null,"In the physical world"),o.a.createElement(un,null,o.a.createElement("div",{style:{maxWidth:"600px"}},o.a.createElement("p",null,"Right now all of my work for this project only runs on my personnal computer but we want to give it some physical form. Dedicating a computer for this project is not exactly in my budget yet. We are thinking about maybe buying a Raspberry pi but it would definitely mean optimising stuff."),o.a.createElement("p",null,"At the same time we want to present this as soon as possible to a public to see some interaction. We are currently under lockdown in France so it is not even possible right now to expose it at home."),o.a.createElement("p",null,"If the situation does not get better I will think about making this project easily downloadable or maybe web based but it would differ a bit from my original vision of group interaction.")),o.a.createElement(sn,{src:"/images/SweetDawn/projo.jpg",alt:"part of the beast",width:"400px"}))),o.a.createElement("section",{style:{maxWidth:"200px",maxHeight:"300px"}},"All of the expriments are coded by myself using python. But I did not revolutionize AI all by myself so I used the Y.O.L.O. v3 algorithm by Joseph Redmon ."),o.a.createElement("section",{style:{maxWidth:"400px",maxHeight:"400px"}},o.a.createElement(ln,null,"The Cloud"),o.a.createElement(un,null,o.a.createElement("div",null,"The cloud is fragile. It do not like when people touch each other."),o.a.createElement(sn,{src:"/images/SweetDawn/sweet cloud.PNG",alt:"do not touch the cloud",width:"400px"})))))};function hn(){var e=Object(v.a)(["\n  \n  width:100vw;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  \n"]);return hn=function(){return e},e}function pn(){var e=Object(v.a)(["\n  display:flex;\n  position:absolute;\n  left: 0px;\n  background-color: rgba(0,0,0,0.5); \n  color : ",";\n  margin:10px;\n  padding:10px;\n  font-size:400%;\n"]);return pn=function(){return e},e}function fn(){var e=Object(v.a)(["\n  background-color: rgba(0,0,0,0.5); \n  color : ",";\n  \n  margin:10px;\n  padding:10px;\n\n"]);return fn=function(){return e},e}function gn(){var e=Object(v.a)(["\n  display:flex;\n  flex-direction:column;\n  position:absolute;\n  width:100%;\n  overflow:hidden;\n  \n  z-index:10;\n"]);return gn=function(){return e},e}function wn(){var e=Object(v.a)(["\n  display:flex;\n  flex-direction:column;\n  position:absolute;\n  left:0vw;\n  background-color:magenta;\n  z-index:0;\n"]);return wn=function(){return e},e}l.c.section(wn()),l.c.section(gn()),l.c.section(fn(),(function(e){return e.theme.backgroundSection})),l.c.section(pn(),(function(e){return e.theme.backgroundSection})),l.c.img(hn());var xn=t(41);function bn(){var e=Object(v.a)(["\n  background-color: ",";\n\n"]);return bn=function(){return e},e}var yn=l.c.div(bn(),(function(e){return e.theme.backgroundMain})),vn=function(e){Object(b.a)(t,e);var n=Object(y.a)(t);function t(){return Object(w.a)(this,t),n.apply(this,arguments)}return Object(x.a)(t,[{key:"render",value:function(){return xn.b.init("e39eca09b6a0499cb19c8b37cb873437"),o.a.createElement(yn,{className:"App"},o.a.createElement(E.a,{className:"App-header"},o.a.createElement(P,null),o.a.createElement(R,null),o.a.createElement(k.c,null,o.a.createElement(k.a,{path:"/portfolio/home",exact:!0,component:function(){return o.a.createElement(le,null)}}),o.a.createElement(k.a,{path:"/portfolio/curriculumvitae",exact:!0,component:function(){return o.a.createElement(Ie,null)}}),o.a.createElement(k.a,{path:"/portfolio/portfolio",exact:!0,component:function(){return o.a.createElement(Se,null)}}),o.a.createElement(k.a,{path:"/",exact:!0,component:function(){return o.a.createElement(le,null)}}),o.a.createElement(k.a,{path:"/portfolio/contact",exact:!0,component:function(){return o.a.createElement(we,null)}}),o.a.createElement(k.a,{path:"/portfolio/projects/inktober",exact:!0,component:function(){return o.a.createElement(en,null)}}),o.a.createElement(k.a,{path:"/portfolio/projects/sweetdawn",exact:!0,component:function(){return o.a.createElement(dn,null)}}),o.a.createElement(k.a,{path:"/portfolio/projects/glitchart",render:function(){return o.a.createElement(xn.a,{model:"page",url:"/glitch-art"})}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{theme:r},o.a.createElement(vn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,n,t){e.exports=t(110)},62:function(e,n,t){},63:function(e,n,t){},88:function(e,n){},89:function(e,n){},90:function(e,n){},91:function(e,n){},92:function(e,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.6d2d72b6.chunk.js.map