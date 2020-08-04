import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function Square(props){
  return(
    <Button className="square" onClick={props.onClick}>
      {props.value}
    </Button>
  )
}

Square.defaultProps = {};

Square.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default Square;
