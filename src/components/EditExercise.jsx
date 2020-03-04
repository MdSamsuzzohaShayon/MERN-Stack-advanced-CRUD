import React, { Component } from 'react';
import { Form, Button } from "semantic-ui-react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker"

export class EditExercise extends Component {
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
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date)
                });
            })
            .catch(err=> console.log(err));



        axios.get('http://localhost:5000/users')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user=> user.username)
                    });
                }
            })
            .catch(err=> console.log(err));
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

        // MAKE SURE YOU RUN BACKEND AND FRONT END BOTH, RUN DATABASE ALSO
        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        console.log(exercise);
        window.location = '/';
    }



    render() {
        return (
            <div>
                <h2>Update Exercise</h2>
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
                    <Button inverted fluid color='teal' type="submit" >Update</Button>
                </Form>
            </div>
        )
    }
}



export default EditExercise;
