const NAVIGATION = [{
  title: 'Home',
  url: '/home',
}, {
  title: 'Profile',
  url: '/profile',
  children: [
    { title: 'Playlists', url: '/profile/playlists' },
    { title: 'Albums', url: '/profile/albums' },
    { title: 'Artists', url: '/profile/artists' },
  ],
}];

export default NAVIGATION;
