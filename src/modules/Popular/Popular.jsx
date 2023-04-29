import React, { Component } from 'react';
import './popular.scss';
import Arrow from '../../assets/images/icons8-circled-right-96.png';
import { handleScroll } from '../../config/helpers/helpers';

class Popular extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPopular().then(res => this.props.setMoviesList(res.results))
    }
    


    render() {
        
        console.log(this.props.moviesList);

        return (
            <div className="popular">
                <div className="popular_title">
                    <h2>{this.props.seth2}</h2>
                </div>
                <div 
                    className="scroll-button" 
                    onClick={() => handleScroll(this.props.tagSelector)}>
                    <img src={Arrow} alt="scroll right" />
                </div>

                <div className={this.props.tagSelector.substring(1)}>
                    {this.props.moviesList.map(movie => (
                        <div className="popular_list-item" key={movie.id}>
                            <div className="popular_list-item-img">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                <div className="popular_list-item-title">{movie.original_title === undefined ? movie.original_name : movie.original_title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Popular;