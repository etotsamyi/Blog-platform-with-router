(this.webpackJsonp21block=this.webpackJsonp21block||[]).push([[0],{146:function(e,a,t){e.exports=t(234)},154:function(e,a,t){},155:function(e,a,t){},191:function(e,a,t){},228:function(e,a,t){},229:function(e,a,t){},230:function(e,a,t){},233:function(e,a,t){},234:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),s=t(125),o=t(19),u=t(41),i=(t(154),t(155),t(4)),m=t(36),E=t(31),d=t.n(E),p=t(72),b=t(91),g=t.n(b),f=t(241),h=t(236),v=Object(f.a)("LOGIN_REQUEST"),w=Object(f.a)("LOGIN_SUCCESS"),_=Object(f.a)("LOGIN_FAILURE"),O=Object(f.a)("LOGOUT"),N=Object(f.a)("REGISTER_REQUEST"),S=Object(f.a)("REGISTER_SUCCESS"),k=Object(f.a)("REGISTER_FAILURE"),j=function(){return function(){var e=Object(p.a)(d.a.mark((function e(a){var t,n,r,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(v()),e.prev=1,t=localStorage.getItem("token"),e.next=5,g.a.get("https://conduit.productionready.io/api/user",{headers:{Authorization:"Token ".concat(t)}});case 5:200===(n=e.sent).status&&(r=n.data.user,l=r.username,c=r.token,a(w({username:l,token:c}))),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),a(_()),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}()},y=function(e){return function(){var a=Object(p.a)(d.a.mark((function a(t){var n,r,l,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(v()),a.prev=1,a.next=4,g.a.post("https://conduit.productionready.io/api/users/login",{user:e});case 4:n=a.sent,r=n.data.user,l=r.token,c=r.username,200===n.status&&(h.a.success("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c ".concat(c)),localStorage.setItem("token",l),t(w({username:c,token:l}))),a.next=14;break;case 9:throw a.prev=9,a.t0=a.catch(1),h.a.error("\u041f\u0430\u0440\u0430 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),t(_()),a.t0;case 14:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},I=function(){return function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token"),a(O());case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},x=function(e){return function(){var a=Object(p.a)(d.a.mark((function a(t){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(N()),a.prev=1,a.next=4,g.a.post("https://conduit.productionready.io/api/users",{user:e});case 4:200===a.sent.status&&(h.a.success("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b!"),t(S())),a.next=13;break;case 8:throw a.prev=8,a.t0=a.catch(1),h.a.error("Email \u0438\u043b\u0438 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b!"),t(k()),a.t0;case 13:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},C="/Blog-platform-with-router",T="".concat(C,"/login"),B="".concat(C,"/register"),q="".concat(C,"/articles"),L="".concat(q,"/add"),R=t(29),U=t(239),W=t(108),G=t(237),J=(t(75),t(191),{signin:y});var D=Object(o.b)((function(e){return{username:e.user.username,token:e.user.token,signin:y,userStatus:e.user}}),J)((function(e){var a=e.signin;return r.a.createElement("div",{className:"login-form"},r.a.createElement(R.b,{initialValues:{email:"",password:""},onSubmit:function(e){return a(e)}},(function(e){var a=e.values,t=e.errors,n=e.touched,l=e.handleChange,c=e.handleBlur,s=e.isSubmitting;return r.a.createElement("div",{className:s?"submitting-form":""},r.a.createElement(R.a,{className:"login-form___login"},r.a.createElement("label",null,"Email:",r.a.createElement(U.a,{required:!0,className:t.email&&n.email&&"error",name:"email",onChange:l,onBlur:c,value:a.email})),r.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c:",r.a.createElement(U.a.Password,{required:!0,className:t.password&&n.password&&"error",name:"password",onChange:l,onBlur:c,value:a.password})),r.a.createElement(W.a,{className:"submit-button",type:"primary",htmlType:"submit"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement(G.a,null),r.a.createElement(m.b,{className:"login-form__register",to:B},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))})))})),V=(t(228),t(73)),A=V.a().shape({username:V.b().max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0438\u043c\u044f").required("\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),email:V.b().email("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email").required("\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),password:V.b().min(8,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(40,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")}),X={registerUser:x};var F=Object(o.b)((function(e){return{registerUser:x,registerStatus:e.registerStatus,token:e.user.token}}),X)((function(e){var a=e.registerUser;return"register-success"===e.registerStatus?r.a.createElement(i.a,{to:T}):r.a.createElement("div",{className:"register-form"},r.a.createElement(R.b,{initialValues:{username:"",email:"",password:""},validationSchema:A,onSubmit:function(e){!function(e){a(e)}(e)}},(function(e){var a=e.values,t=e.errors,n=e.touched,l=e.handleChange,c=e.handleBlur,s=e.isSubmitting;return r.a.createElement("div",{className:s?"submitting-form":""},r.a.createElement(R.a,{className:"register-form___registration"},r.a.createElement("label",null,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:",r.a.createElement(U.a,{className:t.username&&n.username&&"error",required:!0,name:"username",onChange:l,onBlur:c,value:a.username})),r.a.createElement("label",null,"Email:",r.a.createElement(U.a,{className:t.email&&n.email&&"error",required:!0,name:"email",onChange:l,onBlur:c,value:a.email})),t.email&&n.email&&r.a.createElement("div",{className:"input-error"},t.email),r.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c:",r.a.createElement(U.a.Password,{className:t.password&&n.password&&"error",required:!0,name:"password",onChange:l,onBlur:c,value:a.password}),t.password&&n.password&&r.a.createElement("div",{className:"input-error"},t.password)),r.a.createElement(W.a,{className:"submit-button",type:"primary",htmlType:"submit"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement(G.a,null),r.a.createElement(m.b,{className:"register-form__signin",as:W.a,to:T},"\u0412\u043e\u0439\u0442\u0438"))})))})),M=t(240),P=t(244),Q=t(242),z=t(243),$=(t(229),{signout:I});var H=Object(o.b)((function(e){return{userName:e.user.username,loggedIn:e.loggedIn,signout:I}}),$)((function(e){var a=e.userName,t=e.signout;return r.a.createElement("header",{className:"header"},r.a.createElement("div",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",r.a.createElement(Q.a,null),a),r.a.createElement(W.a,{className:"header__logout",onClick:t,to:C},r.a.createElement(z.a,null)," \u0412\u044b\u0439\u0442\u0438"))}));t(230);var K=function(e){var a=function(e,a){return r.a.createElement("div",{className:"main__wall__post"},r.a.createElement("h3",null,e),r.a.createElement("p",null,a))};return r.a.createElement("div",{className:"main"},r.a.createElement(H,null),r.a.createElement("div",{className:"main__wall"},r.a.createElement(m.b,{to:L,className:"main__wall__create"},r.a.createElement(P.a,null),"\u0421\u041e\u0417\u0414\u0410\u0422\u042c"),a("\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044e","\u041f\u043e\u0441\u0442\u044b"),a("\u041e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445","\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0441 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c, \u0430 \u0437\u0430\u0442\u0435\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435 \u0438\u0445 \u0432 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b. \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043b\u043e\u0433\u0438\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0430 \u043d\u0430 JavaScript, \u0430 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 \u0448\u0430\u0431\u043b\u043e\u043d\u0430\u0445, \u043c\u043e\u0436\u043d\u043e \u0441 \u043b\u0451\u0433\u043a\u043e\u0441\u0442\u044c\u044e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0430\u043c\u044b\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0438 \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u043d\u0435 DOM."),a("\u041e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445","\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0441 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c, \u0430 \u0437\u0430\u0442\u0435\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435 \u0438\u0445 \u0432 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b. \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043b\u043e\u0433\u0438\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0430 \u043d\u0430 JavaScript, \u0430 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 \u0448\u0430\u0431\u043b\u043e\u043d\u0430\u0445, \u043c\u043e\u0436\u043d\u043e \u0441 \u043b\u0451\u0433\u043a\u043e\u0441\u0442\u044c\u044e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0430\u043c\u044b\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0438 \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u043d\u0435 DOM.")),r.a.createElement(M.a,null))};t(233);var Y=Object(o.b)((function(e){return{userName:e.user.username,loggedIn:e.loggedIn,signout:I}}),{})((function(e){return r.a.createElement("div",{className:"main"},r.a.createElement(H,null),r.a.createElement(R.b,{initialValues:{title:"",description:"",body:"",tagList:""},onSubmit:function(){return null}},(function(e){var a=e.values,t=(e.errors,e.touched,e.handleChange),n=e.handleBlur,l=e.isSubmitting;return r.a.createElement("div",{className:l?"submitting-form":""},r.a.createElement(R.a,{className:"login-form___login"},r.a.createElement("label",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a:",r.a.createElement(U.a,{required:!0,className:"title",name:"title",onChange:t,onBlur:n,value:a.title})),r.a.createElement("label",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",r.a.createElement(U.a,{required:!0,className:"description",name:"description",onChange:t,onBlur:n,value:a.description})),r.a.createElement("label",null,"\u0421\u0442\u0430\u0442\u044c\u044f:",r.a.createElement(U.a,{className:"tagList",name:"tagList",onChange:t,onBlur:n,value:a.tagList})),r.a.createElement("label",null,"\u0422\u0435\u0433\u0438:",r.a.createElement(U.a,{required:!0,className:"body",name:"body",onChange:t,onBlur:n,value:a.body}))))})))})),Z={loginWithJWT:j};var ee,ae,te=Object(o.b)((function(e){return{username:e.user.username,token:e.user.token,loginWithJWT:j,userStatus:e.user,registerStatus:e.registerStatus}}),Z)((function(e){var a=e.loginWithJWT,t=e.token,n=localStorage.getItem("token");return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:C},n||t?n&&!t?(a(n),r.a.createElement(i.a,{to:q})):r.a.createElement(i.a,{to:q}):r.a.createElement(i.a,{to:T})),r.a.createElement(i.b,{path:T,exact:!0,component:D},n?r.a.createElement(i.a,{to:q}):null),r.a.createElement(i.b,{path:B,exact:!0,component:F},n?r.a.createElement(i.a,{to:q}):null),r.a.createElement(i.b,{path:q,exact:!0,component:K},n?null:r.a.createElement(i.a,{to:T})),r.a.createElement(i.b,{path:L,exact:!0,component:Y},n?null:r.a.createElement(i.a,{to:T})),r.a.createElement(i.b,{path:"*",component:function(){return"404 \u0422\u0410\u041a\u041e\u0419 \u0421\u0422\u0420\u0410\u041d\u0418\u0426\u042b \u041d\u0415 \u0421\u0423\u0429\u0415\u0421\u0422\u0412\u0423\u0415\u0422!"}}))))})),ne=t(46),re=t(238),le=Object(re.a)((ee={},Object(ne.a)(ee,v,(function(e){return"requested"})),Object(ne.a)(ee,w,(function(e,a){return a.payload})),Object(ne.a)(ee,_,(function(e){return"error"})),Object(ne.a)(ee,O,(function(e){return{}})),ee),{}),ce=Object(re.a)((ae={},Object(ne.a)(ae,N,(function(e){return"requested"})),Object(ne.a)(ae,S,(function(e){return"register-success"})),Object(ne.a)(ae,k,(function(e){return"register-error"})),ae),{}),se=Object(u.c)({user:le,registerStatus:ce});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(u.e)(se,Object(u.d)(Object(u.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(o.a,{classname:"store",store:oe},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.423b3c24.chunk.js.map