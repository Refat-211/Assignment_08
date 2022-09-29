import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {img, title, time} = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
        </div>
    );
};

export default Exercise;