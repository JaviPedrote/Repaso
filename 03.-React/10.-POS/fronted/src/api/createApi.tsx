import axios from 'axios';

const createApi = axios.create({
    baseURL: 'http://localhost:3000',
  });

  export default createApi;