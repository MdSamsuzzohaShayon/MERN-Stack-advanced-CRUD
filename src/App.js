import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import "semantic-ui-react";
import {Container} from 'semantic-ui-react';


import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';
import CreateUser from './components/CreateUser';



function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Container>
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} /> 
      </Container>
      
    </Router>
  );
}

export default App;
