const v="3.1.3",f={"Content-Type":"application/json"},g=e=>`${e.replace(/\/?$/,"/")}api/`,u=(e,t="")=>{if(typeof e=="object"&&e.errno)throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},$=({serverURL:e,lang:t,paths:r,type:a,signal:o})=>fetch(`${g(e)}article?path=${encodeURIComponent(r.join(","))}&type=${encodeURIComponent(a.join(","))}&lang=${t}`,{signal:o}).then(n=>n.json()).then(n=>u(n,"Get counter").data),R=({serverURL:e,lang:t,path:r,type:a,action:o})=>fetch(`${g(e)}article?lang=${t}`,{method:"POST",headers:f,body:JSON.stringify({path:r,type:a,action:o})}).then(n=>n.json()).then(n=>u(n,"Update counter").data),U=({serverURL:e,lang:t,paths:r,signal:a})=>$({serverURL:e,lang:t,paths:r,type:["time"],signal:a}),w=e=>R({...e,type:"time",action:"inc"}),L=(e="")=>e.replace(/\/$/u,""),b=e=>/^(https?:)?\/\//.test(e),d=e=>{const t=L(e);return b(t)?t:`https://${t}`},j=e=>{e.name!=="AbortError"&&console.error(e.message)},m=e=>e.dataset.path||null,y=(e,t)=>{t.forEach((r,a)=>{const o=e[a].time;typeof o=="number"&&(r.innerText=o.toString())})},S=({serverURL:e,path:t=window.location.pathname,selector:r=".waline-pageview-count",update:a=!0,lang:o=navigator.language})=>{const n=new AbortController,l=Array.from(document.querySelectorAll(r)),p=i=>{const s=m(i);return s!==null&&t!==s},h=i=>U({serverURL:d(e),paths:i.map(s=>m(s)||t),lang:o,signal:n.signal}).then(s=>y(s,i)).catch(j);if(a){const i=l.filter(c=>!p(c)),s=l.filter(p);w({serverURL:d(e),path:t,lang:o}).then(c=>y(c,i)),s.length&&h(s)}else h(l);return n.abort.bind(n)};export{S as pageviewCount,v as version};
//# sourceMappingURL=pageview.js.map