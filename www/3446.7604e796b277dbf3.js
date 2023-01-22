"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3446],{3446:(Z,T,m)=>{m.r(T),m.d(T,{startInputShims:()=>$});var I=m(5861),b=m(8416),v=m(5730);const D=new WeakMap,w=(e,n,t,o=0,s=!1)=>{D.has(e)!==t&&(t?N(e,n,o,s):O(e,n))},P=e=>e===e.getRootNode().activeElement,N=(e,n,t,o=!1)=>{const s=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),s.appendChild(r),D.set(e,r);const i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${i}px,${t}px,0) scale(0)`},O=(e,n)=>{const t=D.get(e);t&&(D.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",H=function(){var e=(0,I.Z)(function*(n,t,o,s,r,c=!1){if(!o&&!s)return;const i=((e,n,t)=>{var o;return((e,n,t,o)=>{const s=e.top,r=e.bottom,c=n.top,d=c+15,S=.75*Math.min(n.bottom,o-t)-r,l=d-s,h=Math.round(S<0?-S:l>0?-l:0),_=Math.min(h,s-c),u=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,u)),scrollPadding:t,inputSafeY:4-(s-d)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,o||s,r);if(o&&Math.abs(i.scrollAmount)<4)t.focus();else if(w(n,t,!0,i.inputSafeY,c),t.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let d;const f=function(){var l=(0,I.Z)(function*(){void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",f),o&&(yield(0,b.c)(o,0,i.scrollAmount,i.scrollDuration)),w(n,t,!1,i.inputSafeY),t.focus()});return function(){return l.apply(this,arguments)}}(),S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",f)};if(o){const l=yield(0,b.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===t.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",f),void(d=setTimeout(f,1e3))}f()}});return function(t,o,s,r,c){return e.apply(this,arguments)}}(),B="$ionPaddingTimer",C=(e,n)=>{var t,o;if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===o?void 0:o.tagName))return;const s=(0,b.f)(e);if(null===s)return;const r=s[B];r&&clearTimeout(r),n>0?s.style.setProperty("--keyboard-offset",`${n}px`):s[B]=setTimeout(()=>{s.style.setProperty("--keyboard-offset","0px")},120)},$=(e,n)=>{const t=document,o="ios"===n,s="android"===n,r=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",o),d=e.getBoolean("inputBlurring",o),f=e.getBoolean("scrollPadding",!0),S=Array.from(t.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,h=new WeakMap,_=function(){var u=(0,I.Z)(function*(a){yield new Promise(L=>(0,v.c)(a,L));const A=a.shadowRoot||a,g=A.querySelector("input")||A.querySelector("textarea"),y=(0,b.f)(a),x=y?null:a.closest("ion-footer");if(g){if(y&&i&&!l.has(a)){const L=((e,n,t)=>{if(!t||!n)return()=>{};const o=i=>{P(n)&&w(e,n,i)},s=()=>w(e,n,!1),r=()=>o(!0),c=()=>o(!1);return(0,v.a)(t,"ionScrollStart",r),(0,v.a)(t,"ionScrollEnd",c),n.addEventListener("blur",s),()=>{(0,v.b)(t,"ionScrollStart",r),(0,v.b)(t,"ionScrollEnd",c),n.addEventListener("ionBlur",s)}})(a,g,y);l.set(a,L)}if("date"!==g.type&&"datetime-local"!==g.type&&(y||x)&&c&&!h.has(a)){const L=((e,n,t,o,s,r=!1)=>{let c;const i=f=>{c=(0,v.p)(f)},d=f=>{if(!c)return;const S=(0,v.p)(f);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,s=n.y-t.y;return o*o+s*s>e*e}return!1})(6,c,S)&&!P(n)&&H(e,n,t,o,s,r)};return e.addEventListener("touchstart",i,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",i,!0),e.removeEventListener("touchend",d,!0)}})(a,g,y,x,r,s);h.set(a,L)}}});return function(A){return u.apply(this,arguments)}}();d&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",c=>{if(n)return void(n=!1);const i=t.activeElement;if(!i||i.matches(p))return;const d=c.target;d!==i&&(d.matches(p)||d.closest(p)||(e=!1,setTimeout(()=>{e||i.blur()},50)))},!1)})(),f&&(e=>{const n=document;n.addEventListener("focusin",s=>{C(s.target,e)}),n.addEventListener("focusout",s=>{C(s.target,0)})})(r);for(const u of S)_(u);t.addEventListener("ionInputDidLoad",u=>{_(u.detail)}),t.addEventListener("ionInputDidUnload",u=>{(u=>{if(i){const a=l.get(u);a&&a(),l.delete(u)}if(c){const a=h.get(u);a&&a(),h.delete(u)}})(u.detail)})}}}]);