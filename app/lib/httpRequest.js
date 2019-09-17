import axios from 'axios';

// Change the wrapper to what suits the project best

export const getRequest = axios.get;
export const putRequest = axios.put;
export const postRequest = axios.post;
export const deleteRequest = axios.delete;
