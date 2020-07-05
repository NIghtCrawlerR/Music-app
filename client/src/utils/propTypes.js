import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

PropTypes.history = {
  ...ReactRouterPropTypes.history,
};

PropTypes.match = {
  ...ReactRouterPropTypes.match,
};

PropTypes.location = {
  ...ReactRouterPropTypes.location,
};

export default PropTypes;
