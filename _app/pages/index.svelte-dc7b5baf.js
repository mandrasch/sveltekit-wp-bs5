import{S as Q,i as W,s as X,e as p,c as m,a as g,d as f,J as Y,b as i,f as N,H as o,j as H,t as M,l as j,g as x,h as le,I as R,n as z,o as Z,p as U,m as ee,v as oe,w as ne,x as ie,A as ce,k as te,K as ue}from"../chunks/vendor-66538153.js";import{b as F}from"../chunks/paths-28a87002.js";function se(c){let e,a,s,t,d;return{c(){e=p("a"),a=p("img"),this.h()},l(r){e=m(r,"A",{href:!0});var l=g(e);a=m(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(f),this.h()},h(){Y(a.src,s=c[0].featuredImage.node.sourceUrl)||i(a,"src",s),i(a,"alt",t=c[0].featuredImage.node.altText),i(a,"class","bd-placeholder-img card-img-top"),i(e,"href",d=`${F}/blog${c[0].uri}`)},m(r,l){N(r,e,l),o(e,a)},p(r,l){l&1&&!Y(a.src,s=r[0].featuredImage.node.sourceUrl)&&i(a,"src",s),l&1&&t!==(t=r[0].featuredImage.node.altText)&&i(a,"alt",t),l&1&&d!==(d=`${F}/blog${r[0].uri}`)&&i(e,"href",d)},d(r){r&&f(e)}}}function fe(c){let e,a,s,t,d,r,l=c[0].title+"",u,$,D,E,T=c[0].excerpt+"",A,w,v,_,V,y,C,P,S,h=c[0].featuredImage&&se(c);return{c(){e=p("div"),a=p("div"),h&&h.c(),s=H(),t=p("div"),d=p("a"),r=p("h2"),u=M(l),D=H(),E=p("p"),A=H(),w=p("div"),v=p("div"),_=p("a"),V=M("View"),C=H(),P=p("small"),S=M("9 mins"),this.h()},l(k){e=m(k,"DIV",{class:!0});var n=g(e);a=m(n,"DIV",{class:!0});var b=g(a);h&&h.l(b),s=j(b),t=m(b,"DIV",{class:!0});var I=g(t);d=m(I,"A",{href:!0});var q=g(d);r=m(q,"H2",{class:!0});var G=g(r);u=x(G,l),G.forEach(f),q.forEach(f),D=j(I),E=m(I,"P",{class:!0});var K=g(E);K.forEach(f),A=j(I),w=m(I,"DIV",{class:!0});var L=g(w);v=m(L,"DIV",{class:!0});var O=g(v);_=m(O,"A",{href:!0,class:!0});var B=g(_);V=x(B,"View"),B.forEach(f),O.forEach(f),C=j(L),P=m(L,"SMALL",{class:!0});var J=g(P);S=x(J,"9 mins"),J.forEach(f),L.forEach(f),I.forEach(f),b.forEach(f),n.forEach(f),this.h()},h(){i(r,"class","card-title"),i(d,"href",$=`${F}/blog${c[0].uri}`),i(E,"class","card-text"),i(_,"href",y=`${F}/blog${c[0].uri}`),i(_,"class","btn btn-sm btn-outline-secondary"),i(v,"class","btn-group"),i(P,"class","text-muted"),i(w,"class","d-flex justify-content-between align-items-center"),i(t,"class","card-body"),i(a,"class","card shadow-sm"),i(e,"class","col")},m(k,n){N(k,e,n),o(e,a),h&&h.m(a,null),o(a,s),o(a,t),o(t,d),o(d,r),o(r,u),o(t,D),o(t,E),E.innerHTML=T,o(t,A),o(t,w),o(w,v),o(v,_),o(_,V),o(w,C),o(w,P),o(P,S)},p(k,[n]){k[0].featuredImage?h?h.p(k,n):(h=se(k),h.c(),h.m(a,s)):h&&(h.d(1),h=null),n&1&&l!==(l=k[0].title+"")&&le(u,l),n&1&&$!==($=`${F}/blog${k[0].uri}`)&&i(d,"href",$),n&1&&T!==(T=k[0].excerpt+"")&&(E.innerHTML=T),n&1&&y!==(y=`${F}/blog${k[0].uri}`)&&i(_,"href",y)},i:R,o:R,d(k){k&&f(e),h&&h.d()}}}function de(c,e,a){let{post:s}=e;return c.$$set=t=>{"post"in t&&a(0,s=t.post)},[s]}class he extends Q{constructor(e){super();W(this,e,de,fe,X,{post:0})}}function ae(c,e,a){const s=c.slice();return s[2]=e[a],s}function pe(c){let e,a;return{c(){e=p("p"),a=M("No posts found.")},l(s){e=m(s,"P",{});var t=g(e);a=x(t,"No posts found."),t.forEach(f)},m(s,t){N(s,e,t),o(e,a)},p:R,i:R,o:R,d(s){s&&f(e)}}}function me(c){let e,a,s=c[0],t=[];for(let r=0;r<s.length;r+=1)t[r]=re(ae(c,s,r));const d=r=>z(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=te()},l(r){for(let l=0;l<t.length;l+=1)t[l].l(r);e=te()},m(r,l){for(let u=0;u<t.length;u+=1)t[u].m(r,l);N(r,e,l),a=!0},p(r,l){if(l&1){s=r[0];let u;for(u=0;u<s.length;u+=1){const $=ae(r,s,u);t[u]?(t[u].p($,l),U(t[u],1)):(t[u]=re($),t[u].c(),U(t[u],1),t[u].m(e.parentNode,e))}for(ee(),u=s.length;u<t.length;u+=1)d(u);Z()}},i(r){if(!a){for(let l=0;l<s.length;l+=1)U(t[l]);a=!0}},o(r){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)z(t[l]);a=!1},d(r){ue(t,r),r&&f(e)}}}function re(c){let e,a;return e=new he({props:{post:c[2]}}),{c(){oe(e.$$.fragment)},l(s){ne(e.$$.fragment,s)},m(s,t){ie(e,s,t),a=!0},p(s,t){const d={};t&1&&(d.post=s[2]),e.$set(d)},i(s){a||(U(e.$$.fragment,s),a=!0)},o(s){z(e.$$.fragment,s),a=!1},d(s){ce(e,s)}}}function _e(c){let e,a,s,t,d,r,l,u,$,D,E,T,A,w,v,_,V,y,C,P;const S=[me,pe],h=[];function k(n,b){return n[0]?0:1}return v=k(c),_=h[v]=S[v](c),{c(){e=p("div"),a=p("div"),s=p("div"),t=p("h1"),d=M("Title of a longer featured blog post"),r=H(),l=p("p"),u=M(`Multiple lines of text that form the lede, informing new readers quickly and efficiently
				about what\u2019s most interesting in this post\u2019s contents.`),$=H(),D=p("p"),E=p("a"),T=M("Continue reading..."),A=H(),w=p("div"),_.c(),V=H(),y=p("p"),C=M("Sample posts generated with FakerPress / Image source: unsplash (via Lorem Ipsum) or own photos"),this.h()},l(n){e=m(n,"DIV",{class:!0});var b=g(e);a=m(b,"DIV",{class:!0});var I=g(a);s=m(I,"DIV",{class:!0});var q=g(s);t=m(q,"H1",{class:!0});var G=g(t);d=x(G,"Title of a longer featured blog post"),G.forEach(f),r=j(q),l=m(q,"P",{class:!0});var K=g(l);u=x(K,`Multiple lines of text that form the lede, informing new readers quickly and efficiently
				about what\u2019s most interesting in this post\u2019s contents.`),K.forEach(f),$=j(q),D=m(q,"P",{class:!0});var L=g(D);E=m(L,"A",{href:!0,class:!0});var O=g(E);T=x(O,"Continue reading..."),O.forEach(f),L.forEach(f),q.forEach(f),I.forEach(f),A=j(b),w=m(b,"DIV",{class:!0});var B=g(w);_.l(B),B.forEach(f),b.forEach(f),V=j(n),y=m(n,"P",{class:!0});var J=g(y);C=x(J,"Sample posts generated with FakerPress / Image source: unsplash (via Lorem Ipsum) or own photos"),J.forEach(f),this.h()},h(){i(t,"class","display-4 fst-italic"),i(l,"class","lead my-3"),i(E,"href","#"),i(E,"class","text-white fw-bold"),i(D,"class","lead mb-0"),i(s,"class","col-md-6 px-0"),i(a,"class","p-4 p-md-5 mb-4 text-white rounded bg-dark"),i(w,"class","row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"),i(e,"class","container"),i(y,"class","text-center mt-5")},m(n,b){N(n,e,b),o(e,a),o(a,s),o(s,t),o(t,d),o(s,r),o(s,l),o(l,u),o(s,$),o(s,D),o(D,E),o(E,T),o(e,A),o(e,w),h[v].m(w,null),N(n,V,b),N(n,y,b),o(y,C),P=!0},p(n,[b]){let I=v;v=k(n),v===I?h[v].p(n,b):(ee(),z(h[I],1,1,()=>{h[I]=null}),Z(),_=h[v],_?_.p(n,b):(_=h[v]=S[v](n),_.c()),U(_,1),_.m(w,null))},i(n){P||(U(_),P=!0)},o(n){z(_),P=!1},d(n){n&&f(e),h[v].d(),n&&f(V),n&&f(y)}}}const ge=`
    query getPosts {
      posts {
        nodes {
          databaseId
          uri
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  `,ve=`
    query getHomePage {
		nodeByUri(uri: "/") {
			__typename
			... on ContentType {
			id
			name
			}
			... on Page {
			id
			title
			heroFrontPage {
				description
				fieldGroupName
				title
				button2 {
				target
				title
				url
				}
				button1 {
				target
				title
				url
				}
				teaserimage {
					altText
					title
					uri
					sourceUrl(size: MEDIUM_LARGE)
				}
			}
			}
		}
		}`;async function Ee({fetch:c}){const e=await c("https://sveltekit-wp-bootstrap5-backend.mandrasch.eu/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([{query:ge,operationName:"getPosts"},{query:ve,operationName:"getHomePage"}])});if(e.ok){const a=await e.json();return console.dir(a,{depth:null}),{props:{posts:a[0].data.posts.nodes}}}return{status:e.status,error:new Error("Could not load")}}function be(c,e,a){let{posts:s,heroData:t}=e;return c.$$set=d=>{"posts"in d&&a(0,s=d.posts),"heroData"in d&&a(1,t=d.heroData)},[s,t]}class Ie extends Q{constructor(e){super();W(this,e,be,_e,X,{posts:0,heroData:1})}}export{Ie as default,Ee as load};
