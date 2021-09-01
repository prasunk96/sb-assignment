import { base_url, USER_DATA, USER_TOKEN } from '../constants';
import axios from 'axios';
import { setFetchedPostedJobs, setCandidatesList } from '../app/actions';

export const fetchPostedJobs = (dispatch) => {
    const url = `${base_url}/recruiters/jobs`;
    const recruiter_token = JSON.parse(sessionStorage.getItem(USER_TOKEN));
    const headers = { Authorization: recruiter_token };
    axios.get(url, { headers }).then(response => {
        console.log(response.data.data.data);
        dispatch(setFetchedPostedJobs(response.data.data.data));
    })
    .catch(error => {
        console.log(error);
    })
}

export const postAJob = (data, history) => {
    const url = `${base_url}/jobs/`;
    const recruiter_token = JSON.parse(sessionStorage.getItem(USER_TOKEN));
    const userData = JSON.parse(sessionStorage.getItem(USER_DATA));
    const headers = { Authorization: recruiter_token };
    axios.post(url, data, { headers }).then(response => {
        console.log(response.data.data);
        history.push(`/${userData.name}/dashboard`)
    }).catch(error => {
        console.log(error);
    })
}

export const fetchCandidates = (id, dispatch) => {
    const url = `${base_url}/recruiters/jobs/${id}/candidates`;
    const recruiter_token = JSON.parse(sessionStorage.getItem(USER_TOKEN));
    const headers = { Authorization: recruiter_token };
    axios.get(url, { headers }).then(response => {
        console.log(response.data.data);
        dispatch(setCandidatesList(response.data.data));
    }).catch(error => {
        console.log(error);
    })
}