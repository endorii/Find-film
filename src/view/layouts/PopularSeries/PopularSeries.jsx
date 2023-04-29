import './popularSeries.scss';
import MoviesService from '../../../utils/services/MoviesService';
import Arrow from '../../../assets/images/icons8-circled-right-96.png'
import { useEffect } from 'react';
import { handleScroll } from '../../../config/helpers/helpers';

const TVShows = ({tvList, setTVList}) => {

    const { getPopularSeries } = MoviesService();

    useEffect(() => {
        getPopularSeries().then(res => setTVList(res.results));
    }, []);

    return (
        <div className="tv-shows">
            <div className="tv-shows_title">
                <h2>TV Shows today</h2>
            </div>
            <div 
                className="scroll-button" 
                onClick={() => handleScroll('.tv-shows_list')}><img src={Arrow}></img>
            </div>
            <div className="tv-shows_list">
                {tvList.map(tv => (
                <div className="tv-shows_list-item" key={tv.id}>
                    <div className="tv-shows_list-item-img">
                    <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt="" />
                    <div className="tv-shows_list-item-title">{tv.name}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default TVShows;