(this["webpackJsonpfirebase-authentication"]=this["webpackJsonpfirebase-authentication"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n.n(c),i=n(30),s=n.n(i),o=n(13),r=n(23);n(37);r.a.initializeApp({apiKey:"AIzaSyDfHP3eJlFVpKEaDKybEuAagVIaborbLFo",authDomain:"fir-auth-91078.firebaseapp.com",projectId:"fir-auth-91078",storageBucket:"fir-auth-91078.appspot.com",messagingSenderId:"776439763445",appId:"1:776439763445:web:dcd2bde383e616ec2390bc"});var u=r.a.auth(),b=new r.a.auth.GoogleAuthProvider;b.setCustomParameters({prompt:"select_account"});var j=function(){u.signInWithPopup(b)},l=r.a,h=(n(39),n(10)),d=function(){return Object(h.jsx)("div",{className:"login",children:Object(h.jsx)("button",{onClick:j,className:"btn",children:"Sign In with Google"})})},p=function(e){var t=e.user;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["Hello, ",Object(h.jsx)("span",{children:t.displayName})]}),Object(h.jsx)("img",{src:t.photoURL,alt:""}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"btn so",onClick:function(){return u.signOut()},children:"Sign Out"})]})},f=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){l.auth().onAuthStateChanged((function(e){a(e)}))}),[]),console.log(n),Object(h.jsx)("div",{className:"login",children:n?Object(h.jsx)(p,{user:n}):Object(h.jsx)(d,{})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.aa018911.chunk.js.map