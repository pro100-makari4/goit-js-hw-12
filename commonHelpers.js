import{a as S,S as q,i as $}from"./assets/vendor-5b76a5ec.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const T="42558168-62173c93aab0d4cbf34bb4fab",C="https://pixabay.com/api/";async function g(t,i=1){try{let s=await S.get(`${C}?key=${T}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${i}`);if(!s.data.hits)throw new Error("Network response was not ok");return s.data}catch{}}const E=document.querySelector(".go-top-btn");E.addEventListener("click",()=>{window.scrollTo({top:0})});function I(){window.scrollTo({top:window.scrollY+window.innerHeight*.9})}const P="/goit-js-hw-12/assets/error-icon-4ed38f6a.png",k="/goit-js-hw-12/assets/caution-icon-57f96af6.png",m=document.querySelector(".form"),M=document.querySelector(".search-input"),u=document.querySelector(".gallery"),r=document.querySelector(".load-more-button"),a=document.querySelector(".loader"),h=document.querySelector(".go-top-btn"),N=new q(".gallery a",{captionsData:"alt",captionDelay:150,captionsPosition:"bottom"});let y,c,f=null;m.addEventListener("submit",O);r.addEventListener("click",B);async function O(t){t.preventDefault(),D();try{c=(await g(f,1)).hits,c.length===0?d():b(c,u)}catch{d()}finally{c.length===0?(r.classList.add("is-hidden"),a.classList.add("is-hidden"),h.classList.add("is-hidden")):(p(),m.reset(),h.classList.remove("is-hidden"))}}async function B(){r.classList.add("is-hidden"),a.classList.remove("is-hidden");let t=!1;try{const s=(await g(f,++y)).hits;s.length===0?(t=!0,d(t)):b(s,u)}catch{d()}finally{t?(r.classList.add("is-hidden"),a.classList.add("is-hidden")):(p(),I())}}function D(){u.innerHTML="",r.classList.add("is-hidden"),a.classList.remove("is-hidden"),f=M.value,y=1}function d(t=!1){const i=t?"Were sorry, but you've reached the end of search results.":"Sorry, there are no images matching your search query. Please try again!",s=t?k:P;$.error({message:i,position:"topRight",timeout:5e3,progressBar:!0,close:!0,iconUrl:s,messageColor:t?"#000":"#fafafb",iconColor:t?"#000":"#fafafb",backgroundColor:t?"#90C2DE":"#FF544B"})}function p(){a.classList.add("is-hidden"),r.classList.remove("is-hidden")}function b(t,i){const s=t.map(({webformatURL:l,largeImageURL:e,tags:o,likes:n,views:L,comments:w,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${l}" alt="${o}" />
          </a>

          <ul class="gallery-info-list">
            <li class="gallery-info-list-item"><h4>Likes</h4><p>${n}</p></li>
            <li class="gallery-info-list-item"><h4>Views</h4><p>${L}</p></li>
            <li class="gallery-info-list-item"><h4>Comments</h4><p>${w}</p></li>
            <li class="gallery-info-list-item"><h4>Downloads</h4><p>${v}</p></li>
          </ul>
        </li>`).join("");i.insertAdjacentHTML("beforeend",s),N.refresh()}const x=document.querySelector('input[type="checkbox"]');x.addEventListener("change",function(){this.checked?(document.body.style.backgroundColor="#2C2C2F",document.body.style.color="#fbfbfb"):(document.body.style.backgroundColor="#fbfbfb",document.body.style.color="#2e2f42")});
//# sourceMappingURL=commonHelpers.js.map
