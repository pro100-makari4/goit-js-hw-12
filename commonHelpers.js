import{a as v,S as I,i as q}from"./assets/vendor-5b76a5ec.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const P="42558168-62173c93aab0d4cbf34bb4fab",$="https://pixabay.com/api/";async function g(e,o=1){try{let i=await v.get(`${$}?key=${P}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`);if(!i.data.hits)throw new Error("Network response was not ok");return i.data}catch{}}const C=document.querySelector(".go-top-btn");C.addEventListener("click",()=>{window.scrollTo({top:0})});function T(){const e=E();let o=window.scrollY;window.scrollTo({top:o+e})}function E(){const e=document.querySelector(".gallery-item").getBoundingClientRect();return window.innerWidth<=500?e.height*2+100:e.height*2+60*2}const k="/goit-js-hw-12/assets/error-icon-4ed38f6a.png",x="/goit-js-hw-12/assets/caution-icon-57f96af6.png",m=document.querySelector(".form"),B=document.querySelector(".search-input"),u=document.querySelector(".gallery"),r=document.querySelector(".load-more-button"),a=document.querySelector(".loader"),h=document.querySelector(".go-top-btn"),M=new I(".gallery a",{captionsData:"alt",captionDelay:150,captionsPosition:"bottom"});let y,c,f=null;m.addEventListener("submit",N);r.addEventListener("click",O);async function N(e){e.preventDefault(),D();try{c=(await g(f,1)).hits,c.length===0?d():b(c,u)}catch{d()}finally{c.length===0?(r.classList.add("is-hidden"),a.classList.add("is-hidden"),h.classList.add("is-hidden")):(p(),m.reset(),h.classList.remove("is-hidden"))}}async function O(){r.classList.add("is-hidden"),a.classList.remove("is-hidden");let e=!1;try{const i=(await g(f,++y)).hits;i.length===0?(e=!0,d(e)):b(i,u)}catch{d()}finally{e?(r.classList.add("is-hidden"),a.classList.add("is-hidden")):(p(),T())}}function D(){u.innerHTML="",r.classList.add("is-hidden"),a.classList.remove("is-hidden"),f=B.value,y=1}function d(e=!1){const o=e?"Were sorry, but you've reached the end of search results.":"Sorry, there are no images matching your search query. Please try again!",i=e?x:k;q.error({message:o,position:"topRight",timeout:5e3,progressBar:!0,close:!0,iconUrl:i,messageColor:e?"#000":"#fafafb",iconColor:e?"#000":"#fafafb",backgroundColor:e?"#90C2DE":"#FF544B"})}function p(){a.classList.add("is-hidden"),r.classList.remove("is-hidden")}function b(e,o){const i=e.map(({webformatURL:l,largeImageURL:t,tags:s,likes:n,views:L,comments:w,downloads:S})=>`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${l}" alt="${s}" />
          </a>

          <ul class="gallery-info-list">
            <li class="gallery-info-list-item"><h4>Likes</h4><p>${n}</p></li>
            <li class="gallery-info-list-item"><h4>Views</h4><p>${L}</p></li>
            <li class="gallery-info-list-item"><h4>Comments</h4><p>${w}</p></li>
            <li class="gallery-info-list-item"><h4>Downloads</h4><p>${S}</p></li>
          </ul>
        </li>`).join("");o.insertAdjacentHTML("beforeend",i),M.refresh()}const H=document.querySelector('input[type="checkbox"]');H.addEventListener("change",function(){this.checked?(document.body.style.backgroundColor="#2C2C2F",document.body.style.color="#fbfbfb"):(document.body.style.backgroundColor="#fbfbfb",document.body.style.color="#2e2f42")});
//# sourceMappingURL=commonHelpers.js.map