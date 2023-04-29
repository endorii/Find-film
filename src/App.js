import './App.css';
import Main from './view/pages/Main/Main';
import { useState } from 'react';

function App() {

    const [movies, setMovies] = useState([]);
    const [moviesList, setMoviesList] = useState([]);
    const [popCartoonsList, setPopCartoonsList] = useState([]);
    const [popAnimeList, setPopAnimeList] = useState([]);
    const [tvList, setTVList] = useState([]);


    return (
        <div className="App">
            <Main 
                moviesList={moviesList} 
                setMoviesList={setMoviesList} 

                popCartoonsList={popCartoonsList} 
                setPopCartoonsList={setPopCartoonsList}
                
                popAnimeList={popAnimeList}
                setPopAnimeList={setPopAnimeList}

                tvList={tvList}
                setTVList={setTVList}
                />
        </div>
    );
}

export default App;
