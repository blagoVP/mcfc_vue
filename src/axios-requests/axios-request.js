import axios from 'axios';

const appKey = 'kid_S1hugDJvI';
const basicAuth = `Basic ${btoa(`${appKey}:4c01f76bf98e4d7691f5ca1ef2c431d0`)}`;

const instance = axios.create({
    baseURL: 'https://baas.kinvey.com',
    headers: { 'Authorization': `${basicAuth}` }
});

instance.interceptors.request.use((config) => {
    config.url = `/user/${appKey}${config.url}`
  
    return config;
});

export default instance;