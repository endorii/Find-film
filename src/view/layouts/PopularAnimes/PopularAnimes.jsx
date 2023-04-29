import './popularAnimes.scss';
import MoviesService from '../../../utils/services/MoviesService';
import Arrow from '../../../assets/images/icons8-circled-right-96.png'
import { useEffect } from 'react';
import { handleScroll } from '../../../config/helpers/helpers';

const AnimeFilms = ({popAnimeList, setPopAnimeList}) => {

    const { getPopularAnime } = MoviesService();

    useEffect(() => {
        getPopularAnime().then(res => setPopAnimeList(res.results));
    }, []);

    return (
        <div className="anime">
            <div className="anime_title">
                <h2>Anime films today</h2>
            </div>
            <div 
                className="scroll-button" 
                onClick={() => handleScroll('.anime_list')}><img src={Arrow}></img>
            </div>
            <div className="anime_list">
                {popAnimeList.map(movie => (
                <div className="anime_list-item" key={movie.id}>
                    <div className="anime_list-item-img">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    <div className="anime_list-item-title">{movie.original_title}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default AnimeFilms;