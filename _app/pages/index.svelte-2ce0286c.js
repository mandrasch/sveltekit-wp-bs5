import{S as Z,i as ee,s as te,e as p,c as m,a as _,d as u,J as Y,b as n,f as R,H as l,j as L,t as M,l as U,g as j,h as X,I as J,K as ae,v as se,w as re,x as le,n as K,o as oe,p as x,A as ne,m as ie,k as ce,L as he}from"../chunks/vendor-ec57a1c4.js";import{b as W}from"../chunks/paths-28a87002.js";function ue(c){let e,s,a,t,o;return{c(){e=p("a"),s=p("img"),this.h()},l(r){e=m(r,"A",{href:!0});var i=_(e);s=m(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(u),this.h()},h(){Y(s.src,a=c[0].featuredImage.node.sourceUrl)||n(s,"src",a),n(s,"alt",t=c[0].featuredImage.node.altText),n(s,"class","bd-placeholder-img card-img-top"),n(e,"href",o=`${W}/blog${c[0].uri}`)},m(r,i){R(r,e,i),l(e,s)},p(r,i){i&1&&!Y(s.src,a=r[0].featuredImage.node.sourceUrl)&&n(s,"src",a),i&1&&t!==(t=r[0].featuredImage.node.altText)&&n(s,"alt",t),i&1&&o!==(o=`${W}/blog${r[0].uri}`)&&n(e,"href",o)},d(r){r&&u(e)}}}function pe(c){let e,s,a,t,o,r,i=c[0].title+"",d,D,C,$,y=c[0].excerpt+"",P,V,A,b,g,k,H,q,N,w=c[0].featuredImage&&ue(c);return{c(){e=p("div"),s=p("div"),w&&w.c(),a=L(),t=p("div"),o=p("a"),r=p("h2"),d=M(i),C=L(),$=p("p"),P=L(),V=p("div"),A=p("div"),b=p("a"),g=M("View"),H=L(),q=p("small"),N=M("9 mins"),this.h()},l(E){e=m(E,"DIV",{class:!0});var I=_(e);s=m(I,"DIV",{class:!0});var S=_(s);w&&w.l(S),a=U(S),t=m(S,"DIV",{class:!0});var f=_(t);o=m(f,"A",{href:!0});var h=_(o);r=m(h,"H2",{class:!0});var v=_(r);d=j(v,i),v.forEach(u),h.forEach(u),C=U(f),$=m(f,"P",{class:!0});var T=_($);T.forEach(u),P=U(f),V=m(f,"DIV",{class:!0});var B=_(V);A=m(B,"DIV",{class:!0});var F=_(A);b=m(F,"A",{href:!0,class:!0});var O=_(b);g=j(O,"View"),O.forEach(u),F.forEach(u),H=U(B),q=m(B,"SMALL",{class:!0});var G=_(q);N=j(G,"9 mins"),G.forEach(u),B.forEach(u),f.forEach(u),S.forEach(u),I.forEach(u),this.h()},h(){n(r,"class","card-title"),n(o,"href",D=`${W}/blog${c[0].uri}`),n($,"class","card-text"),n(b,"href",k=`${W}/blog${c[0].uri}`),n(b,"class","btn btn-sm btn-outline-secondary"),n(A,"class","btn-group"),n(q,"class","text-muted"),n(V,"class","d-flex justify-content-between align-items-center"),n(t,"class","card-body"),n(s,"class","card shadow-sm"),n(e,"class","col")},m(E,I){R(E,e,I),l(e,s),w&&w.m(s,null),l(s,a),l(s,t),l(t,o),l(o,r),l(r,d),l(t,C),l(t,$),$.innerHTML=y,l(t,P),l(t,V),l(V,A),l(A,b),l(b,g),l(V,H),l(V,q),l(q,N)},p(E,[I]){E[0].featuredImage?w?w.p(E,I):(w=ue(E),w.c(),w.m(s,a)):w&&(w.d(1),w=null),I&1&&i!==(i=E[0].title+"")&&X(d,i),I&1&&D!==(D=`${W}/blog${E[0].uri}`)&&n(o,"href",D),I&1&&y!==(y=E[0].excerpt+"")&&($.innerHTML=y),I&1&&k!==(k=`${W}/blog${E[0].uri}`)&&n(b,"href",k)},i:J,o:J,d(E){E&&u(e),w&&w.d()}}}function me(c,e,s){let{post:a}=e;return c.$$set=t=>{"post"in t&&s(0,a=t.post)},[a]}class _e extends Z{constructor(e){super();ee(this,e,me,pe,te,{post:0})}}function ge(c){let e,s,a,t,o,r,i,d=c[0].title+"",D,C,$,y,P=c[0].description+"",V,A,b,g,k=c[0].button1.title+"",H,q,N,w,E,I=c[0].button2.title+"",S,f;return{c(){e=p("div"),s=p("div"),a=p("img"),r=L(),i=p("h1"),D=M(d),C=L(),$=p("div"),y=p("p"),V=M(P),A=L(),b=p("div"),g=p("a"),H=M(k),q=M(" (Internal Link)"),w=L(),E=p("a"),S=M(I),this.h()},l(h){e=m(h,"DIV",{class:!0});var v=_(e);s=m(v,"DIV",{class:!0});var T=_(s);a=m(T,"IMG",{src:!0,alt:!0,class:!0,style:!0}),T.forEach(u),r=U(v),i=m(v,"H1",{class:!0});var B=_(i);D=j(B,d),B.forEach(u),C=U(v),$=m(v,"DIV",{class:!0});var F=_($);y=m(F,"P",{class:!0});var O=_(y);V=j(O,P),O.forEach(u),A=U(F),b=m(F,"DIV",{class:!0});var G=_(b);g=m(G,"A",{href:!0,class:!0});var z=_(g);H=j(z,k),q=j(z," (Internal Link)"),z.forEach(u),w=U(G),E=m(G,"A",{href:!0,class:!0});var Q=_(E);S=j(Q,I),Q.forEach(u),G.forEach(u),F.forEach(u),v.forEach(u),this.h()},h(){Y(a.src,t=c[0].teaserimage.sourceUrl)||n(a,"src",t),n(a,"alt",o=c[0].teaserimage.altText),n(a,"class","img-fluid border rounded-3 shadow-lg mb-4"),ae(a,"max-height","30vh"),ae(a,"width","auto"),n(s,"class","container px-5"),n(i,"class","display-4 fw-bold"),n(y,"class","lead mb-4"),n(g,"href",N=c[0].button1.url),n(g,"class","btn btn-primary btn-lg px-4 me-sm-3"),n(E,"href",f=c[0].button2.url),n(E,"class","btn btn-outline-secondary btn-lg px-4"),n(b,"class","d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"),n($,"class","col-lg-6 mx-auto"),n(e,"class","px-4 pt-5 my-5 text-center border-bottom")},m(h,v){R(h,e,v),l(e,s),l(s,a),l(e,r),l(e,i),l(i,D),l(e,C),l(e,$),l($,y),l(y,V),l($,A),l($,b),l(b,g),l(g,H),l(g,q),l(b,w),l(b,E),l(E,S)},p(h,[v]){v&1&&!Y(a.src,t=h[0].teaserimage.sourceUrl)&&n(a,"src",t),v&1&&o!==(o=h[0].teaserimage.altText)&&n(a,"alt",o),v&1&&d!==(d=h[0].title+"")&&X(D,d),v&1&&P!==(P=h[0].description+"")&&X(V,P),v&1&&k!==(k=h[0].button1.title+"")&&X(H,k),v&1&&N!==(N=h[0].button1.url)&&n(g,"href",N),v&1&&I!==(I=h[0].button2.title+"")&&X(S,I),v&1&&f!==(f=h[0].button2.url)&&n(E,"href",f)},i:J,o:J,d(h){h&&u(e)}}}function ve(c,e,s){let{heroData:a}=e;return c.$$set=t=>{"heroData"in t&&s(0,a=t.heroData)},[a]}class be extends Z{constructor(e){super();ee(this,e,ve,ge,te,{heroData:0})}}function fe(c,e,s){const a=c.slice();return a[2]=e[s],a}function we(c){let e,s;return{c(){e=p("p"),s=M("No posts found.")},l(a){e=m(a,"P",{});var t=_(e);s=j(t,"No posts found."),t.forEach(u)},m(a,t){R(a,e,t),l(e,s)},p:J,i:J,o:J,d(a){a&&u(e)}}}function Ee(c){let e,s,a=c[0],t=[];for(let r=0;r<a.length;r+=1)t[r]=de(fe(c,a,r));const o=r=>K(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=ce()},l(r){for(let i=0;i<t.length;i+=1)t[i].l(r);e=ce()},m(r,i){for(let d=0;d<t.length;d+=1)t[d].m(r,i);R(r,e,i),s=!0},p(r,i){if(i&1){a=r[0];let d;for(d=0;d<a.length;d+=1){const D=fe(r,a,d);t[d]?(t[d].p(D,i),x(t[d],1)):(t[d]=de(D),t[d].c(),x(t[d],1),t[d].m(e.parentNode,e))}for(ie(),d=a.length;d<t.length;d+=1)o(d);oe()}},i(r){if(!s){for(let i=0;i<a.length;i+=1)x(t[i]);s=!0}},o(r){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)K(t[i]);s=!1},d(r){he(t,r),r&&u(e)}}}function de(c){let e,s;return e=new _e({props:{post:c[2]}}),{c(){se(e.$$.fragment)},l(a){re(e.$$.fragment,a)},m(a,t){le(e,a,t),s=!0},p(a,t){const o={};t&1&&(o.post=a[2]),e.$set(o)},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){K(e.$$.fragment,a),s=!1},d(a){ne(e,a)}}}function Ie(c){let e,s,a,t,o,r,i,d,D,C,$,y,P,V,A,b,g,k,H,q,N,w;s=new be({props:{heroData:c[1]}});const E=[Ee,we],I=[];function S(f,h){return f[0]?0:1}return g=S(c),k=I[g]=E[g](c),{c(){e=p("div"),se(s.$$.fragment),a=L(),t=p("div"),o=p("div"),r=p("h1"),i=M("Title of a longer featured blog post"),d=L(),D=p("p"),C=M(`Multiple lines of text that form the lede, informing new readers quickly and efficiently
				about what\u2019s most interesting in this post\u2019s contents.`),$=L(),y=p("p"),P=p("a"),V=M("Continue reading..."),A=L(),b=p("div"),k.c(),H=L(),q=p("p"),N=M("Sample posts generated with FakerPress / Image source: unsplash (via Lorem Ipsum) or own photos"),this.h()},l(f){e=m(f,"DIV",{class:!0});var h=_(e);re(s.$$.fragment,h),a=U(h),t=m(h,"DIV",{class:!0});var v=_(t);o=m(v,"DIV",{class:!0});var T=_(o);r=m(T,"H1",{class:!0});var B=_(r);i=j(B,"Title of a longer featured blog post"),B.forEach(u),d=U(T),D=m(T,"P",{class:!0});var F=_(D);C=j(F,`Multiple lines of text that form the lede, informing new readers quickly and efficiently
				about what\u2019s most interesting in this post\u2019s contents.`),F.forEach(u),$=U(T),y=m(T,"P",{class:!0});var O=_(y);P=m(O,"A",{href:!0,class:!0});var G=_(P);V=j(G,"Continue reading..."),G.forEach(u),O.forEach(u),T.forEach(u),v.forEach(u),A=U(h),b=m(h,"DIV",{class:!0});var z=_(b);k.l(z),z.forEach(u),h.forEach(u),H=U(f),q=m(f,"P",{});var Q=_(q);N=j(Q,"Sample posts generated with FakerPress / Image source: unsplash (via Lorem Ipsum) or own photos"),Q.forEach(u),this.h()},h(){n(r,"class","display-4 fst-italic"),n(D,"class","lead my-3"),n(P,"href","#"),n(P,"class","text-white fw-bold"),n(y,"class","lead mb-0"),n(o,"class","col-md-6 px-0"),n(t,"class","p-4 p-md-5 mb-4 text-white rounded bg-dark"),n(b,"class","row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"),n(e,"class","container")},m(f,h){R(f,e,h),le(s,e,null),l(e,a),l(e,t),l(t,o),l(o,r),l(r,i),l(o,d),l(o,D),l(D,C),l(o,$),l(o,y),l(y,P),l(P,V),l(e,A),l(e,b),I[g].m(b,null),R(f,H,h),R(f,q,h),l(q,N),w=!0},p(f,[h]){const v={};h&2&&(v.heroData=f[1]),s.$set(v);let T=g;g=S(f),g===T?I[g].p(f,h):(ie(),K(I[T],1,1,()=>{I[T]=null}),oe(),k=I[g],k?k.p(f,h):(k=I[g]=E[g](f),k.c()),x(k,1),k.m(b,null))},i(f){w||(x(s.$$.fragment,f),x(k),w=!0)},o(f){K(s.$$.fragment,f),K(k),w=!1},d(f){f&&u(e),ne(s),I[g].d(),f&&u(H),f&&u(q)}}}const ke=`
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
  `,$e=`
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
		}`;async function Ve({fetch:c}){const e=await c("https://sveltekit-wp-bootstrap5-backend.mandrasch.eu/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([{query:ke,operationName:"getPosts"},{query:$e,operationName:"getHomePage"}])});if(e.ok){const s=await e.json(),a=s[0].data.posts.nodes,t=s[1].data.nodeByUri.heroFrontPage;if(t.button1.url!=null){let o="https://sveltekit-wp-bootstrap5-backend.mandrasch.eu/graphql";o=o.replace(/\/graphql/g,""),o=o.replace("http://",""),o=o.replace("https://",""),console.log("WP BASE DOMAIN:",o),t.button1.url=t.button1.url.replace("https://","").replace("http://",""),t.button1.url=t.button1.url.replace(o,"http://localhost:3000"),console.log("Replaced link",t.button1.url)}return{props:{posts:a,heroData:t}}}return{status:e.status,error:new Error("Could not load")}}function De(c,e,s){let{posts:a,heroData:t}=e;return c.$$set=o=>{"posts"in o&&s(0,a=o.posts),"heroData"in o&&s(1,t=o.heroData)},[a,t]}class qe extends Z{constructor(e){super();ee(this,e,De,Ie,te,{posts:0,heroData:1})}}export{qe as default,Ve as load};
