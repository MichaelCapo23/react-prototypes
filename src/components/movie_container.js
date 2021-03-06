import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

class MoviesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }

    async componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((resp) => {
            console.log('Resp:', resp);

            this.setState({
                movies: resp.data.feed.entry
            });
        });



        // try {
        //     let response = await axios.get(url);
        //     console.log('Resp:', response);
        // } catch (err) {
        //
        // }
        
    }

    render(){
        console.log('The State is:', this.state);

        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>
        });


        return (
            <div>
                {movieList}
            </div>
        )
    }
}

export default MoviesContainer;