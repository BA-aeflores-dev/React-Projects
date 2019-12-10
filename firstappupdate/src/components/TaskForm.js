import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
const ButtonGroup = Button.Group;

console.log(Button);
export default class Taskform extends Component {
    state = {
        title: '',
        description: ''
    }
    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }
    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render(){
        return(
            <form>
                <input
                    type='text'
                    name='title'
                    placeholder='Write a Task'
                    onChange={this.onChange}
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea
                    name='description'
                    placeholder="Write a description"
                    onChange={this.onChange}
                    value={this.state.description}>
                </textarea>
                <br/>
                <br/>
                <ButtonGroup>
                    <Button type="danger" onClick={ this.onSubmit } icon="cloud">Agregar</Button>
                </ButtonGroup>
            </form>
        )
    }
}