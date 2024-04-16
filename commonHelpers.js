import{S as b,a as S,i as w}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(t){return t.map(({webformatURL:a,largeImageURL:s,tags:c,likes:e,views:r,comments:i,downloads:L})=>`
        <li class="item-card">
        <a class="gallery-link" href="${s}">
            <img class="result-icon" src="${a}" alt="${c}" data-largeImage="${s}" >
            </a>
            <div class="info">
            <div><p class="likes">Likes <div>${e}</div></p></div>
            <div><p class="views">Views <div>${r}</div></p></div>
            <div><p class="comments">Comments <div>${i}</div></p></div>
            <div><p class="downloads">Downloads <div>${L}<div></p></div>
            </div>
        </li>
    `).join("")}const p=new b(".item-card a",{captionsData:"alt"}),m="https://pixabay.com/api/",q="43338805-0211d3d1e83cb5c165622303b";let M,n={key:q,q:M,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15};async function h(t,a={}){return await S(t,{params:n})}function $(t){n.q=t}function y(t){n.page=t}let l=1,g=15;const v=document.querySelector(".js-search-form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),o=document.querySelector(".load-more");v.addEventListener("submit",P);o.addEventListener("click",O);async function P(t){t.preventDefault();const a=t.target.elements.search.value;if(a){d.innerHTML="",u.classList.remove("is-hidden"),$(a),y(1);try{const{data:s}=await h(m,n);if(!s.hits.length){w.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}v.reset(),l<s.totalHits/g&&o.classList.remove("is-hidden"),d.insertAdjacentHTML("beforeend",f([...s.hits])),p.refresh()}catch(s){alert(s)}finally{u.classList.add("is-hidden")}}}async function O(){l+=1,o.disabled=!0,y(l);try{const{data:t}=await h(m,n);d.insertAdjacentHTML("beforeend",f([...t.hits])),p.refresh(),o.disabled=!1,l>=Math.ceil(t.totalHits/g)&&o.classList.add("is-hidden")}catch(t){alert(t.message)}}
//# sourceMappingURL=commonHelpers.js.map
