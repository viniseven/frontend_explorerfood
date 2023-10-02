import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-syl9.onrender.com'
});
