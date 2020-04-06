import axios from 'axios';

const appKey = 'kid_S1hugDJvI';
// const kinveyAuth = `Kinvey ${localStorage.getItem('token')}`;

const instance = axios.create({
    baseURL: `https://baas.kinvey.com/appdata/${appKey}/news`,
    headers: { 'Authorization': `Kinvey ${localStorage.getItem('token')}` }
});

instance.interceptors.request.use((config) => {

    return config;
});

export default instance;