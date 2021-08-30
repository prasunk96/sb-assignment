import { base_url, USER_TOKEN } from '../constants';
import axios from 'axios';
import { setFetchedPostedJobs } from '../app/actions';

export const fetchPostedJobs = (dispatch) => {
    const url = `${base_url}/recruiters/jobs`;
    const recruiter_token = JSON.parse(localStorage.getItem(USER_TOKEN));
    const headers = { Authorization: recruiter_token };
    axios.get(url, { headers }).then(response => {
        console.log(response.data.data.data);
        dispatch(setFetchedPostedJobs(response.data.data.data));
    })
    .catch(error => {
        console.log(error);
    })
}