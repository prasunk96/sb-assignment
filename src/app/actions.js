import { IS_RESET_TOKEN_VALID } from './actionTypes';

export const setIsResetTokenValid = (value) => ({
    type: IS_RESET_TOKEN_VALID,
    payload: value
})