import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

class Navbar extends Component {
    render() {
        return (
            <Menu color="inverted purple">
                <Container>
                    <Menu.Item>
                        <Link to="/">Exercise Tracker</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/">Erercises</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/create">Create Exercise</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/user">Create User</Link>
                    </Menu.Item>
                </Container>

            </Menu>
        )
    }
}

export default Navbar;
