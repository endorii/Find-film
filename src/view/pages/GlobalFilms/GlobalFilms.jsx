import MainNavbar from "../../layouts/Navbar/Navbar";
import MoviesService from "../../../utils/services/MoviesService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './globalFilms.scss'

const GlobalFilms = ({mainGenre, mainWithoutGenre, origLang = ''}) => {

    const [films, setFilms] = useState([]);
    const [genre, setGenre] = useState(mainGenre);
    const {getFilmsByGenreId} = MoviesService();

    useEffect(() => {
        getFilmsByGenreId(genre, mainWithoutGenre, origLang).then(res => setFilms(res.results));
    }, [genre])

    const onScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    console.log(films);

    return (
        <>
            <MainNavbar/>


            <div className="genres">
                <h3>Filters:</h3>
                <ul className="genres_list">
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',28')}>
                            Action
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',12')}>
                            Adventure 
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',16')}>
                            Animation 
                        </button>
                    </li>

                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',35')}>
                            Comedy 
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',80')}>
                        Crime 
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',99')}>
                        Documentary 
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',18')}>
                        Drama
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',10751')}>
                        Family
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',14')}>
                        Fantasy
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',36')}>
                        History 
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',27')}>
                        Horror
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',10402')}>
                        Music
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',9648')}>
                        Mystery 
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',10749')}>
                        Romance
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',878')}>
                        Science Fiction
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',10770')}>
                        TV Movie
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',53')}>
                        Thriller 
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',10752')}>
                        War 
                        </button>
                    </li>
                    <li className="genres_list-item">
                        <button onClick={() => setGenre(mainGenre+',37')}>
                        Western 
                        </button>
                    </li>
                </ul>
            </div>

            <div className="global">
                <ul className="global_list">
                    {films.map(film => (
                        <li className="global_list-item" key={film.id} onClick={onScrollToTop}>
                            <Link to={{ pathname: `/production/${film.id}`, state: { id: film.id } }}>
                                <div className="global_list-item-img">
                                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" />
                                    <div className="global_list-item-title">{film.title === undefined ? film.name : film.title}</div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default GlobalFilms;