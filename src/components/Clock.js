import React from 'react';
import PropTypes from "prop-types";

const intervalTime = 1000;

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), intervalTime
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState(
            {date: new Date()}
        );
    }

    render(){
        return(
            <h2 className="clock">{this.state.date.toLocaleString()}</h2>
        )
    }
}

Clock.defaultProps = {};

Clock.propTypes = {
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

export default Clock;
