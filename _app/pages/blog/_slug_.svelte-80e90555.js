import{S as F,i as K,s as Q,e as v,c as I,J,b as _,f as O,d as g,t as E,k as T,a as b,g as k,n as S,H as s,I as V,L as W,h as $}from"../../chunks/vendor-509e4c84.js";function N(r){let e,a,o;return{c(){e=v("img"),this.h()},l(l){e=I(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){J(e.src,a=r[0].featuredImage.node.sourceUrl)||_(e,"src",a),_(e,"alt",o=r[0].featuredImage.node.altText),_(e,"class","svelte-wueg1d")},m(l,t){O(l,e,t)},p(l,t){t&1&&!J(e.src,a=l[0].featuredImage.node.sourceUrl)&&_(e,"src",a),t&1&&o!==(o=l[0].featuredImage.node.altText)&&_(e,"alt",o)},d(l){l&&g(e)}}}function X(r){let e,a,o,l,t,p=r[2].join(", ")+"",f;return{c(){e=v("div"),a=v("h4"),o=E("Categorized As"),l=T(),t=v("p"),f=E(p),this.h()},l(d){e=I(d,"DIV",{class:!0});var n=b(e);a=I(n,"H4",{class:!0});var y=b(a);o=k(y,"Categorized As"),y.forEach(g),l=S(n),t=I(n,"P",{});var h=b(t);f=k(h,p),h.forEach(g),n.forEach(g),this.h()},h(){_(a,"class","svelte-wueg1d"),_(e,"class","category-list svelte-wueg1d")},m(d,n){O(d,e,n),s(e,a),s(a,o),s(e,l),s(e,t),s(t,f)},p:V,d(d){d&&g(e)}}}function Y(r){let e,a,o,l,t,p,f,d=r[0].title+"",n,y,h,A,C=r[0].author.node.name+"",q,B,L=r[1](r[0].date)+"",H,P,D,U=r[0].content+"",M,i=r[0].featuredImage&&N(r),w=r[2].length&&X(r);return{c(){e=v("div"),a=v("a"),o=E("\u2190 Blog"),l=T(),t=v("article"),i&&i.c(),p=T(),f=v("h1"),n=E(d),y=T(),h=v("p"),A=E("\u270D\uFE0F "),q=E(C),B=E(" on "),H=E(L),P=T(),D=v("div"),M=T(),w&&w.c(),this.h()},l(u){e=I(u,"DIV",{class:!0,style:!0});var c=b(e);a=I(c,"A",{href:!0,class:!0});var z=b(a);o=k(z,"\u2190 Blog"),z.forEach(g),l=S(c),t=I(c,"ARTICLE",{class:!0});var m=b(t);i&&i.l(m),p=S(m),f=I(m,"H1",{});var G=b(f);n=k(G,d),G.forEach(g),y=S(m),h=I(m,"P",{class:!0});var j=b(h);A=k(j,"\u270D\uFE0F "),q=k(j,C),B=k(j," on "),H=k(j,L),j.forEach(g),P=S(m),D=I(m,"DIV",{});var R=b(D);R.forEach(g),M=S(m),w&&w.l(m),m.forEach(g),c.forEach(g),this.h()},h(){_(a,"href","/"),_(a,"class","blog-link svelte-wueg1d"),_(h,"class","post-meta"),_(t,"class","svelte-wueg1d"),_(e,"class","container-sm"),W(e,"max-width","650px")},m(u,c){O(u,e,c),s(e,a),s(a,o),s(e,l),s(e,t),i&&i.m(t,null),s(t,p),s(t,f),s(f,n),s(t,y),s(t,h),s(h,A),s(h,q),s(h,B),s(h,H),s(t,P),s(t,D),D.innerHTML=U,s(t,M),w&&w.m(t,null)},p(u,[c]){u[0].featuredImage?i?i.p(u,c):(i=N(u),i.c(),i.m(t,p)):i&&(i.d(1),i=null),c&1&&d!==(d=u[0].title+"")&&$(n,d),c&1&&C!==(C=u[0].author.node.name+"")&&$(q,C),c&1&&L!==(L=u[1](u[0].date)+"")&&$(H,L),c&1&&U!==(U=u[0].content+"")&&(D.innerHTML=U),u[2].length&&w.p(u,c)},i:V,o:V,d(u){u&&g(e),i&&i.d(),w&&w.d()}}}const te=!0,Z=`
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
    `;async function ae({page:r,fetch:e}){const a=await e("https://sveltekit-wp-bootstrap5-backend.mandrasch.eu/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:Z,variables:{slug:r.params.slug}})});if(a.ok){const o=await a.json(),{post:l}=o.data;return{props:{post:l}}}return{status:a.status,error:new Error(`Could not load ${url}`)}}function x(r,e,a){var p,f,d;let{post:o}=e;const l=n=>new Date(n).toLocaleDateString(),t=(d=(f=(p=o.categories)==null?void 0:p.nodes)==null?void 0:f.map(n=>n.name))!=null?d:[];return r.$$set=n=>{"post"in n&&a(0,o=n.post)},[o,l,t]}class se extends F{constructor(e){super();K(this,e,x,Y,Q,{post:0})}}export{se as default,ae as load,te as prerender};
