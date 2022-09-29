import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Workout.css'
import Swal from 'sweetalert2'

const Workout = () => {
    const [exercise, setExercise] = useState([]);
    const [time, setTime] = useState(0);
    const [addbreak, setAddBreak] = useState(0);


    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    }, [])

    useEffect( () => {
        // console.log(localStorage.getItem("addbreak"));
        if (localStorage.getItem("addbreak")){
            setAddBreak(localStorage.getItem("addbreak"))
        }
        
    }, [localStorage.getItem("addbreak")])

    const handleAddToList = (props) =>{
        setTime(time + props)
    }

    const handleAddBreak = (breakTime) =>{
        localStorage.setItem("addbreak", breakTime)
        setAddBreak(breakTime)
    }

    const handleCompletedButton = () =>{
        // console.log('clicked');
        localStorage.removeItem("addbreak")
        setAddBreak(0)
        setTime(0)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Activity Completed",
            showConfirmButton: false,
            timer: 2000,
        });
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
                    <i className="fa-solid fa-location-dot"></i> Dhaka, Bangladesh
                    <p>Weight: 58kg</p>
                    <p>Height: 5.6</p>
                    <p>Age: 27yrs</p>
                    <hr/>
                </div>
                <h2>Add A Break</h2>
                <div className='btn-break'>
                    <button onClick={() => handleAddBreak(10)} className='btn'>10s</button>
                    <button onClick={() => handleAddBreak(20)} className='btn'>20s</button>
                    <button onClick={() => handleAddBreak(30)} className='btn'>30s</button>
                    <button onClick={() => handleAddBreak(40)} className='btn'>40s</button>
                    <button onClick={() => handleAddBreak(50)} className='btn'>50s</button>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-details'>
                    <p>Exercise time: {time} seconds</p>
                    <p>Break time: {addbreak} seconds</p>
                </div>
                <button onClick={() => handleCompletedButton()} className='btn-completed'>Activity Completed</button>
            </div>
        </div>
    );
};




export default Workout;