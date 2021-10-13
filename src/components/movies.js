import React, { Component } from 'react';
import Movieitem from './movieitem';

//this is the movie component 
class Movies extends Component
{
    render(){
        return this.props.films.map((film) => {
            return <Movieitem myfilm={film} key={film.imdbID}></Movieitem>
            
        });
    }
}
export default Movies;