import { IS_RESET_TOKEN_VALID, SET_POSTED_JOBS } from './actionTypes';

const initialState = {
    isResetTokenValid: false,
    postedJobs: [],
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
        default:
            return {
                ...state
            }
    }
};

export default reducer;