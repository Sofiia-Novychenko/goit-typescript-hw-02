import axios from 'axios';

const API_KEY = 'zh1uz-x4ZaOEHiecjb5TpdpG1exOzebd765xFWvz_qs';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImagesWithTopic = async (query, page) => {
  const response = await axios.get(`search/photos?page=${page}&query=${query}`);
  return {
    total: response.data.total,
    total_pages: response.data.total_pages,
    results: response.data.results,
  };
};
