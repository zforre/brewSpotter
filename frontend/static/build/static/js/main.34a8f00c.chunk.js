(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{20:function(e,t,a){},62:function(e,t,a){e.exports=a(92)},68:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),o=a.n(r),c=(a(67),a(68),a(26)),s=a(25),i=a(9),m=a(10),u=a(12),h=a(11),p=a(14),d=a(13),f=a(5),g=a.n(f),E=a(97),b=a(94);a(20);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/rest-auth/registration/"),this.state).then((function(e){console.log("two",e),localStorage.setItem("my-app-user",JSON.stringify(e.data)),t.props.history.push("/")})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(E.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},l.a.createElement("span",null,"Sign Up")),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,{className:"Form-label"},"Username:"),l.a.createElement(E.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,{className:"Form-label"},"Email:"),l.a.createElement(E.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0}),l.a.createElement(E.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,{className:"Form-label"},"Password:"),l.a.createElement(E.a.Control,{type:"password",name:"password1",value:this.state.password1,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,{className:"Form-label"}," Confirm Password:"),l.a.createElement(E.a.Control,{type:"password",name:"password2",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement(b.a,{className:"login-Btn",type:"submit"},"Sign Up")))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("The link was clicked.")}},{key:"handleSubmit",value:function(e){e.preventDefault(),g.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/rest-auth/login/"),this.state).then((function(e){console.log("one",e),localStorage.setItem("my-app-user",JSON.stringify(e.data)),window.location.reload(!1)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(E.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},"Login"),l.a.createElement(E.a.Group,null,l.a.createElement(E.a.Label,{className:"Form-label"},"Username:"),l.a.createElement(E.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement(E.a.Group,{controlId:"formBasicEmail"},l.a.createElement(E.a.Label,{className:"Form-label"},"Email:"),l.a.createElement(E.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0}),l.a.createElement(E.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(E.a.Group,{controlId:"formBasicPassword"},l.a.createElement(E.a.Label,{className:"Form-label"},"Password:"),l.a.createElement(E.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0}),l.a.createElement(E.a.Text,{className:"text-muted"},"Don't have an acount? ",l.a.createElement("a",{href:"/signup/"},l.a.createElement("span",{className:"login-Btn SignUp-btn"},"Click here to Sign up.")))),l.a.createElement(b.a,{to:"/",className:"login-Btn",type:"submit"},"Login")))}}]),t}(n.Component),C=a(61),y=a(95),j=a(99);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={groups:[],id:"",title:"",description:"",image:null,preview:null,is_public:!0},a.handleDelete=a.handleDelete.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleDelete",value:function(e){var t=this;console.log(this.state.id),g.a.delete("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/").concat(e.id)).then((function(a){console.log(a),console.log(a.data);var n=Object(C.a)(t.state.groups),l=n.indexOf(e);n.splice(l,1),t.setState({groups:n})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/")).then((function(t){console.log(t),e.setState({groups:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log("group list",this.props),console.log(this.state.groups),l.a.createElement("div",{className:"collect ml-5"},l.a.createElement("h2",{className:"mt-5"},"Profile info goes here!"),this.state.groups.map((function(t){return l.a.createElement(y.a,{key:t.id,style:{width:"35rem"}},l.a.createElement(j.a,{bg:"dark",text:"white",className:"mt-5 mr-5"},l.a.createElement(j.a.Img,{src:t.image,variant:"top",alt:"Uploaded content"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,t.title),l.a.createElement(j.a.Text,null,t.description),l.a.createElement(j.a.Link,{href:"/GroupDetail/".concat(t.id),className:"alert-link"},"View Collection"),l.a.createElement(j.a.Link,{onClick:function(){return e.handleDelete(t)},type:"submit",className:"text-danger"},"Remove"))))})),l.a.createElement(b.a,{href:"/GroupForm",variant:"primary",className:"mt-5 mb-5"},"Create new Collection"))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={user:null,username:"",bio:"",location:"",birth_date:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/profile")).then((function(t){console.log(t),e.setState({user:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,null))}}]),t}(n.Component),w=a(98);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={beers:[],name:"",description:"",image:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/beer")).then((function(t){console.log(t),e.setState({beers:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.beers.map((function(e){return l.a.createElement(w.a,{key:e.id,className:"mt-3 mr-3 beeritem"},l.a.createElement(w.a.Image,{width:120,height:120,alt:"beer",src:e.image}),l.a.createElement(w.a.Caption,{className:"text-white"},e.name))})))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={group:null,image:null,title:null,description:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;g.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/").concat(t)).then((function(t){e.setState((function(){return t.data}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(y.a,{className:"mt-5 col-11"},l.a.createElement(j.a,{className:"bg-dark text-white"},l.a.createElement(j.a.Img,{src:this.state.image,variant:"top",className:"blur"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null," ",l.a.createElement("h1",null,this.state.title," ")),l.a.createElement(j.a.Text,null,l.a.createElement("p",null,this.state.description)),l.a.createElement(j.a.Link,{href:"#",className:"alert-link"},"Edit Collection"),l.a.createElement(S,null),l.a.createElement("div",{className:"w-100"}),l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={title:"",description:"",image:null,is_public:!0},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handleImage=a.handleImage.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var t=e.target.files[0];this.setState({image:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("title",this.state.title),t.append("description",this.state.description),t.append("image",this.state.image),t.append("is_public",!1),console.log(this.state),g.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/"),t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(E.a,{onSubmit:this.handleSubmit,className:"justify-content-center"},l.a.createElement(E.a.Group,{controlId:"formBasicEmail"},l.a.createElement(E.a.Label,null,"Title"),l.a.createElement(E.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Name of the Collection"})),l.a.createElement(E.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(E.a.Label,null,"Description"),l.a.createElement(E.a.Control,{as:"textarea",name:"description",value:this.state.description,onChange:this.handleChange,rows:"3",placeholder:"Short description of the Collection"})),l.a.createElement(E.a.Group,{className:"mb-3"},l.a.createElement(E.a.Label,null,"Upload an Image"),l.a.createElement(E.a.Control,{type:"file",name:"image",onChange:this.handleImage})),l.a.createElement(E.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(E.a.Check,{type:"switch",id:"custom-switch",label:"Make This Collection Private"})),l.a.createElement(b.a,{variant:"primary",type:"submit"},"Submit")))}}]),t}(n.Component),I=a(96),F=a(53),T=a(54),D=a(22);function G(){return l.a.createElement("h2",null,"Home")}function B(){g.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/rest-auth/logout/")).then((function(e){localStorage.removeItem("my-app-user"),console.log("one",e)})).catch((function(e){console.log(e)}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement((function(){return l.a.createElement(T.a,null,l.a.createElement("div",null,l.a.createElement(I.a,{bg:"dark",variant:"dark",defaultActiveKey:"/home"},l.a.createElement(I.a.Brand,{href:"/"},"brewSpotter"),l.a.createElement(c.a,{className:"mr-auto"},l.a.createElement(c.a.Link,{href:"/Profile"},"Profile"),l.a.createElement(c.a.Link,{href:"/SignUp"},"Sign Up"),l.a.createElement(c.a.Link,{href:"/Login"},"Log In"),l.a.createElement(c.a.Link,{onClick:B},"Log Out")),l.a.createElement(E.a,{inline:!0},l.a.createElement(F.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(b.a,{variant:"outline-primary"},"Search"))),l.a.createElement(D.c,null,l.a.createElement(D.a,{path:"/GroupForm",component:L}),l.a.createElement(D.a,{path:"/GroupDetail/:id",component:x}),l.a.createElement(D.a,{path:"/Beer",component:S}),l.a.createElement(D.a,{path:"/GroupList",component:N}),l.a.createElement(D.a,{path:"/Profile",component:O}),l.a.createElement(D.a,{path:"/LogIn",component:k}),l.a.createElement(D.a,{path:"/SignUp",component:v}),l.a.createElement(D.a,{path:"/"},l.a.createElement(G,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.34a8f00c.chunk.js.map