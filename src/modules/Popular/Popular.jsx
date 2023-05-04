import React, { Component } from 'react';
import './popular.scss';
import Arrow from '../../assets/images/icons8-circled-right-96.png';
import { handleScroll } from '../../config/helpers/helpers';
import { Link } from 'react-router-dom';

class Popular extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPopular().then(res => this.props.setMoviesList(res.results));
    }

    onScrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    render() {

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
                        <li className="popular_list-item" key={movie.id} onClick={this.onScrollToTop}>
                            <Link to={{ pathname: `/${movie.id}`, state: { id: movie.id } }}>
                                <div className="popular_list-item-img">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                    <div className="popular_list-item-title">{movie.original_title === undefined ? movie.original_name : movie.original_title}</div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}

export default Popular;