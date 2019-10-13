import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://my-react-burger-builder-58fbd.firebaseio.com/'
});

export default instance;