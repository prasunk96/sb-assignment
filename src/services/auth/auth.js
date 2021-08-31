import axios from '../apiUtils';
import { USER_TOKEN, USER_DATA, RESET_TOKEN, base_url, IS_LOGGED_IN, RESET_ALLOWED } from '../../constants';
import { setIsResetTokenValid } from '../../app/actions';

export const login = (data, history) => {
    const url = `/auth/login`;
    axios.post(url, data).then(response => {
        localStorage.setItem(USER_TOKEN, JSON.stringify(response.data.data.token));
        localStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
        localStorage.setItem(IS_LOGGED_IN, true);
        history.push(`/${response.data.data.name}/dashboard`)
    }).catch(error => {
        console.log(error);
    })
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

export const handleLogout = (history) => {
    localStorage.removeItem(USER_DATA);
    localStorage.removeItem(USER_TOKEN);
    localStorage.removeItem(RESET_TOKEN);
    localStorage.removeItem(RESET_ALLOWED);
    localStorage.removeItem(IS_LOGGED_IN);
    history.push('/');
}