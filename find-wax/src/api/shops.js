import client from './client';


const endpoint = '/search?term=record+store&location=portland';

const getShops = () => client.get(endpoint);

export default {
  getShops,
};