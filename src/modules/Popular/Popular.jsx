import './popular.scss';
import ArrowRight from '../../assets/images/white.png';
import ArrowLeft from '../../assets/images/white.png';
import { handleScrollLeft, handleScrollRight } from '../../config/helpers/helpers';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Popular = (props) => {
    useEffect(() => {
        props.getPopular().then(res => props.setMoviesList(res.results));
    });

    const onScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="popular">
            <div className="popular_title">
                <h2>{props.seth2}</h2>
            </div>
            <div 
                className="scroll-button-right" 
                onClick={() => handleScrollRight(props.tagSelector)}>
                <img src={ArrowRight} alt="scroll right" />
            </div>
            <div 
                className="scroll-button-left" 
                onClick={() => handleScrollLeft(props.tagSelector)}>
                <img src={ArrowLeft} alt="scroll right" />
            </div>

            <div className={props.tagSelector.substring(1)}>
                {props.moviesList.map(movie => (
                    <li className="popular_list-item" key={movie.id} onClick={onScrollToTop}>
                        <Link to={{ pathname: `/production/${movie.id}`, state: { id: movie.id } }}>
                            <div className="popular_list-item-img">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                <div className="popular_list-item-title">{movie.title === undefined ? movie.name : movie.title}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default Popular;