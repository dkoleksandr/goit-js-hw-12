import{S as f,i as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(i){return i.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:o,downloads:u})=>`
        <li class="item-card">
        <a class="gallery-link" href="${t}">
            <img class="result-icon" src="${s}" alt="${a}" data-largeImage="${t}" >
            </a>
            <div class="info">
            <div><p class="likes">Likes <div>${e}</div></p></div>
            <div><p class="views">Views <div>${r}</div></p></div>
            <div><p class="comments">Comments <div>${o}</div></p></div>
            <div><p class="downloads">Downloads <div>${u}<div></p></div>
            </div>
        </li>
    `).join("")}const p=new f(".item-card a",{captionsData:"alt"}),y="https://pixabay.com/api/",v="43338805-0211d3d1e83cb5c165622303b";let g;const l={key:v,q:g,image_type:"photo",orientation:"horizontal",safesearch:!0};function L(i,s=""){return fetch(`${i}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function b(i){l.q=i}const d=document.querySelector(".js-search-form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader");d.addEventListener("submit",S);function S(i){i.preventDefault();const s=i.target.elements.search.value;s&&(n.innerHTML="",c.classList.remove("is-hidden"),b(s),L(y,new URLSearchParams(l)).then(t=>{if(!t.hits.length){h.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}d.reset(),n.insertAdjacentHTML("beforeend",m([...t.hits])),p.refresh()}).catch(t=>alert(t)).finally(()=>{c.classList.add("is-hidden")}))}
//# sourceMappingURL=commonHelpers.js.map
