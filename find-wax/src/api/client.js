import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'bearer',
    API_KEY: `${process.env.API_KEY}`
  }
});

export default apiClient;