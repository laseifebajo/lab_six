import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

//this is where all the images are stored
//axios talks http to the server
class Read extends Component
{

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies:response.data.mymovies})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mymovies: []
    };

    render(){
        return(
            <div>
                {/* This is the text that is shown on screen */}
                <h2>This is my read component !</h2>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;