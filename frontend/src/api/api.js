import axios from './instance';

const api = {
    auth(data) {
        return axios.post('api/auth/login', data)
    },
    getUsers() {
        return axios.get('api/users').then(u => u.data)
    }
};

export default api;