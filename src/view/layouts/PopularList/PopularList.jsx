import Popular from "../../../modules/Popular/Popular";

const PopularList = ({moviesList, setMoviesList, popCartoonsList, setPopCartoonsList, popAnimeList, setPopAnimeList, setTVList, tvList, getResponse, getPopularAnime, getPopularCartoons, getPopularSeries }) => {
    return (
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
    )
}

export default PopularList;