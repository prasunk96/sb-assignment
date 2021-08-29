import axios from '../apiUtils';
import { USER_TOKEN, USER_DATA, RESET_TOKEN, base_url } from '../../constants';
import { setIsResetTokenValid } from '../../app/actions';

export const login = (data) => {
    const url = `/auth/login`;
    axios.post(url, data).then(response => {
        localStorage.setItem(USER_TOKEN, JSON.stringify(response.data.data.token));
        localStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
    });
}

export const signup = (data) => {
    const url = `/auth/register`;
    axios.post(url, data).then(response => {
        localStorage.setItem(USER_TOKEN, JSON.stringify((response.data.data.token)));
        localStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
    });
}

export const getResetToken = (data, dispatch) => {
    const url = `/auth/resetpassword?email=${data}`;
    axios.get(url).then(response => {
        return response.data.data;
    }).then(async data => {
        const url = `/auth/resetpassword/${data.token}`;
        const res = await axios.get(url);
        return {
            token: data.token,
            res: res
        }
    }).then(response => {
        if(response.res.data.success) {
            dispatch(setIsResetTokenValid(true));
            localStorage.setItem(RESET_TOKEN, JSON.stringify(response.token));
        }
    }).catch(error => {
        console.error(error);
    })
}

export const resetPassword = (data) => {
    const url = `${base_url}/auth/resetpassword`;
    axios.post(url, data).then(response => {
        if(response.data.success) {
            localStorage.removeItem(RESET_TOKEN);
        }
    }).catch(error => {
        console.log(error);
    })
}