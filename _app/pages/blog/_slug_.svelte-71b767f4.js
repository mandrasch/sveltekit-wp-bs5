import{S as F,i as K,s as Q,e as v,c as I,J,b as _,f as M,d as p,t as E,j as T,a as w,g as k,l as j,H as s,I as O,L as W,h as V}from"../../chunks/vendor-66538153.js";import{b as X}from"../../chunks/paths-28a87002.js";function N(r){let e,a,o;return{c(){e=v("img"),this.h()},l(l){e=I(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){J(e.src,a=r[0].featuredImage.node.sourceUrl)||_(e,"src",a),_(e,"alt",o=r[0].featuredImage.node.altText),_(e,"class","svelte-wueg1d")},m(l,t){M(l,e,t)},p(l,t){t&1&&!J(e.src,a=l[0].featuredImage.node.sourceUrl)&&_(e,"src",a),t&1&&o!==(o=l[0].featuredImage.node.altText)&&_(e,"alt",o)},d(l){l&&p(e)}}}function Y(r){let e,a,o,l,t,g=r[2].join(", ")+"",f;return{c(){e=v("div"),a=v("h4"),o=E("Categorized As"),l=T(),t=v("p"),f=E(g),this.h()},l(d){e=I(d,"DIV",{class:!0});var n=w(e);a=I(n,"H4",{class:!0});var y=w(a);o=k(y,"Categorized As"),y.forEach(p),l=j(n),t=I(n,"P",{});var h=w(t);f=k(h,g),h.forEach(p),n.forEach(p),this.h()},h(){_(a,"class","svelte-wueg1d"),_(e,"class","category-list svelte-wueg1d")},m(d,n){M(d,e,n),s(e,a),s(a,o),s(e,l),s(e,t),s(t,f)},p:O,d(d){d&&p(e)}}}function Z(r){let e,a,o,l,t,g,f,d=r[0].title+"",n,y,h,A,S=r[0].author.node.name+"",q,B,C=r[1](r[0].date)+"",H,P,D,U=r[0].content+"",$,i=r[0].featuredImage&&N(r),b=r[2].length&&Y(r);return{c(){e=v("div"),a=v("a"),o=E("\u2190 Blog"),l=T(),t=v("article"),i&&i.c(),g=T(),f=v("h1"),n=E(d),y=T(),h=v("p"),A=E("\u270D\uFE0F "),q=E(S),B=E(" on "),H=E(C),P=T(),D=v("div"),$=T(),b&&b.c(),this.h()},l(u){e=I(u,"DIV",{class:!0,style:!0});var c=w(e);a=I(c,"A",{href:!0,class:!0});var z=w(a);o=k(z,"\u2190 Blog"),z.forEach(p),l=j(c),t=I(c,"ARTICLE",{class:!0});var m=w(t);i&&i.l(m),g=j(m),f=I(m,"H1",{});var G=w(f);n=k(G,d),G.forEach(p),y=j(m),h=I(m,"P",{class:!0});var L=w(h);A=k(L,"\u270D\uFE0F "),q=k(L,S),B=k(L," on "),H=k(L,C),L.forEach(p),P=j(m),D=I(m,"DIV",{});var R=w(D);R.forEach(p),$=j(m),b&&b.l(m),m.forEach(p),c.forEach(p),this.h()},h(){_(a,"href",`${X}/`),_(a,"class","blog-link svelte-wueg1d"),_(h,"class","post-meta"),_(t,"class","svelte-wueg1d"),_(e,"class","container-sm"),W(e,"max-width","650px")},m(u,c){M(u,e,c),s(e,a),s(a,o),s(e,l),s(e,t),i&&i.m(t,null),s(t,g),s(t,f),s(f,n),s(t,y),s(t,h),s(h,A),s(h,q),s(h,B),s(h,H),s(t,P),s(t,D),D.innerHTML=U,s(t,$),b&&b.m(t,null)},p(u,[c]){u[0].featuredImage?i?i.p(u,c):(i=N(u),i.c(),i.m(t,g)):i&&(i.d(1),i=null),c&1&&d!==(d=u[0].title+"")&&V(n,d),c&1&&S!==(S=u[0].author.node.name+"")&&V(q,S),c&1&&C!==(C=u[1](u[0].date)+"")&&V(H,C),c&1&&U!==(U=u[0].content+"")&&(D.innerHTML=U),u[2].length&&b.p(u,c)},i:O,o:O,d(u){u&&p(e),i&&i.d(),b&&b.d()}}}const se=!0,x=`
      query getPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          date
          title
          content
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
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
    `;async function le({params:r,fetch:e}){const a=await e("https://sveltekit-wp-bootstrap5-backend.mandrasch.eu/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:x,variables:{slug:r.slug}})});if(a.ok){const o=await a.json(),{post:l}=o.data;return{props:{post:l}}}return{status:a.status,error:new Error(`Could not load ${url}`)}}function ee(r,e,a){var g,f,d;let{post:o}=e;const l=n=>new Date(n).toLocaleDateString(),t=(d=(f=(g=o.categories)==null?void 0:g.nodes)==null?void 0:f.map(n=>n.name))!=null?d:[];return r.$$set=n=>{"post"in n&&a(0,o=n.post)},[o,l,t]}class re extends F{constructor(e){super();K(this,e,ee,Z,Q,{post:0})}}export{re as default,le as load,se as prerender};
