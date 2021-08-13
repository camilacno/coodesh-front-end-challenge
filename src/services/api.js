import axios from 'axios';
import { API_URI, LIMIT_RESULTS } from '../core/constants';

const api = axios.create({
  baseURL: `${API_URI}`,
  params: {
    results: `${LIMIT_RESULTS}`,
  },
});

export default api;
