if(!self.define){let e,i={};const s=(s,t)=>(s=new URL(s+".js",t).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const o=e=>s(e,n),f={module:{uri:n},exports:r,require:o};i[n]=Promise.all(t.map((e=>f[e]||o(e)))).then((e=>(d(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/distfavicon.ico",revision:"6c9be95722a1b09901dd0c68b9d561ce"},{url:"/distindex.html",revision:"0db573907af7818a7b89f0cce88cc6ef"},{url:"/distindex.js",revision:"f50d29a27e8d22aa98c2adfac3746f2b"},{url:"/distindex.js.LICENSE.txt",revision:"faf2cb473361e1f4e2f4d408559bf845"},{url:"/distmain.css",revision:"1e72af0af2ae78979fe4fd91d4fbdb7d"}],{})}));
