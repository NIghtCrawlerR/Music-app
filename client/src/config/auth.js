const { REACT_APP_ID, REACT_APP_SECRET } = process.env;

const appId = REACT_APP_ID;
const appSecret = REACT_APP_SECRET;

const deezerConnectUrl = 'https://connect.deezer.com';
const redirectUrl = 'http://localhost:3000/home';

const params = {
  appId: `app_id=${appId}`,
  secret: `secret=${appSecret}`,
  redirectUrl: `redirect_uri=${redirectUrl}`,
  permissions: 'perms=basic_access,email'
}

export const authUrl = `${deezerConnectUrl}/oauth/auth.php?
${params.appId}
&${params.redirectUrl}
&${params.permissions}
&response_type=token`;
