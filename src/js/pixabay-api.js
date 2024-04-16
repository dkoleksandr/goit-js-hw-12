export { fetchData, setSearchValue, BASE_URL, params };

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43338805-0211d3d1e83cb5c165622303b';
let searchValue;

const params = {
  key: API_KEY,
  q: searchValue,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function fetchData(url, options = '') {
  return fetch(`${url}?${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function setSearchValue(value) {
  params.q = value;
}
