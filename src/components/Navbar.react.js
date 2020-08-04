import React from 'react';
import PropTypes from "prop-types";
import { Navbar } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function Navigation() {
    return (
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img src="https://bulma.io/images/bulma-logo.png" alt="" />
          </Navbar.Item>
          <Navbar.Burger className="trigger-menu" />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item dropdown hoverable>
              <Navbar.Link>DropDown</Navbar.Link>
              <Navbar.Dropdown boxed>
                <Navbar.Item href="#">Option 1</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item href="#">Option 2</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item href="#">Option 3</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item href="#">Option 4</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item href="#">Option 5</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
}

Navigation.defaultProps = {};

Navigation.propTypes = {
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

export default Navigation;
