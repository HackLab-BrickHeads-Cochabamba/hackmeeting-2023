/* empty css                       */import{d as z,r as u,a as k,p as y,o as Ce,n as Ne,b as Oe,c as he,w as Z,e as Se,h,i as g,F as xe,f as ee,g as te,j as V,k as je,l as Me,m as Le,q as Ee,s as be,t as Ie}from"./runtime-core.esm-bundler.32c06eb5.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},we={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function De({config:t,slidesCount:n}){const{snapAlign:e,wrapAround:o,itemsToShow:r=1}=t;if(o)return Math.max(n-1,0);let l;switch(e){case"start":l=n-r;break;case"end":l=n-1;break;case"center":case"center-odd":l=n-Math.ceil((r-.5)/2);break;case"center-even":l=n-Math.ceil(r/2);break;default:l=0;break}return Math.max(l,0)}function Pe({config:t,slidesCount:n}){const{wrapAround:e,snapAlign:o,itemsToShow:r=1}=t;let l=0;if(e||r>n)return l;switch(o){case"start":l=0;break;case"end":l=r-1;break;case"center":case"center-odd":l=Math.floor((r-1)/2);break;case"center-even":l=Math.floor((r-2)/2);break;default:l=0;break}return l}function ne({val:t,max:n,min:e}){return n<e?t:Math.min(Math.max(t,e),n)}function Be({config:t,currentSlide:n,slidesCount:e}){const{snapAlign:o,wrapAround:r,itemsToShow:l=1}=t;let c=n;switch(o){case"center":case"center-odd":c-=(l-1)/2;break;case"center-even":c-=(l-2)/2;break;case"end":c-=l-1;break}return r?c:ne({val:c,max:e-l,min:0})}function ye(t){return t?t.reduce((n,e)=>{var o;return e.type===xe?[...n,...ye(e.children)]:((o=e.type)===null||o===void 0?void 0:o.name)==="CarouselSlide"?[...n,e]:n},[]):[]}function X({val:t,max:n,min:e=0}){return t>n?X({val:t-(n+1),max:n,min:e}):t<e?X({val:t+(n+1),max:n,min:e}):t}function Re(t,n){let e;return n?function(...o){const r=this;e||(t.apply(r,o),e=!0,setTimeout(()=>e=!1,n))}:t}function Ve(t,n){let e;return function(...o){e&&clearTimeout(e),e=setTimeout(()=>{t(...o),e=null},n)}}function _e(t="",n={}){return Object.entries(n).reduce((e,[o,r])=>e.replace(`{${o}}`,String(r)),t)}var Xe=z({name:"ARIA",setup(){const t=g("config",k(Object.assign({},v))),n=g("currentSlide",u(0)),e=g("slidesCount",u(0));return()=>h("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},_e(t.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:e.value}))}}),ze=z({name:"Carousel",props:we,setup(t,{slots:n,emit:e,expose:o}){var r;const l=u(null),c=u([]),s=u(0),f=u(0),i=k(Object.assign({},v));let S=Object.assign({},v),w;const d=u((r=t.modelValue)!==null&&r!==void 0?r:0),N=u(0),E=u(0),_=u(0),j=u(0);let O,U;y("config",i),y("slidesCount",f),y("currentSlide",d),y("maxSlide",_),y("minSlide",j),y("slideWidth",s);function Y(){w=Object.assign({},t.breakpoints),S=Object.assign(Object.assign(Object.assign({},S),t),{i18n:Object.assign(Object.assign({},S.i18n),t.i18n),breakpoints:void 0}),ie(S)}function I(){if(!w||!Object.keys(w).length)return;const a=Object.keys(w).map(p=>Number(p)).sort((p,x)=>+x-+p);let m=Object.assign({},S);a.some(p=>{const x=window.matchMedia(`(min-width: ${p}px)`).matches;return x&&(m=Object.assign(Object.assign({},m),w[p])),x}),ie(m)}function ie(a){Object.entries(a).forEach(([m,p])=>i[m]=p)}const re=Ve(()=>{I(),M()},16);function M(){if(!l.value)return;const a=l.value.getBoundingClientRect();s.value=a.width/i.itemsToShow}function $(){f.value<=0||(E.value=Math.ceil((f.value-1)/2),_.value=De({config:i,slidesCount:f.value}),j.value=Pe({config:i,slidesCount:f.value}),i.wrapAround||(d.value=ne({val:d.value,max:_.value,min:j.value})))}Ce(()=>{Ne(()=>M()),setTimeout(()=>M(),1e3),I(),ce(),window.addEventListener("resize",re,{passive:!0}),e("init")}),Oe(()=>{U&&clearTimeout(U),O&&clearInterval(O),window.removeEventListener("resize",re,{passive:!0})});let b=!1;const D={x:0,y:0},P={x:0,y:0},T=k({x:0,y:0}),B=u(!1),H=u(!1),ke=()=>{B.value=!0},Te=()=>{B.value=!1};function le(a){["INPUT","TEXTAREA","SELECT"].includes(a.target.tagName)||(b=a.type==="touchstart",b||a.preventDefault(),!(!b&&a.button!==0||A.value)&&(D.x=b?a.touches[0].clientX:a.clientX,D.y=b?a.touches[0].clientY:a.clientY,document.addEventListener(b?"touchmove":"mousemove",se,!0),document.addEventListener(b?"touchend":"mouseup",ue,!0)))}const se=Re(a=>{H.value=!0,P.x=b?a.touches[0].clientX:a.clientX,P.y=b?a.touches[0].clientY:a.clientY;const m=P.x-D.x,p=P.y-D.y;T.y=p,T.x=m},i.throttle);function ue(){const a=i.dir==="rtl"?-1:1,m=Math.sign(T.x)*.4,p=Math.round(T.x/s.value+m)*a;if(p&&!b){const x=q=>{q.stopPropagation(),window.removeEventListener("click",x,!0)};window.addEventListener("click",x,!0)}C(d.value-p),T.x=0,T.y=0,H.value=!1,document.removeEventListener(b?"touchmove":"mousemove",se,!0),document.removeEventListener(b?"touchend":"mouseup",ue,!0)}function ce(){!i.autoplay||i.autoplay<=0||(O=setInterval(()=>{i.pauseAutoplayOnHover&&B.value||R()},i.autoplay))}function de(){O&&(clearInterval(O),O=null),ce()}const A=u(!1);function C(a){const m=i.wrapAround?a:ne({val:a,max:_.value,min:j.value});d.value===m||A.value||(e("slide-start",{slidingToIndex:a,currentSlideIndex:d.value,prevSlideIndex:N.value,slidesCount:f.value}),A.value=!0,N.value=d.value,d.value=m,U=setTimeout(()=>{if(i.wrapAround){const p=X({val:m,max:_.value,min:0});p!==d.value&&(d.value=p,e("loop",{currentSlideIndex:d.value,slidingToIndex:a}))}e("update:modelValue",d.value),e("slide-end",{currentSlideIndex:d.value,prevSlideIndex:N.value,slidesCount:f.value}),A.value=!1,de()},i.transition))}function R(){C(d.value+i.itemsToScroll)}function W(){C(d.value-i.itemsToScroll)}const ve={slideTo:C,next:R,prev:W};y("nav",ve),y("isSliding",A);const fe=he(()=>Be({config:i,currentSlide:d.value,slidesCount:f.value}));y("slidesToScroll",fe);const Ae=he(()=>{const a=i.dir==="rtl"?-1:1,m=fe.value*s.value*a;return{transform:`translateX(${T.x-m}px)`,transition:`${A.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${f.value*s.value}px`:"",width:"100%"}});function pe(){Y(),I(),$(),M(),de()}Object.keys(we).forEach(a=>{["modelValue"].includes(a)||Z(()=>t[a],pe)}),Z(()=>t.modelValue,a=>{a!==d.value&&C(Number(a))}),Z(f,$),e("before-init"),Y();const ge={config:i,slidesCount:f,slideWidth:s,next:R,prev:W,slideTo:C,currentSlide:d,maxSlide:_,minSlide:j,middleSlide:E};o({updateBreakpointsConfigs:I,updateSlidesData:$,updateSlideWidth:M,initDefaultConfigs:Y,restartCarousel:pe,slideTo:C,next:R,prev:W,nav:ve,data:ge});const F=n.default||n.slides,G=n.addons,me=k(ge);return()=>{const a=ye(F?.(me)),m=G?.(me)||[];a.forEach((J,K)=>J.props.index=K);let p=a;if(i.wrapAround){const J=a.map((Q,L)=>Se(Q,{index:-a.length+L,isClone:!0,key:`clone-before-${L}`})),K=a.map((Q,L)=>Se(Q,{index:a.length+L,isClone:!0,key:`clone-after-${L}`}));p=[...J,...a,...K]}c.value=a,f.value=Math.max(a.length,1);const x=h("ol",{class:"carousel__track",style:Ae.value,onMousedownCapture:i.mouseDrag?le:null,onTouchstartPassiveCapture:i.touchDrag?le:null},p),q=h("div",{class:"carousel__viewport"},x);return h("section",{ref:l,class:{carousel:!0,"is-sliding":A.value,"is-dragging":H.value,"is-hover":B.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:ke,onMouseleave:Te},[q,m,h(Xe)])}}}),ae;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(ae||(ae={}));const Ue={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Ye(t){return t in ae}const oe=t=>{const n=g("config",k(Object.assign({},v))),e=String(t.name),o=`icon${e.charAt(0).toUpperCase()+e.slice(1)}`;if(!e||typeof e!="string"||!Ye(e))return;const r=Ue[e],l=h("path",{d:r}),c=n.i18n[o]||t.title||e,s=h("title",c);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":c},[s,l])};oe.props={name:String,title:String};const $e=(t,{slots:n,attrs:e})=>{const{next:o,prev:r}=n||{},l=g("config",k(Object.assign({},v))),c=g("maxSlide",u(1)),s=g("minSlide",u(1)),f=g("currentSlide",u(1)),i=g("nav",{}),{dir:S,wrapAround:w,i18n:d}=l,N=S==="rtl",E=h("button",{type:"button",class:["carousel__prev",!w&&f.value<=s.value&&"carousel__prev--disabled",e?.class],"aria-label":d.ariaPreviousSlide,onClick:i.prev},r?.()||h(oe,{name:N?"arrowRight":"arrowLeft"})),_=h("button",{type:"button",class:["carousel__next",!w&&f.value>=c.value&&"carousel__next--disabled",e?.class],"aria-label":d.ariaNextSlide,onClick:i.next},o?.()||h(oe,{name:N?"arrowLeft":"arrowRight"}));return[E,_]},He=()=>{const t=g("config",k(Object.assign({},v))),n=g("maxSlide",u(1)),e=g("minSlide",u(1)),o=g("currentSlide",u(1)),r=g("nav",{}),l=s=>X({val:o.value,max:n.value,min:0})===s,c=[];for(let s=e.value;s<n.value+1;s++){const f=h("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":l(s)},"aria-label":_e(t.i18n.ariaNavigateToSlide,{slideNumber:s+1}),onClick:()=>r.slideTo(s)}),i=h("li",{class:"carousel__pagination-item",key:s},f);c.push(i)}return h("ol",{class:"carousel__pagination"},c)};var We=z({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:n}){const e=g("config",k(Object.assign({},v))),o=g("currentSlide",u(0)),r=g("slidesToScroll",u(0)),l=g("isSliding",u(!1)),c=()=>t.index===o.value,s=()=>t.index===o.value-1,f=()=>t.index===o.value+1,i=()=>{const S=Math.floor(r.value),w=Math.ceil(r.value+e.itemsToShow-1);return t.index>=S&&t.index<=w};return()=>{var S;return h("li",{style:{width:`${100/e.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":i(),"carousel__slide--active":c(),"carousel__slide--prev":s(),"carousel__slide--next":f(),"carousel__slide--sliding":l.value},"aria-hidden":!i()},(S=n.default)===null||S===void 0?void 0:S.call(n))}}});const Fe=(t,n)=>{const e=t.__vccOpts||t;for(const[o,r]of n)e[o]=r;return e},Ge=z({__name:"carousel",props:{images:{},viewportHeigth:{default:"400px"},numberOfImagesPerPage:{default:1.5},autoplay:{default:0},breakpoints:{default:{640:{itemsToShow:1},1024:{itemsToShow:3},1280:{itemsToShow:5}}},navigation:{type:Boolean,default:!0}},setup(t,{expose:n}){n();const o={props:t,get Carousel(){return ze},get Slide(){return We},get Pagination(){return He},get Navigation(){return $e}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),qe=["src","alt"];function Je(t,n,e,o,r,l){return V(),ee(o.Carousel,{breakpoints:e.breakpoints,autoplay:e.autoplay,wrapAround:!0,transition:300,class:"w-full"},{addons:te(()=>[e.navigation?(V(),ee(o.Navigation,{key:0})):je("",!0),Me(o.Pagination)]),default:te(()=>[(V(!0),Le(xe,null,Ee(e.images,(c,s)=>(V(),ee(o.Slide,{key:`${c.alt}-${s}`},{default:te(()=>[be("div",{class:Ie(["overflow-hidden",c.class||"h-40"])},[be("img",{src:c.path,alt:c.alt,class:"h-full w-full object-cover"},null,8,qe)],2)]),_:2},1024))),128))]),_:1},8,["breakpoints","autoplay"])}const Ze=Fe(Ge,[["render",Je]]);export{Ze as default};
