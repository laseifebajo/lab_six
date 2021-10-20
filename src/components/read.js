import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

//this is where all the images are stored
class Read extends Component
{
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response)=>{
            this.setState({mymovies:response.data.movies})
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