const NAVIGATION = (userId) => ([{
  title: 'Home',
  url: '/home',
}, {
  title: 'Profile',
  url: `/profile/${userId}`,
  children: [
    { title: 'Loved tracks', url: `/profile/${userId}/loved` },
    { title: 'Playlists', url: `/profile/${userId}/playlists` },
    { title: 'Albums', url: `/profile/${userId}/albums` },
    { title: 'Artists', url: `/profile/${userId}/artists` },
  ],
}]);

export default NAVIGATION;
