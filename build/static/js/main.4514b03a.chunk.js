(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(33),c=n.n(s),i=n(11),o=n(12),r=n(8),u=n(13),l=n(14),h=n(2),d=n(17),j=n.n(d),b=n(34),O=(n(58),n(1)),g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={username:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(r.a)(a)),a.handleChange=a.handleChange.bind(Object(r.a)(a)),a}return Object(o.a)(n,[{key:"handleSubmit",value:function(){var t=this,e=this.state,n=e.username,a=e.password;j.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/signin"),{username:n,password:a},{withCredentials:!0}).then((function(e){localStorage.setItem("accessToken",e.data),t.props.handleStatus()})).catch((function(e){t.setState({username:"",password:""}),401===e.response.status&&alert("\uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub97c \uc815\ud655\ud788 \uc785\ub825\ud574\uc8fc\uc138\uc694!")}))}},{key:"handleChange",value:function(t){this.setState(Object(b.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"form-container",children:Object(O.jsxs)("form",{className:"form-items",onSubmit:function(t){return t.preventDefault()},children:[Object(O.jsx)("div",{className:"login",children:"Login"}),Object(O.jsx)("input",{type:"text",name:"username",placeholder:"\uc774\ub984",value:this.state.username,onChange:this.handleChange}),Object(O.jsx)("input",{type:"password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange}),Object(O.jsx)("button",{type:"submit",onClick:this.handleSubmit,children:"\ub85c\uadf8\uc778"})]})})}}]),n}(a.Component),m=Object(h.g)(g),p=(n(68),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleLogout=a.handleLogout.bind(Object(r.a)(a)),a}return Object(o.a)(n,[{key:"handleLogout",value:function(){localStorage.removeItem("accessToken"),this.props.changeLoginStatus()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"main-container",children:[Object(O.jsx)("div",{className:"session",children:"\ud1a0\ud070\uc744 \uc815\uc0c1\uc801\uc73c\ub85c \ubc1b\uc558\uc2b5\ub2c8\ub2e4"}),Object(O.jsx)("div",{className:"db",children:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uc138\uc694"}),Object(O.jsx)("button",{type:"submit",onClick:this.handleLogout,children:"\ub85c\uadf8\uc544\uc6c3"})]})}}]),n}(a.Component)),S=(n(69),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={isLogin:!1,status:""},a.handleStatus=a.handleStatus.bind(Object(r.a)(a)),a.changeLoginStatus=a.changeLoginStatus.bind(Object(r.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleStatus()}},{key:"handleStatus",value:function(){var t=this;j.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/status"),{withCredentials:!0,headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}}).then((function(e){t.setState({isLogin:e.data.isLogin,status:e.data.isConnectedToDatabase},(function(){console.log("\uc2dc\uc791"),t.props.history.push("/")}))})).catch((function(t){return console.log(t)}))}},{key:"changeLoginStatus",value:function(){var t=this;this.setState({isLogin:!1,status:""},(function(){t.props.history.push("/")}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.isLogin,a=e.status;return Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)("div",{className:"container",children:[n?Object(O.jsx)("div",{className:"success",children:"\ub85c\uadf8\uc778\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4"}):Object(O.jsx)("div",{className:"status",children:"\uc774\ub984\uc5d0\ub294 \uae40\ucf54\ub529,\ube44\ubc00\ubc88\ud638\uc5d0\ub294 1234\ub9cc \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4"}),n?a?Object(O.jsx)("div",{className:"success",children:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4"}):Object(O.jsx)("div",{className:"fail",children:"\ud558\uc9c0\ub9cc, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"}):"",Object(O.jsxs)(h.d,{children:[Object(O.jsx)(h.b,{exact:!0,path:"/main",render:function(){return Object(O.jsx)(p,{changeLoginStatus:t.changeLoginStatus})}}),Object(O.jsx)(h.b,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(m,{handleStatus:t.handleStatus})}}),Object(O.jsx)(h.b,{path:"/",render:function(){return n?Object(O.jsx)(h.a,{to:"/main"}):Object(O.jsx)(h.a,{to:"/login"})}})]})]})})}}]),n}(a.Component)),v=Object(h.g)(S),f=n(15);n(70).config(),c.a.render(Object(O.jsx)(f.a,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.4514b03a.chunk.js.map