import axios from '../apiUtils';
import { USER_TOKEN, USER_DATA, RESET_TOKEN, base_url, IS_LOGGED_IN, RESET_ALLOWED } from '../../constants';
import { setIsResetTokenValid, setLoginErrror } from '../../app/actions';

export const login = (data, history, dispatch) => {
    const url = `/auth/login`;
    axios.post(url, data).then(response => {
        sessionStorage.setItem(USER_TOKEN, JSON.stringify(response.data.data.token));
        sessionStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
        sessionStorage.setItem(IS_LOGGED_IN, true);
        history.push(`/${response.data.data.name}/dashboard`);
    }).catch(error => {
        console.log(error);
        dispatch(setLoginErrror(error.response.data.message));
    })
}

export const signup = (data) => {
    const url = `/auth/register`;
    axios.post(url, data).then(response => {
        sessionStorage.setItem(USER_TOKEN, JSON.stringify((response.data.data.token)));
        sessionStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
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
            sessionStorage.setItem(RESET_TOKEN, JSON.stringify(response.token));
        }
    }).catch(error => {
        console.error(error);
    })
}

export const resetPassword = (data, history) => {
    const url = `${base_url}/auth/resetpassword`;
    axios.post(url, data).then(response => {
        if(response.data.success) {
            sessionStorage.removeItem(RESET_TOKEN);
            history.push('/login');
        }
    }).catch(error => {
        console.log(error);
    })
}

export const handleLogout = (history) => {
    sessionStorage.removeItem(USER_DATA);
    sessionStorage.removeItem(USER_TOKEN);
    sessionStorage.removeItem(RESET_TOKEN);
    sessionStorage.removeItem(RESET_ALLOWED);
    sessionStorage.removeItem(IS_LOGGED_IN);
    history.push('/');
}