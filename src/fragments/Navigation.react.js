import React from 'react';
import {propTypes, defaultProps} from '../components/Navigation.react';
import { Navbar } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default class Navigation extends React.Component {
    render(){
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
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
