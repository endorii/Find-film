import './popularCartoons.scss';
import MoviesService from '../../../utils/services/MoviesService';
import Arrow from '../../../assets/images/icons8-circled-right-96.png'
import { useEffect } from 'react';
import { handleScroll } from '../../../config/helpers/helpers';

const PopularCartoons = ({popCartoonsList, setPopCartoonsList}) => {

    const { getPopularCartoons } = MoviesService();

    useEffect(() => {
        getPopularCartoons().then(res => setPopCartoonsList(res.results));
    }, []);

    return (
        <div className="animated">
        <div className="animated_title">
            <h2>Animated movies today</h2>
        </div>
        <div 
            className="scroll-button" 
            onClick={() => handleScroll('.animated_list')}><img src={Arrow}></img>
        </div>
        <div className="animated_list">
            {popCartoonsList.map(movie => (
            <div className="animated_list-item" key={movie.id}>
                <div className="animated_list-item-img">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster" />
                <div className="animated_list-item-title">{movie.original_title}</div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default PopularCartoons;