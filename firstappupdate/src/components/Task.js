import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import AppContext from '../context/AppContext'

const Task = props => {

    const [task, setTask] = useState(props.task);

    function styleCompleted() {
        return {
            fontSize: '20px',
            color: task.done ? 'gray' : 'black',
            textDecoration: task.done ? 'line-through' : 'none'
        }
    };

    const { color, appFunctions, test}  = useContext(AppContext);
    console.log(useContext(AppContext));

    let btnDelete = {
        fontSize: '18px',
        background: 'red',
        color: color, //'#fff',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '50%',
        cursor: 'pointer'
    };

    return <p style={styleCompleted()}>
        {task.title} -
        {task.description} -
        {task.done} -
        {task.id}
        <input type="checkBox" onClick={appFunctions.checkDone.bind(this,task.id)}/>
        <button
            style={ btnDelete }
            onClick={ appFunctions.deleteTask.bind(this,task.id) }>
            x
        </button>
    </p>
}

Task.propTypes = {
    task: propTypes.object.isRequired
}

export default Task;

