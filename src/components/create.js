import React, { Component } from 'react';

// this is a new component called create 
class Create extends Component {
    constructor() {
        //This is where the handles are binded together
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }


    }

    //in this section this is where you can add in the year, title and different posters and also add alert that shows the users their updated details
    handleSubmit(event) {
        alert('Movie Name: ' + this.state.Title + " " +
            'Movie Year: ' + this.state.Year + " " +
            'Movie Poster: ' + this.state.Poster);
        event.preventDefault();

        this.setState({
            Title:'',
            Year:'',
            Poster:''
        })
           
    }
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }

    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        });
    }

    onChangePoster(event) {
        this.setState({
            Poster: event.target.value
        });


    }




    render() {
        return (
            //this is where the buttons and a but of text are added 
            <div>
                <h2>This is my create component!</h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />

                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePoster}
                        />

                    </div>

                    <div>
                        <input type="Submit"
                            value="Add movie"
                            className="btn btn-primary">

                        </input>
                    </div>


                </form>
            </div>
        );
    }
}
export default Create;
