import './singlePage.scss';
import MoviesService from '../../../utils/services/MoviesService';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const SinglePage = () => {

    const [movie, setMovie] = useState([]);
    const [videoKey, setVideoKey] = useState([]);
    const {getFilmById, getVideo} = MoviesService();
    const { filmId } = useParams();

    const date = new Date(movie.release_date);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    useEffect(()=>{
        getFilmById(filmId).then(res => setMovie(res));
        getVideo(filmId).then(video => setVideoKey(video.results[0].key));
    }, [filmId])

    console.log(movie);
    console.log(videoKey);

    // const genres = movie.genres.map(film => `${film.name} `);
    // const countries = movie.production_countries.map(item => `${item.name} `);

    return (
        <>
            <div className="single">
                <li className="single_item">
                    <div className="single_item-wrapper">
                        <img className='single_item-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        <div>
                            <div className="single_item-title">{movie.original_title}
                            </div>

                            <div className="single_item-info">
                                <ul className='single_item-info-list'>
                                    <li className="single_item-info-list-item">Raiting: <span>{movie.vote_average}</span> </li>
                                    <li className="single_item-info-list-item">Date of release:  <span>{formattedDate}</span></li>
                                    <li className="single_item-info-list-item">Country:  
                                        {/* <span>{countries}</span> */}
                                    </li>
                                    <li className="single_item-info-list-item">Genres: 
                                        {/* <span>{genres}</span> */}
                                    </li>
                                    <li className="single_item-info-list-item">Duration:  <span>{movie.runtime}</span> minutes </li>
                                    <li className="single_item-info-list-item">Budget:  <span>{movie.budget + '$'}</span></li>
                                </ul>
                            </div>

                            <div>
                                <h3>Description</h3>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                    <h4>Official trailer</h4>
                    <iframe width='300px' height='300px'
                        src={`https://www.youtube.com/embed/${videoKey}`}>
                    </iframe>
                </li>
            </div>
        </>
    );
}

export default SinglePage;