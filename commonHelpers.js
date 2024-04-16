import{S as b,a as S,i as w}from"./assets/vendor-6e0bf343.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(t){return t.map(({webformatURL:i,largeImageURL:s,tags:l,likes:e,views:r,comments:a,downloads:L})=>`
        <li class="item-card">
        <a class="gallery-link" href="${s}">
            <img class="result-icon" src="${i}" alt="${l}" data-largeImage="${s}" >
            </a>
            <div class="info">
            <div><p class="likes">Likes <div>${e}</div></p></div>
            <div><p class="views">Views <div>${r}</div></p></div>
            <div><p class="comments">Comments <div>${a}</div></p></div>
            <div><p class="downloads">Downloads <div>${L}<div></p></div>
            </div>
        </li>
    `).join("")}const m=new b(".item-card a",{captionsData:"alt"}),h="https://pixabay.com/api/",q="43338805-0211d3d1e83cb5c165622303b";let M,c={key:q,q:M,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:u};async function y(t,i={}){return await S(t,{params:c})}function $(t){c.q=t}function g(t){c.page=t}let o=1,u=15;const v=document.querySelector(".js-search-form"),d=document.querySelector(".gallery"),f=document.querySelector(".loader"),n=document.querySelector(".load-more");v.addEventListener("submit",P);n.addEventListener("click",O);async function P(t){t.preventDefault();const i=t.target.elements.search.value;if(i){d.innerHTML="",f.classList.remove("is-hidden"),$(i),g(1);try{const{data:s}=await y(h,c);if(!s.hits.length){w.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}v.reset(),o<s.totalHits/u&&n.classList.remove("is-hidden"),d.insertAdjacentHTML("beforeend",p([...s.hits])),m.refresh()}catch(s){alert(s)}finally{f.classList.add("is-hidden")}}}async function O(){o+=1,n.disabled=!0,g(o);try{const{data:t}=await y(h,c);d.insertAdjacentHTML("beforeend",p([...t.hits])),m.refresh(),n.disabled=!1,o>=Math.ceil(t.totalHits/u)&&n.classList.add("is-hidden")}catch(t){alert(t.message)}}
//# sourceMappingURL=commonHelpers.js.map
