import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import Navigation from '../utils/LazyLoader/navigation';

const RealNavigation = lazy(Navigation);

export default class NavigationComponent extends Component {
    render() {
      return (
        <Suspense fallback={null}>
            <RealNavigation />
        </Suspense>
      );
    }
  }

  NavigationComponent.defaultProps = {};

  NavigationComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
