import { create } from 'apisauce';
import { API_KEY } from '@env';


const apiClient = create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export default apiClient;