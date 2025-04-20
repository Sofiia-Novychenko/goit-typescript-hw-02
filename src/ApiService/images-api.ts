import axios from 'axios';
import { Image } from '../types';

const API_KEY = 'zh1uz-x4ZaOEHiecjb5TpdpG1exOzebd765xFWvz_qs';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

interface Props {
  query: string;
  page: number;
}

interface GetImagesResponce {
  total: number;
  total_pages: number;
  results: Image[];
}

export const getImagesWithTopic = async ({
  query,
  page,
}: Props): Promise<GetImagesResponce> => {
  const response = await axios.get<GetImagesResponce>(
    `search/photos?page=${page}&query=${query}`
  );
  return {
    total: response.data.total,
    total_pages: response.data.total_pages,
    results: response.data.results,
  };
};
