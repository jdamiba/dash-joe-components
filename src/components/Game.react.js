import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bulma-components';
import Board from './Board';
import Clock from './Clock'; // Import a component from another file
import Game from '../utils/LazyLoader/Game';

const RealGame = lazy(Game);

export default class GameComponent extends Component {
    render() {
      return (
        <Suspense fallback={null}>
            <RealGame />
        </Suspense>
      );
    }
  }

  GameComponent.defaultProps = {};

  GameComponent.propTypes = {
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
