import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

class MoviesContainer extends Component {

    async componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        try {
            let response = await axios.get(url);
            con
        } catch (err) {

        }
        
    }

    render(){
        return (
            <div>
                <h2>Movie Container</h2>
                <Movie/>
            </div>
        )
    }
}

export default MoviesContainer;