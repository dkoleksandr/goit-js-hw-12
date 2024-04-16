import axios from 'axios';

export { fetchData, BASE_URL, params, page, per_page, updateSearchValue, updatePageValue };
import { page, per_page } from '../main';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43338805-0211d3d1e83cb5c165622303b';
let searchValue;


let params = {
  key: API_KEY,
  q: searchValue,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page,
  per_page
};

async function fetchData(url, options = {}) {
  return await axios(url, { params })
}

function updateSearchValue(search ) {
  params.q = search;
}

function updatePageValue(page){
  params.page = page;
}