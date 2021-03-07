import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://api.yelp.com/v3/businesses'
});

export default apiClient;