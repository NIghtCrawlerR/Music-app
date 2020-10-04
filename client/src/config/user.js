import { API_BASE_URL, PROXY_URL } from './constants';

export const GET_USER_URL = (token) => `${PROXY_URL}${API_BASE_URL}/user/me?access_token=${token}`;
