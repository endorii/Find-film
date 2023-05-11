import React, { useState } from "react";
import MoviesService from "../../utils/services/MoviesService";
import './movieSearch.scss';
import { Link } from "react-router-dom";



const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const {searchMovies} = MoviesService();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm === "") {
          setMovies([]);
        }
        searchMovies(searchTerm).then((res) => setMovies(res.results));
    };

    const onScrollToTop = () => {
        window.scrollTo(0, 0);
        setMovies([]);
        setSearchTerm('');
    }
    
    return (
        <div className="search">
            <form className="search_form" onChange={handleSearch}>
                <input
                className="search_form-input"
                type="text"
                placeholder="Введіть назву фільму"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
            </form>

            <div className="search_movies">
                {searchTerm.length > 1 && movies.length > 0 && (
                <ul className="search_movies-list">
                    {movies.map((movie) => (
                        <li className="search_movies-list-item" key={movie.id} onClick={onScrollToTop}>
                            <Link to={`/production/${movie.id}`}>
                                <div className="search_movies-list-item-img">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                </div>
                                <div className="search_movies-list-item-title">
                                    {movie.title}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    );
}

export default MovieSearch;
