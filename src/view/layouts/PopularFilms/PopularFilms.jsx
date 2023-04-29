import './popularFilms.scss';
import MoviesService from '../../../utils/services/MoviesService';
import Arrow from '../../../assets/images/icons8-circled-right-96.png'
import { useEffect } from 'react';
import { handleScroll } from '../../../config/helpers/helpers';

const PopularFilms = ({moviesList, setMoviesList}) => {

    const { getResponse } = MoviesService();

    useEffect(() => {
        getResponse().then(res => setMoviesList(res.results))
    }, []);

    return (
        <div className="popular">
            <div className="popular_title">
                <h2>Popular films today</h2>
            </div>
            <div 
                className="scroll-button" 
                onClick={() => handleScroll('.popular_list')}><img src={Arrow}></img>
            </div>
            <div className="popular_list">
                {moviesList.map(movie => (
                    <div className="popular_list-item" key={movie.id}>
                        <div className="popular_list-item-img">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            <div className="popular_list-item-title">{movie.original_title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularFilms;