import React, { Component } from 'react';
import { Form, Button } from "semantic-ui-react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker"

export class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);




        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }


    // THIS WILL CALL RIGHT BEFORE ANYTHING DISPLAY
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        });
    }


    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration = (e) => {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate = (date) => {
        this.setState({
            date: date
        });
    }


    onSubmit = (e) => {
        e.preventDefault(); // prevent html default behavior
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };
        console.log(exercise);
        window.location = '/';
    }



    render() {
        return (
            <div>
                <h2>Create Exercise</h2>
                <br /><br />
                <Form color="green" onSubmit={this.onSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label="Username">
                            <select ref="userInput" required value={this.state.username} onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map((user) => {
                                        return (
                                            <option key={user} value={user}>{user}</option>
                                        );
                                    })
                                }
                            </select>
                        </Form.Input>
                        <Form.Input
                            fluid
                            required
                            label="Description"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            required
                            label="Duration"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                        <Form.Input
                            fluid
                            required
                            label="Date"
                        >
                            <DatePicker fluid
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </Form.Input>

                    </Form.Group>
                    <Button inverted fluid color='teal' type="submit" >Submit</Button>
                </Form>
            </div>
        )
    }
}

export default CreateExercise;
