import axios from 'axios';

const api = axios.create({
  // TODO: move to .ENV
  baseURL: 'http://192.168.1.91:3333',
});

export { api };
