import SimpleSlider from "../../layouts/MainSlider/MainSlider";
import MainNavbar from "../../layouts/Navbar/Navbar";
import PopularFilms from "../../layouts/PopularFilms/PopularFilms";
import PopularCartoons from "../../layouts/PopularCartoons/PopularCartoons";
import AnimeFilms from "../../layouts/PopularAnimes/PopularAnimes";
import TVShows from "../../layouts/PopularSeries/PopularSeries";

import Popular from "../../../modules/Popular/Popular";

import MoviesService from '../../../utils/services/MoviesService';

const Main = ({moviesList, setMoviesList, popCartoonsList, setPopCartoonsList, popAnimeList, setPopAnimeList, setTVList, tvList}) => {

    const { getResponse, getPopularAnime, getPopularCartoons, getPopularSeries } = MoviesService();


    return (
        <section className="main">
            <MainNavbar/>
            <SimpleSlider/>

            <div className="popular_wrapper">
                <Popular 
                    moviesList={moviesList} 
                    setMoviesList={setMoviesList} 
                    getPopular={getResponse} 
                    tagSelector={'.popular_list-films'}
                    seth2={'Popular films'}/>
                <Popular 
                    moviesList={popCartoonsList} 
                    setMoviesList={setPopCartoonsList} 
                    getPopular={getPopularCartoons} 
                    tagSelector={'.popular_list-cartoons'}
                    seth2={'Popular cartoons'}/>
                <Popular 
                    moviesList={popAnimeList} 
                    setMoviesList={setPopAnimeList} 
                    getPopular={getPopularAnime} 
                    tagSelector={'.popular_list-anime'}
                    seth2={'Popular anime'}/>
                <Popular 
                    moviesList={tvList} 
                    setMoviesList={setTVList} 
                    getPopular={getPopularSeries} 
                    tagSelector={'.popular_list-series'}
                    seth2={'Popular TV series'}/>

            </div>

        </section>
    );
}

export default Main;