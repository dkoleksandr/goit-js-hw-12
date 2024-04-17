import axios from 'axios';
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
  page: 1,
  per_page: 15
};

async function fetchData(url, options = {}) {
  console.log('p=',{ params: options });
  return await axios(url, { params: options });
}

function updateSearchValue(search) {
  params.q = search;
}

function updatePageValue(page) {
  params.page = page;
}

export {
  fetchData,
  BASE_URL,
  params,
  updateSearchValue,
  updatePageValue,
  searchValue,
};