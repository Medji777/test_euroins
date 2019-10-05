import * as instance from 'axios';

const axios = instance.create({
    baseURL: 'http://localhost:8000/'
});

axios.interceptors.request.use((config)=>{

    let token = localStorage.getItem('token');

    if(token !== null){
        config.headers.token = token
    }

    return config
},(err)=>{
    return Promise.reject(err);
});

export default axios;