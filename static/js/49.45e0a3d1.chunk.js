(this["webpackJsonpsam-resto"]=this["webpackJsonpsam-resto"]||[]).push([[49],{1392:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t.n(n),r=t(31),o=t(12),c=t(19),i=t(1),s=t.n(i),m=t(877),d=t(185),v=t(186),u=t(258),E=t(926),h=t(77),b=t(71),g=t(304),p=t(70),x=t.n(p),f=t(72),C=t(32),N=t(265),B=t(39),T=t.n(B),j=Object(m.a)((function(e){var a;return{root:{marginTop:"40px",padding:"15px 15px 50px 15px"},gridBox:{margin:"15px 0px"},dashboardContent:(a={height:"100%",padding:"15px",backgroundColor:"#373636",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},Object(c.a)(a,e.breakpoints.down("xs"),{height:"auto"}),Object(c.a)(a,"&:hover",{boxShadow:"0 0 1rem #000000, 0 0 0rem #373636, 0 0 1rem #000000, 0 0 4rem #101010"}),Object(c.a)(a,"& svg",{fontSize:"30px",color:"#fff"}),Object(c.a)(a,"& h3",{color:"#FFF",whiteSpace:"pre",textOverflow:"ellipsis",overflow:"hidden",width:"calc(100% - 5px)"}),a)}}));a.default=function(e){e.data,e.index;var a=j(),t=Object(C.g)(),n=Object(i.useState)(),c=Object(o.a)(n,2),m=c[0],p=c[1],B=function(){var e=Object(r.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T()({method:"GET",url:x.a.dashboard});case 3:200===(a=e.sent).data.responseCode&&p(a.data.result),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){B()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:a.root},s.a.createElement(v.a,{className:a.heading},s.a.createElement(u.a,{variant:"h3",style:{color:"#e6e5e8"}},"Dashboard")),s.a.createElement(v.a,{mt:2},s.a.createElement(E.a,{container:!0,spacing:2},s.a.createElement(E.a,{item:!0,lg:3,md:4,sm:6,xs:12,className:a.gridBox},s.a.createElement(v.a,{className:a.dashboardContent,align:"center"},s.a.createElement(b.o,null),s.a.createElement(v.a,{mt:1,mb:1},s.a.createElement(u.a,{variant:"h5"},"Total Active Users")),s.a.createElement(u.a,{variant:"h3"},(null===m||void 0===m?void 0:m.totalActiveUser)?null===m||void 0===m?void 0:m.totalActiveUser:"0"))),s.a.createElement(E.a,{item:!0,lg:3,md:4,sm:6,xs:12,className:a.gridBox},s.a.createElement(v.a,{className:a.dashboardContent,align:"center"},s.a.createElement(b.p,null),s.a.createElement(v.a,{mt:1,mb:1},s.a.createElement(u.a,{variant:"h5"},"Total Blocked Users")),s.a.createElement(u.a,{variant:"h3"},(null===m||void 0===m?void 0:m.totalBlockUser)?null===m||void 0===m?void 0:m.totalBlockUser:"0"))),s.a.createElement(E.a,{item:!0,lg:3,md:4,sm:6,xs:12,className:a.gridBox},s.a.createElement(v.a,{className:a.dashboardContent,align:"center"},s.a.createElement(h.e,null),s.a.createElement(v.a,{mt:1,mb:1},s.a.createElement(u.a,{variant:"h5"}," Total Collection")),s.a.createElement(u.a,{variant:"h3"},(null===m||void 0===m?void 0:m.totalCollection)?null===m||void 0===m?void 0:m.totalCollection:"0"))),s.a.createElement(E.a,{item:!0,lg:3,md:4,sm:6,xs:12,className:a.gridBox},s.a.createElement(v.a,{className:a.dashboardContent,align:"center"},s.a.createElement(f.b,null),s.a.createElement(v.a,{mt:1,mb:1},s.a.createElement(u.a,{variant:"h5"}," Total Auctions")),s.a.createElement(u.a,{variant:"h3"},(null===m||void 0===m?void 0:m.totalAuction)?null===m||void 0===m?void 0:m.totalAuction:"0"))),s.a.createElement(E.a,{item:!0,lg:3,md:4,sm:6,xs:12,className:a.gridBox},s.a.createElement(v.a,{className:a.dashboardContent,align:"center"},s.a.createElement(g.b,null),s.a.createElement(v.a,{mt:1,mb:1},s.a.createElement(u.a,{variant:"h5"},"Total Creators")),s.a.createElement(u.a,{variant:"h3"}," ",(null===m||void 0===m?void 0:m.totalUser)?null===m||void 0===m?void 0:m.totalUser:"0"))),s.a.createElement(E.a,{item:!0,lg:3,md:4,sm:6,xs:12,className:a.gridBox,style:{cursor:"pointer"}},s.a.createElement(v.a,{className:a.dashboardContent,align:"center"},s.a.createElement(N.c,null),s.a.createElement(v.a,{mt:1,mb:1},s.a.createElement(u.a,{variant:"h5",onClick:function(){return t.push("/transaction-history")}}," ","Total Transactions")),s.a.createElement(u.a,{variant:"h3"},(null===m||void 0===m?void 0:m.totalTransaction)?null===m||void 0===m?void 0:m.totalTransaction:"0"))),s.a.createElement(E.a,{item:!0,lg:3,md:4,sm:6,xs:12,className:a.gridBox},s.a.createElement(v.a,{className:a.dashboardContent,align:"center"},s.a.createElement(b.q,null),s.a.createElement(v.a,{mt:1,mb:1},s.a.createElement(u.a,{variant:"h5"}," ","Total Admin Wallet Balance")),s.a.createElement(u.a,{variant:"h3"},(null===m||void 0===m?void 0:m.binanceRes)?null===m||void 0===m?void 0:m.binanceRes:"0")))))))}}}]);
//# sourceMappingURL=49.45e0a3d1.chunk.js.map