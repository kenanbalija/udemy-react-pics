import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 363dbc524931084de3dfe59ec066bd069c0f7bdd4304bc268172d7fa9eda3898'
  },
});
