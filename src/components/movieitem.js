import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

//in this component we list the movies in 
class Movieitem extends Component {
    render() {
        return (
            <div>


                {/* This is the text that is seen on screen */}
                <Card>
                    {/* This code is what makes the title show on screen */}
                    <Card.Header>{this.props.myfilm.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            {/* This code is what makes the images show on screen */}
                            <img src={this.props.myfilm.Poster}></img>
                            <footer>
                                {this.props.myfilm.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );

    }
}
export default Movieitem;