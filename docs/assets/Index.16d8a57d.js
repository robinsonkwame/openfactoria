import{S as he,i as ye,s as ve,e as p,t as K,a as g,c as ke,b as me,d as f,f as C,g as i,m as ge,h as oe,j as we,k as Ce,l as A,n as Ae,o as Ne,p as _e,q as j,r as V,u as re,v as W,w as qe,x as Le,y as Te,z as be}from"./index.534f2e7f.js";import{N as Me}from"./Nav.6c89479b.js";import{u as Se,f as Fe}from"./factory.fc96e4e7.js";function ce(n,e,t){const l=n.slice();return l[27]=e[t],l}function He(n){let e,t,l,a,c,h,d,s,r,m,u,y,_,q,O,z,S,Z,D,$,x,B,Q,ee,F,te,E,U,le,v,H,M,X,G,P,Y,b=n[5]==="hidden"&&ue(n),w=n[7]&&n[7].length>0&&fe(n);function se(o,k){return o[2]?je:We}let R=se(n),T=R(n);function ie(o,k){return o[5]==="hidden"?Ee:Be}let ne=ie(n),I=ne(n),J=n[1],L=[];for(let o=0;o<J.length;o+=1)L[o]=de(ce(n,J,o));return{c(){b&&b.c(),e=g(),t=p("header"),l=p("form"),a=p("div"),c=p("label"),c.textContent="name",h=g(),d=p("input"),s=g(),r=p("div"),m=p("label"),m.textContent="symbol",u=g(),y=p("input"),_=g(),q=p("div"),O=p("label"),O.textContent="placeholder uri",z=g(),S=p("input"),Z=g(),D=p("div"),w&&w.c(),$=g(),T.c(),x=g(),B=p("div"),Q=p("label"),Q.textContent="total supply",ee=g(),F=p("input"),te=g(),E=p("div"),U=p("label"),U.textContent="base uri",le=g(),v=p("input"),H=g(),I.c(),X=g();for(let o=0;o<L.length;o+=1)L[o].c();G=me(),f(d,"type","text"),f(d,"placeholder","name"),f(a,"class","item"),f(y,"type","text"),f(y,"placeholder","symbol"),f(r,"class","item"),f(S,"type","text"),f(S,"placeholder","placeholder uri (optional. if not set, a default image will be used)"),f(D,"class","file-holder"),f(q,"class","item"),f(F,"type","number"),f(F,"placeholder","total supply"),f(B,"class","item"),f(v,"type","text"),f(v,"placeholder","base uri (optional. you can set it later)"),f(E,"class","item"),f(l,"class",M="form "+n[5])},m(o,k){b&&b.m(o,k),C(o,e,k),C(o,t,k),i(t,l),i(l,a),i(a,c),i(a,h),i(a,d),W(d,n[0].name),i(l,s),i(l,r),i(r,m),i(r,u),i(r,y),W(y,n[0].symbol),i(l,_),i(l,q),i(q,O),i(q,z),i(q,S),W(S,n[0].placeholder),i(q,Z),i(q,D),w&&w.m(D,null),i(q,$),T.m(q,null),i(l,x),i(l,B),i(B,Q),i(B,ee),i(B,F),W(F,n[0].supply),i(l,te),i(l,E),i(E,U),i(E,le),i(E,v),W(v,n[0].base),i(l,H),I.m(l,null),C(o,X,k);for(let N=0;N<L.length;N+=1)L[N].m(o,k);C(o,G,k),P||(Y=[j(d,"input",n[18]),j(y,"input",n[19]),j(S,"input",n[20]),j(F,"input",n[22]),j(v,"input",n[23]),j(l,"submit",qe(Le(n[13])))],P=!0)},p(o,k){if(o[5]==="hidden"?b?b.p(o,k):(b=ue(o),b.c(),b.m(e.parentNode,e)):b&&(b.d(1),b=null),k&1&&d.value!==o[0].name&&W(d,o[0].name),k&1&&y.value!==o[0].symbol&&W(y,o[0].symbol),k&1&&S.value!==o[0].placeholder&&W(S,o[0].placeholder),o[7]&&o[7].length>0?w?w.p(o,k):(w=fe(o),w.c(),w.m(D,null)):w&&(w.d(1),w=null),R===(R=se(o))&&T?T.p(o,k):(T.d(1),T=R(o),T&&(T.c(),T.m(q,null))),k&1&&_e(F.value)!==o[0].supply&&W(F,o[0].supply),k&1&&v.value!==o[0].base&&W(v,o[0].base),ne===(ne=ie(o))&&I?I.p(o,k):(I.d(1),I=ne(o),I&&(I.c(),I.m(l,null))),k&32&&M!==(M="form "+o[5])&&f(l,"class",M),k&2){J=o[1];let N;for(N=0;N<J.length;N+=1){const ae=ce(o,J,N);L[N]?L[N].p(ae,k):(L[N]=de(ae),L[N].c(),L[N].m(G.parentNode,G))}for(;N<L.length;N+=1)L[N].d(1);L.length=J.length}},d(o){b&&b.d(o),o&&A(e),o&&A(t),w&&w.d(),T.d(),I.d(),o&&A(X),Te(L,o),o&&A(G),P=!1,be(Y)}}}function Ie(n){let e;return{c(){e=p("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>loading...',f(e,"class","loading")},m(t,l){C(t,e,l)},p:V,d(t){t&&A(e)}}}function ue(n){let e,t,l,a;return{c(){e=p("div"),t=p("button"),t.textContent="+ create a contract",f(e,"class","top")},m(c,h){C(c,e,h),i(e,t),l||(a=j(t,"click",n[11]),l=!0)},p:V,d(c){c&&A(e),l=!1,a()}}}function fe(n){let e,t;return{c(){e=p("img"),f(e,"class","thumb"),re(e.src,t=n[7])||f(e,"src",t)},m(l,a){C(l,e,a)},p(l,a){a&128&&!re(e.src,t=l[7])&&f(e,"src",t)},d(l){l&&A(e)}}}function We(n){let e,t,l;return{c(){e=p("input"),f(e,"type","file"),f(e,"accept","image/*")},m(a,c){C(a,e,c),t||(l=[j(e,"change",n[21]),j(e,"change",n[14])],t=!0)},p:V,d(a){a&&A(e),t=!1,be(l)}}}function je(n){let e;return{c(){e=p("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>uploading...',f(e,"class","loading")},m(t,l){C(t,e,l)},p:V,d(t){t&&A(e)}}}function Be(n){let e,t,l,a,c;function h(r,m){return r[3]?Pe:Ge}let d=h(n),s=d(n);return{c(){e=p("div"),s.c(),t=g(),l=p("button"),l.textContent="close",f(e,"class","item")},m(r,m){C(r,e,m),s.m(e,null),i(e,t),i(e,l),a||(c=j(l,"click",n[12]),a=!0)},p(r,m){d!==(d=h(r))&&(s.d(1),s=d(r),s&&(s.c(),s.m(e,t)))},d(r){r&&A(e),s.d(),a=!1,c()}}}function Ee(n){return{c:V,m:V,p:V,d:V}}function Ge(n){let e;return{c(){e=p("input"),f(e,"type","submit"),e.value="Deploy"},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function Pe(n){let e;return{c(){e=p("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>deploying...',f(e,"class","loading")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function pe(n){let e,t=n[27].name+"",l,a,c=n[27].symbol+"",h,d;return{c(){e=p("h2"),l=K(t),a=K(" ("),h=K(c),d=K(")")},m(s,r){C(s,e,r),i(e,l),i(e,a),i(e,h),i(e,d)},p(s,r){r&2&&t!==(t=s[27].name+"")&&oe(l,t),r&2&&c!==(c=s[27].symbol+"")&&oe(h,c)},d(s){s&&A(e)}}}function de(n){let e,t,l,a=n[27].address+"",c,h,d,s=n[27].name&&pe(n);return{c(){e=p("a"),s&&s.c(),t=g(),l=p("div"),c=K(a),h=g(),f(e,"class","item"),f(e,"href",d="/contract/#"+n[27].address)},m(r,m){C(r,e,m),s&&s.m(e,null),i(e,t),i(e,l),i(l,c),i(e,h)},p(r,m){r[27].name?s?s.p(r,m):(s=pe(r),s.c(),s.m(e,t)):s&&(s.d(1),s=null),m&2&&a!==(a=r[27].address+"")&&oe(c,a),m&2&&d!==(d="/contract/#"+r[27].address)&&f(e,"href",d)},d(r){r&&A(e),s&&s.d()}}}function Ve(n){let e,t,l,a,c,h,d;a=new Me({props:{v1:n[16],v2:n[15],network:n[10],account:n[9]}});function s(u,y){return u[4]?Ie:He}let r=s(n),m=r(n);return{c(){e=p("div"),t=K(n[8]),l=g(),ke(a.$$.fragment),c=g(),m.c(),h=me(),f(e,"class","error")},m(u,y){C(u,e,y),i(e,t),C(u,l,y),ge(a,u,y),C(u,c,y),m.m(u,y),C(u,h,y),d=!0},p(u,[y]){(!d||y&256)&&oe(t,u[8]);const _={};y&1024&&(_.network=u[10]),y&512&&(_.account=u[9]),a.$set(_),r===(r=s(u))&&m?m.p(u,y):(m.d(1),m=r(u),m&&(m.c(),m.m(h.parentNode,h)))},i(u){d||(we(a.$$.fragment,u),d=!0)},o(u){Ce(a.$$.fragment,u),d=!1},d(u){u&&A(e),u&&A(l),Ae(a,u),u&&A(c),m.d(u),u&&A(h)}}}function ze(n,e,t){let{version:l}=e,a=new Web3(window.ethereum),c=[],h=!1,d,s,r="hidden",m=[],u="",y="",_={name:"",symbol:"",placeholder:"",supply:"",base:""},q,O,z;const S=async()=>{t(4,s=!0);let H=(await window.ethereum.send("eth_requestAccounts")).result[0];t(9,q=H),console.log("current_account",q);let M=await z.getPastEvents("CollectionAdded",{filter:{receiver:H},fromBlock:0,toBlock:"latest"}).then(b=>b.map(w=>w.returnValues.collection)),X=Array.from(new Set(M)),G=[];const P=new F0;for(let b of X)console.log("address",b),G.push({address:b,name:"fetching...",symbol:""});t(1,c=G),t(4,s=!1);let Y=[];for(let b=0;b<c.length;b++){let w=c[b].address;if(await P.init({web3:a,contract:w}),(await P.api.owner().call()).toLowerCase()!==H.toLowerCase()){console.log("remove at",b),Y.push(b);continue}else{let R=await P.api.name().call(),T=await P.api.symbol().call();t(1,c[b].name=R,c),t(1,c[b].symbol=T,c)}}for(let b of Y)c.splice(b,1)},Z=()=>{t(5,r="")},D=()=>{t(5,r="hidden")},$=async()=>{t(3,d=!0),console.log("payload",_);let H=(await window.ethereum.send("eth_requestAccounts")).result[0];try{let M=await z.methods.genesis(H,_.name,_.symbol,{placeholder:_.placeholder,base:_.base,supply:_.supply,permanent:!1}).send({from:H});console.log("tx",M),t(3,d=!1),location.href="/contract/#"+M.events.CollectionAdded.returnValues.collection}catch(M){t(8,y=M.message)}},x=async()=>{if(m.length>0){t(2,h=!0);try{let v=await Se(m[0]);t(0,_.placeholder="ipfs://"+v,_)}catch{confirm("NFT.STORAGE api key needed. Go to the config page and set it first")&&window.open("/config/")}t(2,h=!1)}};let B=l==="v2"?"selected":"",Q=l==="v1"?"selected":"";s=!0,Ne(async()=>{z=await Fe(a,l),t(10,O=z.$network),await S()});function ee(){_.name=this.value,t(0,_)}function F(){_.symbol=this.value,t(0,_)}function te(){_.placeholder=this.value,t(0,_)}function E(){m=this.files,t(6,m)}function U(){_.supply=_e(this.value),t(0,_)}function le(){_.base=this.value,t(0,_)}return n.$$set=v=>{"version"in v&&t(17,l=v.version)},n.$$.update=()=>{n.$$.dirty&1&&_&&_.placeholder&&fetch("https://ipfs.io/ipfs/"+_.placeholder.replace("ipfs://","")).then(v=>v.json()).then(v=>{v.image.startsWith("ipfs://")?t(7,u="https://ipfs.io/ipfs/"+v.image.replace("ipfs://","")):v.image.startsWith("http")&&t(7,u=v.image)})},[_,c,h,d,s,r,m,u,y,q,O,Z,D,$,x,B,Q,l,ee,F,te,E,U,le]}class Je extends he{constructor(e){super(),ye(this,e,ze,Ve,ve,{version:17})}}export{Je as I};