(this["webpackJsonpreact-mesto"]=this["webpackJsonpreact-mesto"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(17),o=n.n(c),i=n(8),r=n(22),u=n(2),p=n.p+"static/media/header__logo.03b78ada.svg",l=n(3),d=n(0);function j(e){var t=e.loggedIn,n=e.email,a=e.onSignOut;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e",className:"header__logo"}),Object(d.jsxs)("div",{className:"header__login",children:[t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"header__text",children:n}),Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsx)(i.b,{to:"/sign-in",className:"header__button",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"})})]}),Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(i.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(i.b,{to:"/sign-in",className:"header__link",children:"\u0412\u0445\u043e\u0434"})})]})]})}function h(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})}var _=s.a.createContext();function b(e){var t=e.card,n=e.onCardClick,a=e.onCardDelete,c=e.onCardLike,o=s.a.useContext(_),i=t.owner._id===o._id,r="card__button-delete ".concat(i?"card__delete-button_visible":"card__button-delete_hidden"),u=t.likes.some((function(e){return e._id===o._id})),p="card__button-like ".concat(u?"card__button-like_active":"");return Object(d.jsxs)("li",{className:"card",children:[Object(d.jsxs)("div",{className:"card__container",children:[Object(d.jsx)("img",{className:"card__photo",alt:t.name,src:t.link,onClick:function(){n(t)}}),Object(d.jsx)("button",{className:r,onClick:function(){a(t)}})]}),Object(d.jsxs)("div",{className:"card__info",children:[Object(d.jsx)("h2",{className:"card__title",children:t.name}),Object(d.jsxs)("div",{className:"card__container-like",children:[Object(d.jsx)("button",{className:p,type:"button","aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){c(t)}}),Object(d.jsx)("span",{className:"card__count-like",children:t.likes.length})]})]})]})}function m(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,c=e.onCardClick,o=e.cards,i=e.onCardLike,r=e.onCardDelete,u=s.a.useContext(_);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__avatar-container",children:[Object(d.jsx)("img",{className:"profile__avatar",src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(d.jsx)("button",{className:"profile__avatar-button profile__avatar","aria-label":"\u0444\u043e\u0440\u043c\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430",onClick:t})]}),Object(d.jsxs)("div",{className:"profile__intro",children:[Object(d.jsx)("h1",{className:"profile__name",children:u.name}),Object(d.jsx)("button",{className:"profile__button-edit",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:n}),Object(d.jsx)("p",{className:"profile__description",children:u.about})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:a})]}),Object(d.jsx)("section",{className:"cards",children:Object(d.jsx)("ul",{className:"cards__list",children:o.map((function(e){return Object(d.jsx)(b,{card:e,onCardClick:c,onCardLike:i,onCardDelete:r},e._id)}))})})]})}function O(e){return Object(d.jsx)("div",{className:e.isOpen?"popup popup_active":"popup",id:e.name,children:Object(d.jsxs)("form",{className:"popup__container",onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"popup__profile",children:e.title}),e.children,Object(d.jsx)("button",{type:"submit",className:"popup__button",children:e.submitButtonText}),Object(d.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose})]})})}var f=n(20),x=n(21),g=new(function(){function e(t){Object(f.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(x.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._handleOriginalResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleOriginalResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._handleOriginalResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleOriginalResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleOriginalResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleOriginalResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleOriginalResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.firstname,about:e.job})}).then(this._handleOriginalResponse)}},{key:"getInitialItem",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}}]),e}())({baseUrl:"https://api.domainname.mesto.nomoredomains.rocks",headers:{authorization:"7756de4b-55ba-47f8-9f76-db9dfc9e3dd4","Content-Type":"application/json"}}),v="https://api.domainname.mesto.nomoredomains.rocks",N=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};function C(e){var t=e.onClose,n=e.card,a=e.isOpen;return Object(d.jsx)("div",{className:a?"popup popup_active":"popup",id:"open-image",children:Object(d.jsxs)("div",{className:"popup__image-container popup__container_image",children:[Object(d.jsx)("button",{className:"popup__close-button",id:"closeImage",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",onClick:t}),Object(d.jsx)("img",{className:"popup__picture",src:n.link,alt:n.name}),Object(d.jsx)("figcaption",{className:"popup__figcaption",children:n.name})]})})}function k(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,c=s.a.useState(""),o=Object(u.a)(c,2),i=o[0],r=o[1],p=s.a.useState(""),l=Object(u.a)(p,2),j=l[0],h=l[1],b=s.a.useContext(_);return s.a.useEffect((function(){r(b.name),h(b.about)}),[b,t]),Object(d.jsxs)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"profileEdit",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,about:j})},children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_name",id:"input-name",type:"text",placeholder:"\u0418\u043c\u044f",name:"firstname",minLength:"2",maxLength:"40",required:!0,value:i||"",onChange:function(e){r(e.target.value)}}),Object(d.jsx)("span",{className:"popup__input-error input-name-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_job ",id:"input-job",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"job",minLength:"2",maxLength:"200",required:!0,value:j||"",onChange:function(e){h(e.target.value)}}),Object(d.jsx)("span",{className:"popup__input-error input-job-error"})]})}function y(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,c=s.a.useRef();return Object(d.jsxs)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"avatarUpdate",onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value})},isOpen:t,onClose:n,children:[Object(d.jsx)("input",{ref:c,className:"popup__input",type:"url",id:"input-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",required:!0}),Object(d.jsx)("span",{className:"popup__input-error input-avatar-error"})]})}function S(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,c=Object(a.useState)(""),o=Object(u.a)(c,2),i=o[0],r=o[1],p=Object(a.useState)(""),l=Object(u.a)(p,2),j=l[0],h=l[1];return Object(a.useEffect)((function(){h(""),r("")}),[t]),Object(d.jsxs)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",name:"newCard",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:i,link:j})},children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_title",id:"input-title",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",required:!0,onChange:function(e){r(e.target.value)},value:i||""}),Object(d.jsx)("span",{className:"popup__input-error input-title-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_link",id:"input-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,onChange:function(e){h(e.target.value)},value:j||""}),Object(d.jsx)("span",{className:"popup__input-error input-link-error"})]})}function L(e){var t=e.handleAuthorization,n=Object(a.useState)(""),s=Object(u.a)(n,2),c=s[0],o=s[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),p=r[0],l=r[1];return Object(d.jsx)("div",{className:"popup__auth",children:Object(d.jsxs)("form",{className:"popup-form popup-form_auth",onSubmit:function(e){e.preventDefault(),t({password:p,email:c})},children:[Object(d.jsx)("h2",{className:"popup__profile popup__profile_auth",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_login",onChange:function(e){o(e.target.value)},value:c,type:"email",placeholder:"Email",id:"auth-email",required:!0,maxLength:"40",minLength:"1"}),Object(d.jsx)("span",{className:"popup__input-error input-email-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_login",onChange:function(e){l(e.target.value)},value:p,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"auth-password",required:!0,maxLength:"40",minLength:"2"}),Object(d.jsx)("span",{className:"popup__input-error input-password-error"}),Object(d.jsx)("button",{className:"popup__button popup__button_auth",children:"\u0412\u043e\u0439\u0442\u0438"})]})})}function E(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),r=Object(u.a)(o,2),p=r[0],j=r[1];return Object(d.jsx)("div",{className:"popup__auth",children:Object(d.jsxs)("form",{className:"popup-form popup-form_auth",onSubmit:function(t){t.preventDefault(),e.handleRegistration(a,p)},children:[Object(d.jsx)("h2",{className:"popup__profile popup__profile_auth",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_login",onChange:function(e){c(e.target.value)},value:a,type:"email",placeholder:"Email",id:"auth-email",required:!0,maxLength:"40",minLength:"1"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_login",onChange:function(e){j(e.target.value)},value:p,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"auth-password",required:!0,maxLength:"40",minLength:"2"}),Object(d.jsx)("button",{className:"popup__button popup__button_auth",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("p",{className:"popup__login-text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsxs)(i.b,{className:"popup__text-link button",to:"/sign-in",children:[" ","\u0412\u043e\u0439\u0442\u0438"]})})]})]})})}var T=n(23),w=n(24),A=["component"];function P(e){var t=e.component,n=Object(w.a)(e,A);return Object(d.jsx)(l.b,{children:n.loggedIn?Object(d.jsx)(t,Object(T.a)({},n)):Object(d.jsx)(l.a,{to:"/sign-in"})})}var U=n.p+"static/media/success.1b6082f8.svg",I=n.p+"static/media/failed.df8eddf6.svg";function R(e){var t=e.isOpen,n=e.onClose,a=e.isSuccess;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:t?"popup popup_active":"popup",children:Object(d.jsxs)("div",{className:"popup__container popup__container_status",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button",onClick:n}),Object(d.jsx)("img",{className:"popup__image-status",src:"".concat(a?U:I),alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(d.jsx)("h2",{className:"popup__profile popup__profile_status",children:"".concat(a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.")})]})})})}var D=function(){var e=s.a.useState(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],o=s.a.useState(!1),i=Object(u.a)(o,2),p=i[0],b=i[1],f=s.a.useState(!1),x=Object(u.a)(f,2),T=x[0],w=x[1],A=s.a.useState(!1),U=Object(u.a)(A,2),I=U[0],D=U[1],q=s.a.useState([]),B=Object(u.a)(q,2),J=B[0],z=B[1],G=s.a.useState({}),F=Object(u.a)(G,2),H=F[0],M=F[1],K=s.a.useState({link:"",name:""}),Q=Object(u.a)(K,2),V=Q[0],W=Q[1],X=s.a.useState(!1),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)(""),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],se=s.a.useState(!1),ce=Object(u.a)(se,2),oe=ce[0],ie=ce[1],re=s.a.useState(!1),ue=Object(u.a)(re,2),pe=ue[0],le=ue[1],de=Object(l.g)();function je(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(v,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(N)}(e).then((function(e){e.data.email&&(ae(e.data.email),$(!0),de.push("/"))})).catch((function(e){console.log(e)}))}function he(){le(!pe)}function _e(){localStorage.removeItem("jwt"),ae(""),$(!1),de.push("/sign-in")}s.a.useEffect((function(){Promise.all([g.getUserInfo(),g.getCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];M(n),z(a)})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){je()}),[]);var be=function(){c(!1),w(!1),b(!1),D(!1),le(!1),W({link:"",name:""})};return Object(d.jsx)(_.Provider,{value:H,children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(j,{email:ne,loggedIn:Z,onSignOut:_e}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(P,{exact:!0,path:"/",component:m,onEditProfile:function(){c(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){w(!0)},onCardClick:function(e){W(e),D(!I)},cards:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===H._id}));g.setLike(e._id,!t).then((function(t){z((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043b\u0430\u0439\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){g.deleteCard(e._id).then((function(){z(J.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.log(e)}))},loggedIn:Z,logout:_e}),Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(E,{handleRegistration:function(e,t){(function(e,t){return fetch("".concat(v,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(N)})(e,t).then((function(e){e.data&&(ie(!0),he(),de.push("/sign-in"))})).catch((function(e){console.log(e),ie(!1),he()}))}})}),Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(L,{handleAuthorization:function(e){var t=e.email,n=e.password;(function(e){var t=e.password,n=e.email;return fetch("".concat(v,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n,password:t})}).then(N)})({email:t,password:n}).then((function(e){e.token&&(ae(t),$(!0),ie(!0),localStorage.setItem("jwt",e.token),de.push("/"))})).catch((function(e){console.log(e)}))},onCheckToken:je})}),Object(d.jsx)(l.b,{path:"/",children:Z?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)(l.a,{to:"/sign-in"})})]}),Object(d.jsx)(h,{}),Object(d.jsx)(k,{isOpen:n,onClose:be,onUpdateUser:function(e){g.setUserInfo(e).then((function(e){M(e),be()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f: ".concat(e))}))}}),Object(d.jsx)(S,{isOpen:p,onClose:be,onAddPlace:function(e){g.postCard(e).then((function(e){z([e].concat(Object(r.a)(J))),be()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(d.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirmPopup",submitButtonText:"\u0414\u0430",isOpen:!1,onClose:be}),Object(d.jsx)(y,{isOpen:T,onClose:be,onUpdateAvatar:function(e){g.setUserAvatar(e).then((function(e){M(e),be()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(d.jsx)(C,{card:V,onClose:be,isOpen:I}),Object(d.jsx)(R,{isOpen:pe,onClose:be,isSuccess:oe})]})})};n(35);o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(D,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.edd2919e.chunk.js.map