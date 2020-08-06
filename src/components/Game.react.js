import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import Game from '../utils/LazyLoader/Game';

const RealGame = lazy(Game);

export default class GameComponent extends Component {
    render() {
      return (
        <Suspense fallback={null}>
            <RealGame playerOne={this.props.playerOne} playerTwo={this.props.playerTwo} />
        </Suspense>
      );
    }
  }

  GameComponent.defaultProps = {playerOne: "🦚", playerTwo: "🦄" };

  GameComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The emoji used to identify the first player.
     */
    playerOne: PropTypes.string,

    /**
     * The emoji used to identify the second player
     */
    playerTwo: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
