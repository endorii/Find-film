import SimpleSlider from "../../layouts/MainSlider/MainSlider";
import MainNavbar from "../../layouts/Navbar/Navbar";
import PopularList from "../../layouts/PopularList/PopularList";
import MoviesService from '../../../utils/services/MoviesService';
import Footer from "../../layouts/Footer/Footer";

const Main = ({moviesList, setMoviesList, popCartoonsList, setPopCartoonsList, popAnimeList, setPopAnimeList, setTVList, tvList}) => {

    const { getResponse, getPopularAnime, getPopularCartoons, getPopularSeries } = MoviesService();


    return (
        <section className="main">
            
            <SimpleSlider RTL={false}/>

            <PopularList 
                moviesList={moviesList} 
                setMoviesList={setMoviesList}
                popCartoonsList={popCartoonsList}
                setPopCartoonsList={setPopCartoonsList}
                popAnimeList={popAnimeList}
                setPopAnimeList={setPopAnimeList}
                setTVList={setTVList}
                tvList={tvList}
                getResponse={getResponse}
                getPopularAnime={getPopularAnime}
                getPopularCartoons={getPopularCartoons}
                getPopularSeries={getPopularSeries}
                />
            
        </section>
    );
}

export default Main;