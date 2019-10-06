import * as instance from 'axios';

// настраиваем instance axios
const axios = instance.create({
    baseURL: 'http://localhost:8000/'
});

// настраиваем interceptors axios для перехвата token
axios.interceptors.request.use((config)=>{

    let token = localStorage.getItem('token');

    // если token есть, то добавляем его в заголовки запроса
    if(token !== null){
        config.headers.token = token
    }

    return config
},(err)=>{
    return Promise.reject(err);
});

export default axios;