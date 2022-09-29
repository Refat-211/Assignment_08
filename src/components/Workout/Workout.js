import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Workout.css'

const Workout = () => {
    const [exercise, setExercise] = useState([]);
    const [activitys, setActivitys] = useState([]);
    const [] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    }, [])

    const handleAddToList = (exercise) =>{
        console.log(exercise);
        const exerciseTime = [...activitys, exercise]
        setActivitys(exerciseTime);
    }

    return (
        <div className='workout-container'>
            <div className='exercise-container'>
                {
                    exercise.map(exercise=><Exercise 
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToList={handleAddToList}
                        ></Exercise>)
                }
            </div>
            <div className='activity-container'>
                <div className='my-info'>
                    <h2>Refat Hassan</h2>
                    <i class="fa-solid fa-location-dot"></i> Dhaka, Bangladesh
                    <p>Weight: 58kg</p>
                    <p>Height: 5.6</p>
                    <p>Age: 27yrs</p>
                    <hr/>
                </div>
                <h2>Add A Break</h2>
                <div className='btn-break'>
                    <button className='btn'>10s</button>
                    <button className='btn'>20s</button>
                    <button className='btn'>30s</button>
                    <button className='btn'>40s</button>
                    <button className='btn'>50s</button>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-details'>
                    <p>Exercise time: </p>
                    <p>Break time: </p>
                </div>
                <button className='btn-completed'>Activity Completed</button>
                {
                    activitys.map(activity => <p>Exercise time: {activity.time}</p>)
                }
            </div>
        </div>
    );
};




export default Workout;