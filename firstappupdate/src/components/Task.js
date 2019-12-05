import React, { Component } from 'react';

class Task extends Component {
    render() {
        let {task} = this.props;
        return <div>
            <h1>Tasks</h1>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            <input type="checkBox"/>
            <button>
                x
            </button>
        </div>
    }
}

export default Task;

