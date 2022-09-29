import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='answer'>
            <div>
                <h2>1. How does React work?</h2>
                <p>Ans: React is a JavaScript library for building user interfaces. It is used to build single-page applications. It allows us to create reusable UI components. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state. React created Virtual DOM tree. When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created.</p>
            </div>
            <div>
                <h2>2. What is the difference between props and state in react?</h2>
                <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. Props are read-only. State is both read and write. Props is Immutable. Its cannot be modified. State is Mutable. It can be modified.</p>
            </div>
            <h2></h2>
            <p></p>
        </div>
    );
};

export default Answer;