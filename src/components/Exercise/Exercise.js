import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {handleAddToList} = props;
    const {img, title, time} = props.exercise;
    
    return (
        <div className='exercise'>
            <div>
            <img src={img} alt="" />
            <h3 className='exercise-title'>{title}</h3>
            <p className='exercise-age'>For Age: 20-25</p>
            <p className='exercise-time'>Time required: {time}s</p>
            </div>
            <button onClick={() => handleAddToList(props.exercise)} className='btn-list'>
                <h4>Add to List</h4>
            </button>
        </div>
        
    );
};

export default Exercise;