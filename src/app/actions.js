import { IS_RESET_TOKEN_VALID, SET_POSTED_JOBS } from './actionTypes';

export const setIsResetTokenValid = (value) => ({
    type: IS_RESET_TOKEN_VALID,
    payload: value
})

export const setFetchedPostedJobs = (payload) => ({
    type: SET_POSTED_JOBS,
    payload
})