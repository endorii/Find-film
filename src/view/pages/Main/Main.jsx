import SimpleSlider from "../../layouts/MainSlider/MainSlider";
import PopularList from "../../layouts/PopularList/PopularList";
import MoviesService from '../../../utils/services/MoviesService';

const Main = ({moviesList, setMoviesList, popCartoonsList, setPopCartoonsList, popAnimeList, setPopAnimeList, setTVList, tvList}) => {

    const { getPopularAnime, getPopularCartoons, getPopularSeries, getPopularFilms } = MoviesService();


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

                getPopularAnime={getPopularAnime}
                getPopularCartoons={getPopularCartoons}
                getPopularSeries={getPopularSeries}
                getPopularFilms={getPopularFilms}
                />
            
        </section>
    );
}

export default Main;