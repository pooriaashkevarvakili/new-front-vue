import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.27.13:3005/api/'
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default instance;





