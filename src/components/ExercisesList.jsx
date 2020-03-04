import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'semantic-ui-react';



const Exercise = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.exercise.username}</Table.Cell>
            <Table.Cell>{props.exercise.description}</Table.Cell>
            <Table.Cell>{props.exercise.duration}</Table.Cell>
            <Table.Cell>{props.exercise.date.substring(0, 10)}</Table.Cell>
            <Table.Cell>
                <Link to={'/edit/' + props.exercise._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
            </Table.Cell>
        </Table.Row>
    );
}




class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);


        this.state = { exercises: [] };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                this.setState({
                    exercises: res.data
                });
            })
            .catch(err => console.log(err));
    }


    deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        });
    }


    exerciseList = () => {
        return this.state.exercises.map(ce => {
            return <Exercise exercise={ce} deleteExercise={this.deleteExercise} key={ce} />
        })
    }





    render() {
        return (
            <div>
                <h2>Logged Exercises</h2>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Username</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Duration</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.exerciseList()}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default ExercisesList;

