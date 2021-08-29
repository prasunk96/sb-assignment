import { IS_RESET_TOKEN_VALID } from './actionTypes';

const initialState = {
    isResetTokenValid: false
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
        default:
            return {
                ...state
            }
    }
};

export default reducer;