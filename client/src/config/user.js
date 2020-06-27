const apiBaseUrl = 'https://api.deezer.com';

export const getUserUrl = token => `${apiBaseUrl}/user/me?access_token=${token}`;