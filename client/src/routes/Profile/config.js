const navigationItems = ({ path }) => ([
  { title: 'Overview', url: `${path}/overview` },
  { title: 'Loved tracks', url: `${path}/loved` },
  { title: 'Playlists', url: `${path}/playlists` },
  { title: 'Albums', url: `${path}/albums` },
  { title: 'Artists', url: `${path}/artists` },
]);

export default navigationItems;
