import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, NavigationLink } from './styles';

const InlineNavigation = ({ navigation }) => (
  <Navigation className="InlineNavigation">
    {navigation.map(({ url, title }) => (
      <NavigationLink
        to={url}
        key={url}
        activeClassName="active"
      >
        {title}
      </NavigationLink>
    ))}
  </Navigation>
);

InlineNavigation.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })),
};

InlineNavigation.defaultProps = {
  navigation: [],
};

export default InlineNavigation;
