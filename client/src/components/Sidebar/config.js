import { USER_ID } from 'config';

const NAVIGATION = [{
  title: 'Home',
  url: '/home',
}, {
  title: 'Profile',
  url: `/profile/${USER_ID}`,
  children: [
    { title: 'Loved tracks', url: `/profile/${USER_ID}/loved` },
    { title: 'Playlists', url: `/profile/${USER_ID}/playlists` },
    { title: 'Albums', url: `/profile/${USER_ID}/albums` },
    { title: 'Artists', url: `/profile/${USER_ID}/artists` },
  ],
}];

export default NAVIGATION;
