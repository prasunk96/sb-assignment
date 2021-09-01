import { IS_RESET_TOKEN_VALID, SET_CANDIDATE_LIST, SET_POSTED_JOBS, SET_LOGIN_ERROR, SET_SIGNUP_ERROR } from './actionTypes';

const initialState = {
    isResetTokenValid: false,
    postedJobs: [],
    candidateList: [],
    loginError: '',
    signupError: {}
}

const reducer = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case IS_RESET_TOKEN_VALID:
            return {
                ...state,
                isResetTokenValid: action.payload
            }
        case SET_POSTED_JOBS:
            return {
                ...state,
                postedJobs: action.payload
            }
        case SET_CANDIDATE_LIST:
            return {
                ...state,
                candidateList: action.payload
            }
        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload
            }
        case SET_SIGNUP_ERROR:
            return {
                ...state,
                signupError: action.payload
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;