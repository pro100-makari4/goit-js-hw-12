import{a as v,S as q,i as $}from"./assets/vendor-5b76a5ec.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const C="42558168-62173c93aab0d4cbf34bb4fab",P="https://pixabay.com/api/";async function h(e,o=1){try{let r=await v.get(`${P}?key=${C}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`);if(!r.data.hits)throw new Error("Network response was not ok");return r.data}catch{}}const T=document.querySelector(".go-top-btn");T.addEventListener("click",()=>{window.scrollTo({top:0})});function E(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2+48;let o=window.scrollY;window.scrollTo({top:o+e})}const I="/goit-js-hw-12/assets/error-icon-4ed38f6a.png",k="/goit-js-hw-12/assets/caution-icon-57f96af6.png",m=document.querySelector(".form"),B=document.querySelector(".search-input"),u=document.querySelector(".gallery"),i=document.querySelector(".load-more-button"),a=document.querySelector(".loader"),g=document.querySelector(".go-top-btn"),M=new q(".gallery a",{captionsData:"alt",captionDelay:150,captionsPosition:"bottom"});let y,c,f=null;m.addEventListener("submit",N);i.addEventListener("click",O);async function N(e){e.preventDefault(),D();try{c=(await h(f,1)).hits,c.length===0?d():b(c,u)}catch{d()}finally{c.length===0?(i.classList.add("is-hidden"),a.classList.add("is-hidden"),g.classList.add("is-hidden")):(p(),m.reset(),g.classList.remove("is-hidden"))}}async function O(){i.classList.add("is-hidden"),a.classList.remove("is-hidden");let e=!1;try{const r=(await h(f,++y)).hits;r.length===0?(e=!0,d(e)):b(r,u)}catch{d()}finally{e?(i.classList.add("is-hidden"),a.classList.add("is-hidden")):(p(),E())}}function D(){u.innerHTML="",i.classList.add("is-hidden"),a.classList.remove("is-hidden"),f=B.value,y=1}function d(e=!1){const o=e?"Were sorry, but you've reached the end of search results.":"Sorry, there are no images matching your search query. Please try again!",r=e?k:I;$.error({message:o,position:"topRight",timeout:5e3,progressBar:!0,close:!0,iconUrl:r,messageColor:e?"#000":"#fafafb",iconColor:e?"#000":"#fafafb",backgroundColor:e?"#90C2DE":"#FF544B"})}function p(){a.classList.add("is-hidden"),i.classList.remove("is-hidden")}function b(e,o){const r=e.map(({webformatURL:l,largeImageURL:t,tags:s,likes:n,views:L,comments:w,downloads:S})=>`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${l}" alt="${s}" />
          </a>

          <ul class="gallery-info-list">
            <li class="gallery-info-list-item"><h4>Likes</h4><p>${n}</p></li>
            <li class="gallery-info-list-item"><h4>Views</h4><p>${L}</p></li>
            <li class="gallery-info-list-item"><h4>Comments</h4><p>${w}</p></li>
            <li class="gallery-info-list-item"><h4>Downloads</h4><p>${S}</p></li>
          </ul>
        </li>`).join("");o.insertAdjacentHTML("beforeend",r),M.refresh()}const x=document.querySelector('input[type="checkbox"]');x.addEventListener("change",function(){this.checked?(document.body.style.backgroundColor="#2C2C2F",document.body.style.color="#fbfbfb"):(document.body.style.backgroundColor="#fbfbfb",document.body.style.color="#2e2f42")});
//# sourceMappingURL=commonHelpers.js.map
