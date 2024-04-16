import{S as b,a as S,i as w}from"./assets/vendor-6e0bf343.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(t){return t.map(({webformatURL:i,largeImageURL:s,tags:c,likes:e,views:r,comments:a,downloads:L})=>`
        <li class="item-card">
        <a class="gallery-link" href="${s}">
            <img class="result-icon" src="${i}" alt="${c}" data-largeImage="${s}" >
            </a>
            <div class="info">
            <div><p class="likes">Likes <div>${e}</div></p></div>
            <div><p class="views">Views <div>${r}</div></p></div>
            <div><p class="comments">Comments <div>${a}</div></p></div>
            <div><p class="downloads">Downloads <div>${L}<div></p></div>
            </div>
        </li>
    `).join("")}const m=new b(".item-card a",{captionsData:"alt"}),h="https://pixabay.com/api/",q="43338805-0211d3d1e83cb5c165622303b";let M,n={key:q,q:M,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:u};async function y(t,i={}){return await S(t,{params:n})}function $(t){n.q=t}function g(t){n.page=t}let l=1,u=15;const v=document.querySelector(".js-search-form"),d=document.querySelector(".gallery"),f=document.querySelector(".loader"),o=document.querySelector(".load-more");v.addEventListener("submit",P);o.addEventListener("click",O);async function P(t){t.preventDefault();const i=t.target.elements.search.value;if(i){d.innerHTML="",f.classList.remove("is-hidden"),$(i),g(1);try{const{data:s}=await y(h,n);if(!s.hits.length){w.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}v.reset(),l<s.totalHits/u&&o.classList.remove("is-hidden"),d.insertAdjacentHTML("beforeend",p([...s.hits])),m.refresh()}catch(s){alert(s)}finally{f.classList.add("is-hidden")}}}async function O(){l+=1,o.disabled=!0,g(l);try{const{data:t}=await y(h,n);d.insertAdjacentHTML("beforeend",p([...t.hits])),m.refresh(),o.disabled=!1,l>=Math.ceil(t.totalHits/u)&&o.classList.add("is-hidden")}catch(t){alert(t.message)}}
//# sourceMappingURL=commonHelpers.js.map
