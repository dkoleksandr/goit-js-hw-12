import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

export { createMarkup, lightbox };

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="item-card">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="result-icon" src="${webformatURL}" alt="${tags}" data-largeImage="${largeImageURL}" >
            </a>
            <div class="info">
            <div><p class="likes">Likes <div>${likes}</div></p></div>
            <div><p class="views">Views <div>${views}</div></p></div>
            <div><p class="comments">Comments <div>${comments}</div></p></div>
            <div><p class="downloads">Downloads <div>${downloads}<div></p></div>
            </div>
        </li>
    `
    )
    .join('');
}

const lightbox = new SimpleLightbox('.item-card a', {
  /* options */
  captionsData: 'alt',
});
