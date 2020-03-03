import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);




        this.state = {
            username: ''
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }


    onSubmit = (e) => {
        e.preventDefault(); // prevent html default behavior
        const user = {
            username: this.state.username
        };
        console.log(user);
        this.setState({
            username: ''
        });
    }


    render() {
        return (
            <div>
                <h2>Create User</h2>
                <br /><br />
                <Form onSubmit={this.onSubmit}>
                    <Form.Input
                        fluid
                        required
                        label="User"
                        placeholder="Enter a user"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                    <Button inverted fluid color='teal' type="submit" >Submit</Button>
                </Form>
            </div>
        )
    }
}

export default CreateUser;
