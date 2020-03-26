(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{18:function(e,t,a){},62:function(e,t,a){e.exports=a(92)},68:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),o=a.n(r),c=(a(67),a(68),a(26)),s=a(19),i=a(7),m=a(8),h=a(10),u=a(9),d=a(6),p=a(11),b=a(4),f=a.n(b),g=a(97),E=a(94);a(18);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f.a.post("".concat("http://localhost:3000","/rest-auth/registration/"),this.state).then((function(e){console.log("two",e),localStorage.setItem("my-app-user",JSON.stringify(e.data)),t.props.history.push("/profilesetup")})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(g.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},l.a.createElement("span",null,"Sign Up")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Username:"),l.a.createElement(g.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Email:"),l.a.createElement(g.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Password:"),l.a.createElement(g.a.Control,{type:"password",name:"password1",value:this.state.password1,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"}," Confirm Password:"),l.a.createElement(g.a.Control,{type:"password",name:"password2",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Sign Up")))}}]),t}(n.Component),y=a(95),C=a(99);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={beer_name:"",beer_label:"",beer_label_hd:"",beer_abv:"",beer_ibu:"",beer_style:"",beer_description:"",brewery_name:"",brewery_city:"",brewery_state:"",url:"",groups:[]},a.handleSearch=a.handleSearch.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.handleSearch(),f.a.get("".concat("http://localhost:3000","/api/v1/")).then((function(t){console.log(t),e.setState({groups:t.data})})).catch((function(e){console.log(e)}))}},{key:"handleSearch",value:function(){var e=this,t=Math.floor(2e3*Math.random())+1;f.a.get("https://api.untappd.com/v4/beer/info/".concat(t,"?client_id=").concat("02706253A36A4FBB44C9CB48DDEF5AEE3046D1ED","&client_secret=").concat("3F9F680A71BDE093C3D8BE1E30B463C8E5FACE5E")).then((function(t){console.log(t),e.setState(t.data.response.beer),e.setState(t.data.response.beer.brewery),e.setState(t.data.response.beer.brewery.contact),e.setState(t.data.response.beer.brewery.location)})).catch((function(e){console.log(e)}))}},{key:"addBeer",value:function(e){var t={label:this.state.beer_label,name:this.state.beer_name,description:this.state.beer_description,abv:this.state.beer_abv,ibu:this.state.beer_ibu,city:this.state.brewery_city,state:this.state.brewery_state};f.a.post("".concat("http://localhost:3000","/api/v1/").concat(e.id,"/"),t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(y.a,{className:"w-50 mt-5"},l.a.createElement(C.a,{className:"bg-dark text-white"},l.a.createElement(C.a.Img,{src:this.state.beer_label_hd||this.state.beer_label,variant:"top",className:""}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null," ",l.a.createElement("h1",null,this.state.beer_name)),l.a.createElement(C.a.Text,null,this.state.beer_style),l.a.createElement(C.a.Text,{className:"text-muted"},"ABV: ",this.state.beer_abv," IBU: ",this.state.beer_ibu),l.a.createElement(C.a.Text,null,this.state.beer_description),l.a.createElement(C.a.Link,{href:this.state.url},this.state.brewery_name),l.a.createElement(C.a.Text,null,this.state.brewery_city,", ",this.state.brewery_state),l.a.createElement("div",{className:"w-100"}),l.a.createElement(E.a,{href:"#",className:"",onClick:this.addBeer},"Add to Your Collection"),l.a.createElement("div",{className:"w-100"}),l.a.createElement(E.a,{className:"mt-3",onClick:this.handleSearch},"New Beer")))))}}]),t}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={user:"",avatar:null,username:"",bio:"",location:"",birthdate:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("avatar",this.state.avatar),t.append("bio",this.state.bio),t.append("location",this.state.location),t.append("birthdate",this.state.birthdate),console.log(this.state),f.a.post("".concat("http://localhost:3000","/api/v1/profile/"),t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var t=e.target.files[0];this.setState({avatar:t})}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(g.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},l.a.createElement("span",null,"Setup Your Profile")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Bio:"),l.a.createElement(g.a.Control,{as:"textarea",rows:"3",type:"text",name:"bio",value:this.state.bio,onChange:this.handleChange,placeholder:"Tell us about yourself.",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"This will be displayed on your profile page.")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Location:"),l.a.createElement(g.a.Control,{type:"text",name:"location",value:this.state.location,onChange:this.handleChange,placeholder:"Greenville, SC",required:!0})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"}," Birth date:"),l.a.createElement(g.a.Control,{type:"date",name:"birthdate",value:this.state.birthdate,onChange:this.handleChange,placeholder:"mm/dd/yyyy",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"This will not be displayed on your profile page.")),l.a.createElement(g.a.Group,{className:"mb-5"},l.a.createElement(g.a.Label,null,"Upload an Avatar Image"),l.a.createElement(g.a.Control,{type:"file",name:"avatar",onChange:this.handleImage})),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Create Profile")))}}]),t}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={user:"",avatar:null,username:"",bio:"",location:"",birthdate:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("avatar",this.state.avatar),t.append("bio",this.state.bio),t.append("location",this.state.location),t.append("birthdate",this.state.birthdate),console.log(this.state),f.a.patch("".concat("http://localhost:3000","/api/v1/profile/user/"),t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var t=e.target.files[0];this.setState({avatar:t})}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(g.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},l.a.createElement("span",null,"Edit Your Profile")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Bio:"),l.a.createElement(g.a.Control,{as:"textarea",rows:"3",type:"text",name:"bio",value:this.state.bio,onChange:this.handleChange,placeholder:"Tell us about yourself.",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"This will be displayed on your profile page.")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Location:"),l.a.createElement(g.a.Control,{type:"text",name:"location",value:this.state.location,onChange:this.handleChange,placeholder:"Greenville, SC",required:!0})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"}," Birth date:"),l.a.createElement(g.a.Control,{type:"date",name:"birthdate",value:this.state.birthdate,onChange:this.handleChange,placeholder:"mm/dd/yyyy",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"This will not be displayed on your profile page.")),l.a.createElement(g.a.Group,{className:"mb-5"},l.a.createElement(g.a.Label,null,"Upload an Avatar Image"),l.a.createElement(g.a.Control,{type:"file",name:"avatar",onChange:this.handleImage})),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Save Changes")))}}]),t}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("The link was clicked.")}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f.a.post("".concat("http://localhost:3000","/rest-auth/login/"),this.state).then((function(e){console.log("one",e),localStorage.setItem("my-app-user",JSON.stringify(e.data)),t.props.history.push("/profile/user")})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(g.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},"Login"),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Username:"),l.a.createElement(g.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,{className:"Form-label"},"Email:"),l.a.createElement(g.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(g.a.Group,{controlId:"formBasicPassword"},l.a.createElement(g.a.Label,{className:"Form-label"},"Password:"),l.a.createElement(g.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"Don't have an acount? ",l.a.createElement("a",{href:"/signup/"},l.a.createElement("span",{className:"login-Btn SignUp-btn"},"Click here to Sign up.")))),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Login")))}}]),t}(n.Component),x=a(61);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={groups:[],id:"",title:"",description:"",image:null,preview:null,is_public:!0},a.handleDelete=a.handleDelete.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleDelete",value:function(e){var t=this;console.log(this.state.id),f.a.delete("".concat("http://localhost:3000","/api/v1/").concat(e.id)).then((function(a){var n=Object(x.a)(t.state.groups),l=n.indexOf(e);n.splice(l,1),t.setState({groups:n})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("http://localhost:3000","/api/v1/")).then((function(t){console.log(t),e.setState({groups:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"collect ml-5"},l.a.createElement("h3",{className:"mt-5"},"My Collection's"),this.state.groups.map((function(t){return l.a.createElement(y.a,{key:t.id,style:{width:"35rem"}},l.a.createElement(C.a,{bg:"dark",text:"white",className:"mt-5 mr-5"},l.a.createElement(C.a.Img,{src:t.image,variant:"top",alt:"Uploaded content"}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,t.title),l.a.createElement(C.a.Text,null,t.description),l.a.createElement(C.a.Link,{href:"/GroupDetail/".concat(t.id),className:"alert-link"},"View Collection"),l.a.createElement(C.a.Link,{onClick:function(){return e.handleDelete(t)},type:"submit",className:"text-danger"},"Remove"))))})),l.a.createElement(E.a,{href:"/GroupForm",variant:"primary",className:"mt-5 mb-5"},"Create new Collection"))}}]),t}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={profiles:[],avatatar:"",user:"",username:"",bio:"",location:"",birth_date:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("http://localhost:3000","/api/v1/profile/user/")).then((function(t){console.log(t.data),e.setState(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C.a,{bg:"dark",text:"white",className:"mt-5 ml-5",key:this.state.user,style:{width:"18rem"}},l.a.createElement(C.a.Img,{variant:"top",src:this.state.avatar}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,this.state.user.username),l.a.createElement(C.a.Text,null,this.state.bio),l.a.createElement(C.a.Text,{className:"text-muted"},this.state.location),l.a.createElement(C.a.Link,{href:"/profileedit"},"Edit Profile"))),l.a.createElement(O,null))}}]),t}(n.Component),T=a(98);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={beers:[],id:"",name:"",description:"",image:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("http://localhost:3000","/api/v1/").concat(this.props.group,"/")).then((function(t){console.log(t.data.beers),e.setState({beers:t.data.beers})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.beers.map((function(e){return l.a.createElement(T.a,{key:e.id,className:"mt-3 mr-3 beeritem"},l.a.createElement(T.a.Image,{width:120,height:120,alt:"beer",src:e.image}),l.a.createElement(T.a.Caption,{className:"text-white"},e.name))})))}}]),t}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={groups:null,id:"",image:null,title:null,description:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var t=this.props.match.params.id;f.a.get("".concat("http://localhost:3000","/api/v1/").concat(t)).then((function(t){console.log(t.data),e.setState((function(){return t.data}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(y.a,{key:this.state.id,className:"mt-5 col-11"},l.a.createElement(C.a,{className:"bg-dark text-white"},l.a.createElement(C.a.Img,{src:this.state.image,variant:"top",className:"blur"}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null," ",l.a.createElement("h1",null,this.state.title," ")),l.a.createElement(C.a.Text,null,this.state.description),l.a.createElement(C.a.Link,{href:"/GroupUpdate/".concat(this.state.id),className:"alert-link"},"Edit Collection"),l.a.createElement(I,{group:this.props.match.params.id}),l.a.createElement("div",{className:"w-100"}),l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))))}}]),t}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var _=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={title:"",description:"",image:null,is_public:!0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var t=e.target.files[0];this.setState({image:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("title",this.state.title),t.append("description",this.state.description),t.append("image",this.state.image),t.append("is_public",!1),console.log(this.state),f.a.post("".concat("http://localhost:3000","/api/v1/"),t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(g.a,{onSubmit:this.handleSubmit,className:"justify-content-center"},l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,null,"Title"),l.a.createElement(g.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Name of the Collection"})),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(g.a.Label,null,"Description"),l.a.createElement(g.a.Control,{as:"textarea",name:"description",value:this.state.description,onChange:this.handleChange,rows:"3",placeholder:"Short description of the Collection"})),l.a.createElement(g.a.Group,{className:"mb-3"},l.a.createElement(g.a.Label,null,"Upload an Image"),l.a.createElement(g.a.Control,{type:"file",name:"image",onChange:this.handleImage})),l.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(g.a.Check,{type:"switch",id:"custom-switch",label:"Make This Collection Private"})),l.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit")))}}]),t}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={id:"",title:"",description:"",image:null,is_public:!0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var t=e.target.files[0];this.setState({image:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("title",this.state.title),t.append("description",this.state.description),t.append("image",this.state.image),t.append("is_public",!1),console.log(this.state);var a=this.props.match.params.id;f.a.put("".concat("http://localhost:3000","/api/v1/").concat(a,"/"),t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(g.a,{onSubmit:this.handleSubmit,className:"justify-content-center"},l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,null,"Title"),l.a.createElement(g.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Name of the Collection"})),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(g.a.Label,null,"Description"),l.a.createElement(g.a.Control,{as:"textarea",name:"description",value:this.state.description,onChange:this.handleChange,rows:"3",placeholder:"Short description of the Collection"})),l.a.createElement(g.a.Group,{className:"mb-3"},l.a.createElement(g.a.Label,null,"Upload an Image"),l.a.createElement(g.a.Control,{type:"file",name:"image",onChange:this.handleImage})),l.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(g.a.Check,{type:"switch",id:"custom-switch",label:"Make This Collection Private"})),l.a.createElement(E.a,{variant:"primary",type:"submit"},"Save Changes")))}}]),t}(n.Component),B=a(96),D=a(53),G=a(54),q=a(24);function R(){f.a.post("".concat("http://localhost:3000","/rest-auth/logout/")).then((function(e){localStorage.removeItem("my-app-user"),console.log("one",e)})).catch((function(e){console.log(e)}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement((function(){return l.a.createElement(G.a,null,l.a.createElement("div",null,l.a.createElement(B.a,{bg:"dark",variant:"dark",defaultactivekey:"/"},l.a.createElement(B.a.Brand,{href:"/"},"brewSpotter"),l.a.createElement(c.a,{className:"mr-auto"},l.a.createElement(c.a.Link,{href:"/profile/user"},"Profile"),l.a.createElement(c.a.Link,{href:"/signup"},"Create an Account"),l.a.createElement(c.a.Link,{href:"/login"},"Log In"),l.a.createElement(c.a.Link,{onClick:R,href:"/login"},"Log Out")),l.a.createElement(g.a,{inline:!0},l.a.createElement(D.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(E.a,{variant:"outline-primary"},"Search"))),l.a.createElement(q.c,null,l.a.createElement(q.a,{path:"/groupform",component:_}),l.a.createElement(q.a,{path:"/groupupdate/:id",component:F}),l.a.createElement(q.a,{path:"/groupdetail/:id",component:L}),l.a.createElement(q.a,{path:"/grouplist",component:O}),l.a.createElement(q.a,{path:"/profile/:user",component:w}),l.a.createElement(q.a,{path:"/login",component:S}),l.a.createElement(q.a,{path:"/signup",component:v}),l.a.createElement(q.a,{path:"/profilesetup",component:N}),l.a.createElement(q.a,{path:"/profileedit",component:j}),l.a.createElement(q.a,{path:"/",exact:!0,component:k}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.130b869e.chunk.js.map