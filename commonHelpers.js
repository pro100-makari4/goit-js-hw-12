import{a as S,S as $,i as P}from"./assets/vendor-5b76a5ec.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const q="42558168-62173c93aab0d4cbf34bb4fab",I="https://pixabay.com/api/";async function h(t,r=1){try{let o=await S.get(`${I}?key=${q}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${r}`);if(!o.data.hits)throw new Error("Network response was not ok");return o.data}catch{}}const E="/goit-js-hw-12/assets/error-icon-4ed38f6a.png",M="/goit-js-hw-12/assets/caution-icon-57f96af6.png",g=document.querySelector(".form"),O=document.querySelector(".search-input"),f=document.querySelector(".gallery"),i=document.querySelector(".load-more-button"),n=document.querySelector(".loader"),m=new $(".gallery a",{captionsData:"alt",captionDelay:150,captionsPosition:"bottom"});let p,c,u=null;g.addEventListener("submit",D);i.addEventListener("click",N);async function D(t){t.preventDefault(),C();try{c=(await h(u,1)).hits,c.length===0?d():(L(c,f),m.refresh())}catch{d()}finally{c.length===0?(i.classList.add("is-hidden"),n.classList.add("is-hidden")):(y(),g.reset())}}async function N(){i.classList.add("is-hidden"),n.classList.remove("is-hidden");let t=!1;try{const o=(await h(u,++p)).hits;o.length===0?(t=!0,d(t)):(L(o,f),m.refresh())}catch{d()}finally{t?(i.classList.add("is-hidden"),n.classList.add("is-hidden")):y()}}function C(){f.innerHTML="",i.classList.add("is-hidden"),n.classList.remove("is-hidden"),u=O.value,p=1}function d(t=!1){const r=t?"Were sorry, but you've reached the end of search results.":"Sorry, there are no images matching your search query. Please try again!",o=t?M:E;P.error({message:r,position:"topRight",timeout:5e3,progressBar:!0,close:!0,iconUrl:o,messageColor:t?"#000":"#fafafb",iconColor:t?"#000":"#fafafb",backgroundColor:t?"#90C2DE":"#FF544B"})}function y(){n.classList.add("is-hidden"),i.classList.remove("is-hidden")}function L(t,r){const o=t.map(({webformatURL:l,largeImageURL:e,tags:s,likes:a,views:b,comments:w,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${l}" alt="${s}" />
          </a>

          <ul class="gallery-info-list">
            <li class="gallery-info-list-item"><h4>Likes</h4><p>${a}</p></li>
            <li class="gallery-info-list-item"><h4>Views</h4><p>${b}</p></li>
            <li class="gallery-info-list-item"><h4>Comments</h4><p>${w}</p></li>
            <li class="gallery-info-list-item"><h4>Downloads</h4><p>${v}</p></li>
          </ul>
        </li>`).join("");r.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map