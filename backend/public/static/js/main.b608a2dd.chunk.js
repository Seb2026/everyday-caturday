(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(20),r=n.n(s),c=(n(45),n(2)),i=n(4),o=n(5),l=n(7),j=n(6),d=(n(46),n(21)),h=n.n(d),u=n(38),b=n(3),p=n.n(b),O=n(39),g=(n(73),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{class:"carousel-wrapper",children:Object(g.jsx)("div",{class:"centerCarousel",children:Object(g.jsxs)(O.Carousel,{infiniteLoop:!0,autoPlay:!0,showThumbs:!1,showStatus:!1,width:"300px",children:[Object(g.jsx)("div",{className:"carouselImgs",children:Object(g.jsx)("img",{src:"../images/Mao1a.jpg",alt:"Mao"})}),Object(g.jsx)("div",{className:"carouselImgs",children:Object(g.jsx)("img",{src:"../images/Mao2.jpg",alt:"Mao"})}),Object(g.jsx)("div",{className:"carouselImgs",children:Object(g.jsx)("img",{src:"../images/Mao3.jpg",alt:"Mao"})}),Object(g.jsx)("div",{className:"carouselImgs",children:Object(g.jsx)("img",{src:"../images/Mao4.jpg",alt:"Mao"})})]})})})}}]),n}(a.Component),x=n(8),f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.thecatapi.com/v1/breeds?key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_KEY:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com"}).xapikey));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"content",children:[Object(g.jsxs)("h1",{children:["Every Day is",Object(g.jsx)("br",{}),"Caturday"]}),Object(g.jsx)("div",{className:"content",children:Object(g.jsx)(m,{})}),Object(g.jsx)("p",{className:"content-text",children:"Studies have shown that cats have a calming effect on their owners, from the soothing action of petting to purring being an aid in falling asleep. Cat owners can reduce tensions by just stroking their furry friend\u2019s head. Petting a cat releases endorphins into the brain, which makes you happier. Also, cats have the softest fur! Cats can even play a part in lowering your blood pressure and risk of a heart attack. One 10-year study has even shown that cat owners were 30% less likely to die of a heart attack or stroke than non-cat owners."}),Object(g.jsx)("h2",{children:Object(g.jsx)(x.b,{to:"/petFinderSearch",children:"Adopt a Cat Today!"})})]})}}]),n}(a.Component),v=n(11),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={cats:[],filteredCats:[],image:""},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.search=function(t){var n=e.state.cats.filter((function(e){if(e.name.toLowerCase().includes(t.target.value.toLowerCase())||e.description.toLowerCase().includes(t.target.value.toLowerCase())||e.temperament.toLowerCase().includes(t.target.value.toLowerCase()))return e}));e.setState({filteredCats:n})},e.allCats=function(){return e.state.filteredCats.map((function(e){var t;return Object(g.jsx)("div",{children:Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"cat",children:[Object(g.jsx)("img",{src:null===(t=e.image)||void 0===t?void 0:t.url,alt:" unavailable",width:"200vw"}),Object(g.jsx)("br",{}),Object(g.jsx)(x.b,{to:"/cat-detail/".concat(e.id),children:Object(g.jsx)("h3",{children:e.name})})]})},e._id)})}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.thecatapi.com/v1/breeds?key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_KEY:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com"}).xapikey)).then((function(t){e.setState({cats:t.data,filteredCats:t.data}),p.a.get("https://api.thecatapi.com/v1/images/search?breed_id=".concat(e.props.match.params.id)).then((function(t){e.setState({image:t.data[0].url})})).catch((function(e){return console.log(e)}))}))}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Cat Breeds"}),Object(g.jsxs)("label",{children:["Search by breed, temperament, general keywords",Object(g.jsx)("br",{}),Object(g.jsx)("input",{onChange:this.search,name:"search",placeholder:"\ud83d\udd0e",type:"text"})]}),Object(g.jsx)("div",{className:"cat-grid",children:this.allCats()})]})}}]),n}(a.Component),S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={catDetails:{},image:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.thecatapi.com/v1/breeds/".concat(this.props.match.params.id,"?key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_KEY:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com"}).xapikey)).then((function(t){e.setState({catDetails:t.data})})),p.a.get("https://api.thecatapi.com/v1/images/search?breed_id=".concat(this.props.match.params.id)).then((function(t){e.setState({image:t.data[0].url})})).catch((function(e){return console.log(e)}))}},{key:"colorRatings",value:function(e){for(var t=[],n=0;n<5;n++)e>0?t.push(Object(g.jsx)("div",{className:"brown-bg"},n)):t.push(Object(g.jsx)("div",{className:"no-bg"},n)),--e;return t}},{key:"render",value:function(){var e=this.state.hypoallergenic;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{children:["About ",this.state.catDetails.name," Cats"]}),Object(g.jsx)("img",{className:"cat-img",src:this.state.image,alt:"unavailable"}),Object(g.jsx)("p",{children:this.state.catDetails.name}),Object(g.jsx)("p",{children:this.state.catDetails.description}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"attributes",children:"Temperament:"})," ",this.state.catDetails.temperament]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"attributes",children:"Hypoallergenic:"})," ",e?"Yes":"No"]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"attributes",children:"Affection Level:"})," ",this.colorRatings(this.state.catDetails.affection_level).map((function(e,t){return e}))]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"attributes",children:"Energy Level:"}),this.colorRatings(this.state.catDetails.energy_level).map((function(e,t){return e}))]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"attributes",children:"Child Friendly:"})," ",this.colorRatings(this.state.catDetails.child_friendly).map((function(e,t){return e}))]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"attributes",children:"Dog Friendly:"})," ",this.colorRatings(this.state.catDetails.dog_friendly).map((function(e,t){return e}))]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"attributes",children:"Stranger Friendly:"})," ",this.colorRatings(this.state.catDetails.stranger_friendly).map((function(e,t){return e}))]}),Object(g.jsxs)("p",{children:["You can find additional information on ",this.state.catDetails.name," ","cats"," ",Object(g.jsx)("a",{href:this.state.catDetails.wikipedia_url,target:"_blank",rel:"noreferrer",children:"here"}),"."]})]})}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",age:"",breed:"",story:"",imageUrl:"",listOfStories:[],loggedInUser:null,hidden:!0},e.deleteStory=function(t){p.a.delete("http://localhost:5000/api/rescue-story/delete/".concat(t)).then((function(){console.log("deleted frontend")})).catch((function(e){return console.log(e)})),e.props.history.push("/")},e.showAllStories=function(){return e.state.listOfStories.map((function(e){return Object(g.jsxs)("div",{className:"cat",children:[Object(g.jsx)("img",{className:"rescueImg",src:e.imageUrl,alt:"Cat Pic"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Name:"})," ",e.name,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Age:"})," ",e.age,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Breed:"})," ",e.breed,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Story:"})," ",e.story,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Made by:"})," ",e.userId.username,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{})]},e._id)}))},e.handleSubmit=function(t){t.preventDefault(),p.a.post("http://localhost:5000/api/rescue-story",e.state,{withCredentials:!0}),e.props.history.push("/")},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleFileChange=function(e){var t=e.target.files[0];console.log("Image file",t)},e.showForm=function(){e.setState({hidden:!e.state.hidden})},e}return Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{loggedInUser:e.userInSession}))}},{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/api/rescue-story").then((function(t){e.setState({listOfStories:t.data})}))}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Rescue Stories"}),this.state.loggedInUser&&Object(g.jsx)("button",{onClick:this.showForm,children:"Add story"}),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,hidden:this.state.hidden,children:[Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"name",placeholder:"Cat's Name"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",name:"age",placeholder:"Age"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"breed",placeholder:"Breed"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Tell your cat's story:"}),Object(g.jsx)("br",{}),Object(g.jsx)("textarea",{onChange:this.handleChange,name:"story",cols:"80",rows:"10"}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Show off your beautiful Furbaby!"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"file",name:"imageUrl",onChange:this.handleFileChange}),Object(g.jsx)("button",{children:"Submit"})]}),Object(g.jsx)("p",{className:"cat-grid",children:this.showAllStories()})]})}}]),n}(a.Component),w=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,n,a,s,r,c){return t.service.post("/signup",{username:e,password:n,firstName:a,lastName:s,location:r,email:c}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout",{}).then((function(e){return e.data}))};var n=p.a.create({baseURL:"http://localhost:5000/api",withCredentials:!0});this.service=n},N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",firstName:"",lastName:"",email:"",location:"",errorStatus:!1,errorMsg:""},e.service=new w,e.handleFormSubmit=function(t){t.preventDefault();var n=e.state.username,a=e.state.password,s=e.state.firstName,r=e.state.lastName,c=e.state.location,i=e.state.email;e.service.signup(n,a,s,r,c,i).then((function(t){e.setState({username:"",password:"",firstName:"",lastName:"",location:"",email:""}),e.props.getUser(t)})).catch((function(t){t.response&&e.setState({errorStatus:!0,errorMsg:t.response.data.message})}))},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(v.a)({},a,s))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.errorStatus;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Sign Up"}),Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:" First Name: "}),Object(g.jsx)("input",{type:"text",name:"firstName",value:this.state.firstName,required:!0,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:" Last Name: "}),Object(g.jsx)("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:" Location: "}),Object(g.jsx)("input",{type:"text",name:"location",value:this.state.location,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:" Email: "}),Object(g.jsx)("input",{type:"email",name:"email",required:!0,value:this.state.email,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:Object(g.jsx)("label",{children:"Create your Login"})}),Object(g.jsx)("label",{children:" Username: "}),Object(g.jsx)("input",{type:"text",name:"username",required:!0,value:this.state.username,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:" Password: "}),Object(g.jsx)("input",{name:"password",type:"password",required:!0,value:this.state.password,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("p",{children:Object(g.jsx)("button",{children:"Sign Up"})})]}),t?Object(g.jsx)("p",{className:"error",children:this.state.errorMsg}):Object(g.jsx)("p",{children:"\xa0"}),Object(g.jsxs)("p",{children:["Already have account?",Object(g.jsx)(x.b,{to:"/login",children:" Login"})]})]})}}]),n}(a.Component),_=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loggedInUser:null,listOfUserStories:[],editedName:"",editedBreed:"",editedAge:"",editedStory:"",username:"",firstName:"",lastName:"",location:"",hidden:!0},e.showAllStories=function(){return e.state.listOfUserStories.map((function(t){if(t.userId._id===e.state.loggedInUser._id)return Object(g.jsxs)("div",{className:"cat",children:[Object(g.jsx)("img",{className:"rescueImg",src:t.imageUrl,alt:"Cat Pic"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Name:"})," ",t.name,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Age:"})," ",t.age,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Breed:"})," ",t.breed,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Story:"})," ",t.story,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attributes",children:"Made by:"})," ",t.userId.username,Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(){return e.deleteStory(t._id)},children:"Delete"}),Object(g.jsx)("br",{}),Object(g.jsx)(x.b,{to:"/edit/".concat(t._id),children:Object(g.jsx)("button",{children:"Edit"})})]},t._id)}))},e.deleteStory=function(e){p.a.delete("http://localhost:5000/api/rescue-story/delete/".concat(e)).then((function(){console.log("deleted frontend")})).catch((function(e){return console.log(e)})),window.location.reload(!1)},e.editStory=function(t){var n=e.state.editedName,a=e.state.editedBreed,s=e.state.editedAge,r=e.state.editedStory;p.a.put("http://localhost:5000/api/rescue-story/edit/".concat(t),{name:n,breed:a,age:s,story:r}).then((function(){e.props.history.push("/rescueStories")})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),p.a.put("http://localhost:5000/api/edit-user/".concat(e.props.match.params.id),e.state,{withCredentials:!0})},e.showForm=function(){e.setState({hidden:!e.state.hidden})},e.editProfileForm=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:e.showForm,children:"Update personal info"}),Object(g.jsxs)("form",{onSubmit:e.handleSubmit,hidden:e.state.hidden,children:[Object(g.jsxs)("label",{children:["Username:",Object(g.jsx)("input",{className:"username",value:e.state.username,name:"username",type:"text",readOnly:!0})]}),Object(g.jsxs)("label",{children:["First name:",Object(g.jsx)("input",{onChange:e.handleChange,value:e.state.firstName,name:"firstName",type:"text"})]}),Object(g.jsxs)("label",{children:["Last name:",Object(g.jsx)("input",{onChange:e.handleChange,value:e.state.lastName,name:"lastName",type:"text"})]}),Object(g.jsxs)("label",{children:["Location:",Object(g.jsx)("input",{onChange:e.handleChange,value:e.state.location,name:"location",type:"text"})]}),Object(g.jsx)("button",{onClick:function(){return window.location.reload(!1)},children:"Update"})]})]})},e}return Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{loggedInUser:e.userInSession}))}},{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/api/rescue-story").then((function(t){e.setState({listOfUserStories:t.data,loggedInUser:e.props.userInSession?e.props.userInSession:null})})),p.a.get("http://localhost:5000/api/profile/".concat(this.props.match.params.id)).then((function(t){e.setState({username:t.data.username,firstName:t.data.firstName,lastName:t.data.lastName,location:t.data.location})}))}},{key:"render",value:function(){return this.state.loggedInUser?Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Profile"}),this.editProfileForm(),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"cat-grid",children:this.showAllStories()})]}):Object(g.jsx)("div",{children:"\xa0"})}}]),n}(a.Component),U=n(9),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",errorStatus:!1,errorMsg:""},e.service=new w,e.handleFormSubmit=function(t){t.preventDefault();var n=e.state.username,a=e.state.password;e.service.login(n,a).then((function(t){e.setState({username:"",password:""}),e.props.getUser(t),e.props.history.push("/profile/".concat(t._id))})).catch((function(t){t.response&&e.setState({errorStatus:!0,errorMsg:t.response.data.message})}))},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(v.a)({},a,s))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.errorStatus;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:" Username: "}),Object(g.jsx)("input",{type:"text",name:"username",onChange:function(t){return e.handleChange(t)},value:this.state.username}),Object(g.jsx)("label",{children:" Password: "}),Object(g.jsx)("input",{name:"password",type:"password",onChange:function(t){return e.handleChange(t)},value:this.state.password}),Object(g.jsx)("input",{type:"submit",value:"Login"})]}),t?Object(g.jsx)("p",{className:"error",children:this.state.errorMsg}):Object(g.jsx)("p",{children:"\xa0"}),Object(g.jsxs)("p",{children:["Don't have account?",Object(g.jsx)(x.b,{to:"/signup",children:" Signup"})]})]})}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={location:"",rescueCats:[]},e.giveData=function(){var t=e.state.location;fetch("https://api.petfinder.com/v2/oauth2/token",{method:"POST",body:"grant_type=client_credentials&client_id=Ww2Mo8xNzXhbFxBtwEN3er2rnOqCUAmamXIQ1AhdCA0Yd4ueb1&client_secret=EkIYCERn1x0yevjN5f1VPwEXgaP7pNQ07s3bBBG7",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(e){return fetch("https://api.petfinder.com/v2/animals?type=cat&status=adoptable&location="+t,{headers:{Authorization:e.token_type+" "+e.access_token,"Content-Type":"application/x-www-form-urlencoded"}})})).then((function(e){return e.json()})).then((function(t){e.setState({rescueCats:t.animals})})).catch((function(e){console.log("something went wrong",e)}))},e.handleSubmit=function(t){t.preventDefault(),e.giveData()},e.handleLocation=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.allAvailableRescueCats=function(){return e.state.rescueCats.map((function(e){var t;return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"cat",children:[e.primary_photo_cropped?Object(g.jsx)("img",{src:null===(t=e.primary_photo_cropped)||void 0===t?void 0:t.small,alt:" unavailable",width:"200vw"}):Object(g.jsx)("img",{src:"../images/home-is-where-the-cat-is.jpg",alt:"Home is where the cat is"}),Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]})},e._id)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Adopt Your Own Cat Today!"}),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{type:"text",name:"location",placeholder:"City or Zip Code",onChange:this.handleLocation}),Object(g.jsx)("button",{type:"submit",children:"Search"})]}),Object(g.jsx)("div",{className:"cat-grid",children:this.allAvailableRescueCats()})]})}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loggedInUser:null,editedName:"",editedBreed:"",editedAge:"",editedStory:"",story:{}},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){var n=e.props.match.params,a=e.state.editedName,s=e.state.editedBreed,r=e.state.editedAge,c=e.state.editedStory;t.preventDefault(),p.a.put("http://localhost:5000/api/edit/".concat(n.id),{name:a,breed:s,age:r,story:c}).then((function(){e.props.history.push("/profile/".concat(e.props.userInSession._id))})).catch((function(e){return console.log(e)}))},e.showForm=function(){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsxs)("label",{children:["Name:",Object(g.jsx)("input",{type:"text",onChange:e.handleChange,name:"editedName",value:e.state.editedName})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Breed:",Object(g.jsx)("input",{type:"text",onChange:e.handleChange,name:"editedBreed",value:e.state.editedBreed})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Age:",Object(g.jsx)("input",{type:"number",onChange:e.handleChange,name:"editedAge",value:e.state.editedAge})]}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Tell your cat's story:"}),Object(g.jsx)("br",{}),Object(g.jsx)("textarea",{type:"text",onChange:e.handleChange,name:"editedStory",value:e.state.editedStory,cols:"80",rows:"10"}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{children:"Save"})]})},e}return Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{loggedInUser:e.userInSession}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;p.a.get("http://localhost:5000/api/editstory/".concat(t.id)).then((function(t){e.setState({loggedInUser:e.props.userInSession?e.props.userInSession:null,editedName:t.data.name,editedBreed:t.data.breed,editedAge:t.data.age,editedStory:t.data.story})})).catch((function(e){return console.log(e.response.data)})),console.log(this.props)}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Edit Your Profile"}),this.showForm()]})}}]),n}(a.Component),E=p.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_KEY:"956237608940-rkcol4ero2rjnoitf08okr0nbkvjjgq8.apps.googleusercontent.com"}).REACT_APP_SERVER_URL}),D=function(e){throw e};function T(e){return E.post("/upload",e).then((function(e){return e.data})).catch(D)}var F=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loggedInUser:null,name:"",age:"",breed:"",story:"",imageUrl:""},e.handleSubmit=function(t){t.preventDefault(),p.a.post("http://localhost:5000/api/rescue-story",e.state,{withCredentials:!0}).then((function(){e.props.history.push("/rescueStories")})).catch((function(e){console.log("Error while adding the thing: ",e.response.data)}))},e.handleFileUpload=function(t){var n=new FormData;n.append("imageUrl",t.target.files[0]),T(n).then((function(t){e.setState({imageUrl:t.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e}return Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{loggedInUser:e.userInSession})),console.log(this.state.loggedInUser)}},{key:"componentDidMount",value:function(){this.setState({loggedInUser:this.props.userInSession?this.props.userInSession:null}),console.log(this.state)}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Add Your Cat's Story"}),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"name",placeholder:"Cat's Name"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{onChange:this.handleChange,type:"number",name:"age",placeholder:"Age"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("input",{onChange:this.handleChange,type:"text",name:"breed",placeholder:"Breed"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Tell your cat's story:"}),Object(g.jsx)("br",{}),Object(g.jsx)("textarea",{onChange:this.handleChange,name:"story",cols:"80",rows:"10"}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Show off your beautiful Furbaby!"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),Object(g.jsx)("button",{children:"Submit"})]})]})}}]),n}(a.Component),P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loggedInUser:null},e.service=new w,e.getTheUser=function(t){e.setState({loggedInUser:t})},e.logoutUser=function(){console.log("appjs"),e.service.logout().then((function(){e.setState({loggedInUser:null})}))},e}return Object(o.a)(n,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?Object(g.jsxs)("div",{children:[Object(g.jsxs)("nav",{children:[Object(g.jsx)(x.b,{to:"/",children:"Home"}),Object(g.jsx)(x.b,{to:"/cat-list",children:"Cats"}),Object(g.jsx)(x.b,{to:"/rescueStories",children:"RescueStories"}),Object(g.jsx)(x.b,{to:"/addstory",children:"Add Story"}),Object(g.jsx)(x.b,{to:"/profile/".concat(this.state.loggedInUser._id),children:"Profile"}),Object(g.jsx)(x.b,{to:"/",children:Object(g.jsx)("button",{onClick:this.logoutUser,children:"Logout "})})]}),Object(g.jsxs)(U.c,{children:[Object(g.jsx)(U.a,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(f,Object(c.a)({},e))}}),Object(g.jsx)(U.a,{exact:!0,path:"/cat-list",render:function(e){return Object(g.jsx)(y,Object(c.a)({},e))}}),Object(g.jsx)(U.a,{exact:!0,path:"/cat-detail/:id",render:function(e){return Object(g.jsx)(S,Object(c.a)({},e))}}),Object(g.jsx)(U.a,{exact:!0,path:"/signup",render:function(t){return Object(g.jsx)(N,Object(c.a)({getUser:e.getTheUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/login",render:function(t){return Object(g.jsx)(k,Object(c.a)({getUser:e.getTheUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/rescueStories",render:function(t){return Object(g.jsx)(C,Object(c.a)({userInSession:e.state.loggedInUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/addstory",render:function(t){return Object(g.jsx)(F,Object(c.a)({userInSession:e.state.loggedInUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/profile/:id",render:function(t){return Object(g.jsx)(_,Object(c.a)({userInSession:e.state.loggedInUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/edit/:id",render:function(t){return Object(g.jsx)(A,Object(c.a)({userInSession:e.state.loggedInUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/petFinderSearch",render:function(e){return Object(g.jsx)(I,Object(c.a)({},e))}}),Object(g.jsx)(U.a,{exact:!0,path:"/carousel",render:function(e){return Object(g.jsx)(m,Object(c.a)({},e))}})]})]}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("nav",{children:[Object(g.jsx)("img",{src:"./images/catIcon.png",alt:"catLogo"}),Object(g.jsx)(x.b,{to:"/",children:"Home"}),Object(g.jsx)(x.b,{to:"/cat-list",children:"Cats"}),Object(g.jsx)(x.b,{to:"/rescueStories",children:"RescueStories"}),Object(g.jsx)(x.b,{to:"/login",children:"Login/Signup"})]}),Object(g.jsxs)(U.c,{children:[Object(g.jsx)(U.a,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(f,Object(c.a)({},e))}}),Object(g.jsx)(U.a,{exact:!0,path:"/cat-list",render:function(e){return Object(g.jsx)(y,Object(c.a)({},e))}}),Object(g.jsx)(U.a,{exact:!0,path:"/edit/:id",render:function(t){return Object(g.jsx)(A,Object(c.a)({userInSession:e.state.loggedInUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/cat-detail/:id",render:function(e){return Object(g.jsx)(S,Object(c.a)({},e))}}),Object(g.jsx)(U.a,{exact:!0,path:"/signup",render:function(t){return Object(g.jsx)(N,Object(c.a)({getUser:e.getTheUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/login",render:function(t){return Object(g.jsx)(k,Object(c.a)({getUser:e.getTheUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/rescueStories",render:function(t){return Object(g.jsx)(C,Object(c.a)({userInSession:e.state.loggedInUser},t))}}),Object(g.jsx)(U.a,{exact:!0,path:"/petFinderSearch",render:function(e){return Object(g.jsx)(I,Object(c.a)({},e))}}),Object(g.jsx)(U.a,{exact:!0,path:"/profile",render:function(t){return Object(g.jsx)(_,Object(c.a)({user:e.state.user,setUser:e.setUser},t))}})]})]})}}]),n}(a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};r.a.render(Object(g.jsx)(x.a,{children:Object(g.jsx)(P,{})}),document.getElementById("root")),R()}},[[78,1,2]]]);
//# sourceMappingURL=main.b608a2dd.chunk.js.map