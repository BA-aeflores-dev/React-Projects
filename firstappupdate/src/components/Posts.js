import React, { Component } from 'react'
import Axios from 'axios';

export default class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        let data = [];
        await Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => data = resp.data);
        this.setState({
            posts: data
        });
    }

    render() {
        return (
            <div>
                <h1>POSTS</h1>
                {
                    this.state.posts.map( post => {
                        return <div key={post.id}>
                            <h1>{ post.title }</h1>
                            <p> {post.body }</p>
                        </div>
                    })
                }
            </div>
        )
    }
}




