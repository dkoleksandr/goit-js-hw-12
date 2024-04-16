import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createMarkup, lightbox } from './js/render-functions';
import { fetchData, BASE_URL, params, setSearchValue } from './js/pixabay-api';

const searchForm = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const search = event.target.elements.search.value;

  if (!search) {
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  setSearchValue(search);

  fetchData(BASE_URL, new URLSearchParams(params))
    .then(data => {
      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
        return;
      }

      searchForm.reset();

      gallery.insertAdjacentHTML('beforeend', createMarkup([...data.hits]));
      lightbox.refresh();
    })
    .catch(error => alert(error))
    .finally(() => {
      loader.classList.add('is-hidden');
    });
}
