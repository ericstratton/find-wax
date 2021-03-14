import client from './client';


// const endpoint = `/search?term=record+store&latitude=${latitude}&longitude=${longitude}`;

const getShops = (latitude, longitude) => client.get(`/search?term=record+store&latitude=${latitude}&longitude=${longitude}`);

export default {
  getShops,
};