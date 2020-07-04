import { API_BASE_URL, USER_ID, PROXY_URL } from './constants';

export const GET_USER_URL = (token) => `${PROXY_URL}${API_BASE_URL}/user/me?access_token=${token}`;

export const USER_PLAYLIST_URL = `${PROXY_URL}${API_BASE_URL}/user/${USER_ID}/playlists`;
