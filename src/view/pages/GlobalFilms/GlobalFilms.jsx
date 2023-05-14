import MoviesService from "../../../utils/services/MoviesService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterForGenres from "../../layouts/FilterGenres/FilterGenres";
import ReactPaginate from 'react-paginate';

import './globalFilms.scss';

const GlobalFilms = ({ mainGenre, mainWithoutGenre, origLang = '' }) => {

    const [films, setFilms] = useState([]);
    const [genre, setGenre] = useState(mainGenre);
    const { getFilmsByGenreId } = MoviesService();

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const filmsPerPage = 20;

    useEffect(() => {
        getFilmsByGenreId(genre, mainWithoutGenre, origLang, currentPage).then(res => {
        setFilms(res.results);
        setTotalPages(res.total_pages);
        });
    }, [genre, mainWithoutGenre, origLang, currentPage, filmsPerPage]);

    const onScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const paginatedFilms = films.slice(0, filmsPerPage);


  
    return (
        <>
            <FilterForGenres mainGenre={mainGenre} setGenre={setGenre} />

                <div className="global">
                    <ul className="global_list">
                    {paginatedFilms.map(film => (
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

            <ReactPaginate
                className="pagination"
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={totalPages/20}
                activeClassName='pagination_active'
                activeLinkClassName='pagination_active'
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default GlobalFilms;