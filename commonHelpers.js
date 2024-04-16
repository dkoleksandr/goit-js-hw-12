import{S as f,a as m,i as p}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function h(r){return r.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:u})=>`
        <li class="item-card">
        <a class="gallery-link" href="${i}">
            <img class="result-icon" src="${s}" alt="${a}" data-largeImage="${i}" >
            </a>
            <div class="info">
            <div><p class="likes">Likes <div>${e}</div></p></div>
            <div><p class="views">Views <div>${t}</div></p></div>
            <div><p class="comments">Comments <div>${o}</div></p></div>
            <div><p class="downloads">Downloads <div>${u}<div></p></div>
            </div>
        </li>
    `).join("")}const y=new f(".item-card a",{captionsData:"alt"}),v="https://pixabay.com/api/",g="43338805-0211d3d1e83cb5c165622303b";let L;const n={key:g,q:L,image_type:"photo",orientation:"horizontal",safesearch:!0};async function b(r,s={}){return await m(r,{params:n})}function S(r){n.q=r}const d=document.querySelector(".js-search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");d.addEventListener("submit",w);async function w(r){r.preventDefault();const s=r.target.elements.search.value;if(s){c.innerHTML="",l.classList.remove("is-hidden"),S(s);try{const{data:i}=await b(v,n);if(!i.hits.length){p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}d.reset(),c.insertAdjacentHTML("beforeend",h([...i.hits])),y.refresh()}catch(i){alert(i)}finally{l.classList.add("is-hidden")}}}
//# sourceMappingURL=commonHelpers.js.map
