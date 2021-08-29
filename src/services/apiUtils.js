import axios from 'axios';
import { base_url } from '../constants';

export default axios.create({
    baseURL: base_url,
    headers: {
        'content-type': 'application/json'
    },
    responseType: 'json'
});
