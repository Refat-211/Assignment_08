import React from 'react';
import './App.css';
import Answer from './components/Answer/Answer';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Workout from './components/Workout/Workout';

function App() {
  return (
    <div>
      <Header></Header>
      <Title></Title>
      <Workout></Workout>
      <Answer></Answer>
    </div>
  );
}

export default App;
