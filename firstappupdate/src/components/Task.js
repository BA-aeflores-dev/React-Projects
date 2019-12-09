import React, { Component } from 'react';
import propTypes from 'prop-types';

class Task extends Component {

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        let {task} = this.props;
        let btnDelete = {
            fontSize: '18px',
            background: 'red',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '50%',
            cursor: 'pointer'
        };
        return <p style={this.styleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            <input type="checkBox"/>
            <button style={ btnDelete }>
                x
            </button>
        </p>
    }
}

Task.propTypes = {
    task: propTypes.object.isRequired
}

export default Task;

