import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Workout.css'

const Workout = () => {
    const [exercise, setExercise] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    }, [])

    return (
        <div className='workout-container'>
            <div className='exercise-container'>
                {
                    exercise.map(exercise=><Exercise 
                        key={exercise.id}
                        exercise={exercise}
                        ></Exercise>)
                }
            </div>
            <div className='activity-container'>
                <h2>right</h2>
            </div>
        </div>
    );
};

export default Workout;