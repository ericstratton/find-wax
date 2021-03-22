import client from './client';


// const endpoint = '/search?term=record+store&location=portland';
// location `/search?term=record+store&latitude=${location.latitude}&longitude=${location.longitude}`

const getShops = (location) => client.get(`/search?term=record+store&latitude=${location.latitude}&longitude=${location.longitude}`);

export default {
  getShops,
};