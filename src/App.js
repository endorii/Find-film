import './App.css';
import Main from './view/pages/Main/Main';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePage from './view/pages/singlePage/SinglePage';

function App() {

    const [moviesList, setMoviesList] = useState([]);
    const [popCartoonsList, setPopCartoonsList] = useState([]);
    const [popAnimeList, setPopAnimeList] = useState([]);
    const [tvList, setTVList] = useState([]);


    return (
        <Router>
            <div className="App">
                <Routes>

                    <Route path="/" element={<Main 
                        moviesList={moviesList} 
                        setMoviesList={setMoviesList} 

                        popCartoonsList={popCartoonsList} 
                        setPopCartoonsList={setPopCartoonsList}
                        
                        popAnimeList={popAnimeList}
                        setPopAnimeList={setPopAnimeList}

                        tvList={tvList}
                        setTVList={setTVList}
                    />}/>
                    <Route path="/:filmId" element={<SinglePage/>}/>
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;