import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createMarkup, lightbox } from './js/render-functions';
import {
  fetchData,
  BASE_URL,
  params,
  updateSearchValue,
  updatePageValue,
} from './js/pixabay-api';

let page = 1;
let per_page = 15;

const searchForm = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loaderBottom = document.querySelector('.loader-1');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();

  const search = event.target.elements.search.value;

  if (!search) {
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  updateSearchValue(search);
  updatePageValue(1);

  try {
    const { data } = await fetchData(BASE_URL, params);

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

    if (page < data.totalHits / per_page) {
      loadMoreBtn.classList.remove('is-hidden');
    }

    gallery.insertAdjacentHTML('beforeend', createMarkup([...data.hits]));
    lightbox.refresh();
  } catch (error) {
    alert(error);
  } finally {
    loader.classList.add('is-hidden');
  }
}

async function handleLoadMore() {
  page += 1;
  loadMoreBtn.disabled = true;

  updatePageValue(page);
  loaderBottom.classList.remove('is-hidden');

  try {
    const { data } = await fetchData(BASE_URL, params);

    gallery.insertAdjacentHTML('beforeend', createMarkup([...data.hits]));
    lightbox.refresh();

    loadMoreBtn.disabled = false;

    const card = document.querySelector('.item-card');
    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (page >= Math.ceil(data.totalHits / per_page)) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        color: 'red',
        position: 'topRight',
      });
    }
  } catch (error) {
    alert(error.message);
  } finally {
    loaderBottom.classList.add('is-hidden');
  }
}
