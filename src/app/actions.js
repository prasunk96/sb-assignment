import { IS_RESET_TOKEN_VALID, SET_POSTED_JOBS, SET_CANDIDATE_LIST, SET_LOGIN_ERROR, SET_SIGNUP_ERROR } from './actionTypes';

export const setIsResetTokenValid = (value) => ({
    type: IS_RESET_TOKEN_VALID,
    payload: value
})

export const setFetchedPostedJobs = (payload) => ({
    type: SET_POSTED_JOBS,
    payload
})

export const setCandidatesList = (payload) => ({
    type: SET_CANDIDATE_LIST,
    payload
})

export const setLoginErrror = (payload) => ({
    type: SET_LOGIN_ERROR,
    payload
})

export const setSignupErrror = (payload) => ({
    type: SET_SIGNUP_ERROR,
    payload
})